import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import PrevNext from '../../components/PrevNext';
import matter from 'gray-matter';
import markdownToHtml from '../../lib/markdown-to-html';
import { getRawFileFromRepo } from '../../lib/github';
let DiscordIcon = require('../../components/icons/discord.svg');
let GithubIcon = require('../../components/icons/github.svg');
let TwitterIcon = require('../../components/icons/twitter.svg');
import Router from 'next/router';
import {
  getCurrentTag,
  fetchDocsManifest,
  getPaths,
  findRouteByPath,
  RouteType,
} from '../../lib/docs';
import { getSlug } from '../../lib/utils';
import React from 'react';
import SideBarLayout from '../../components/SideBarLayout';

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
  routes: Array<RouteType>;
  query: any;
}> {
  componentDidMount() {
    const { pathname } = Router;
    if (pathname == '/') {
      Router.push(this.props.routes[0].path);
    }
  }

  render() {
    const title =
      this.props.route &&
      `${this.props.data.title || this.props.route.title} | Blink Shell`;
    return (
      <SideBarLayout routes={this.props.routes}>
        <div>
          <Head>
            <title>{title}</title>
          </Head>
          <div
            style={{ maxWidth: 860 }}
            dangerouslySetInnerHTML={{ __html: this.props.html }}
          ></div>
          <div style={{ maxWidth: 860 }}>
            <PrevNext routes={this.props.routes || []} />
            <div className="text-center m-4">
              <a
                target="about:blank"
                href="https://github.com/blinksh/blink"
                className="btn btn-link btn-white"
              >
                <GithubIcon className="icon-white" /> {'<Github>'}
              </a>
              <a
                target="about:blank"
                href="https://twitter.com/blinkshell"
                className="btn btn-link btn-white"
              >
                <TwitterIcon className="icon-white" /> {'<Twitter>'}
              </a>
              <a
                target="about:blank"
                href="https://discord.gg/ZTtMfvK"
                className="btn btn-link btn-white"
              >
                <DiscordIcon className="icon-white" /> {'<Discord>'}
              </a>
            </div>
            <br />
            <br />
          </div>
        </div>
      </SideBarLayout>
    );
  }
}
