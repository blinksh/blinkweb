import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import fetch from "../../lib/fetch";
import matter from "gray-matter";
import markdownToHtml from "../../lib/markdown-to-html";
import { getRawFileFromRepo } from "../../lib/github";
import {
  getCurrentTag,
  fetchDocsManifest,
  getPaths,
  findRouteByPath,
} from "../../lib/docs";
import { getSlug } from "../../lib/utils";
import React from "react";

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
  const tag = await getCurrentTag();
  const manifest = await fetchDocsManifest(tag);
  return { paths: getPaths(manifest.routes), fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // @ts-ignore
  const { tag, slug } = getSlug(params);
  const currentTag = await getCurrentTag(tag);
  const manifest = await fetchDocsManifest(currentTag).catch((error) => {
    // If a manifest wasn't found for a custom tag, show a 404 instead
    if (error.status === 404) return;
    throw error;
  });

  if (!manifest) {
    return { props: {} };
  }

  const route = findRouteByPath(slug, manifest.routes);

  if (!route) {
    return { props: {} };
  }

  const md = await getRawFileFromRepo(route.path, currentTag);
  const { content, data } = matter(md);
  const html = await markdownToHtml(route.path, tag, content);

  return { props: { routes: manifest.routes, data, route, html } };
};

export default class Doc extends React.Component<{
  html: string;
  data: any;
  route: any;
  query: any;
}> {
  render() {
    const title =
      this.props.route &&
      `${this.props.data.title || this.props.route.title} | Blink Shell`;
    // const { tag } = getSlug(this.props.query);
    return (
      <div>
        <Head>
          <title>{title}</title>
        </Head>
        <div dangerouslySetInnerHTML={{ __html: this.props.html }}></div>
      </div>
    );
  }
}
