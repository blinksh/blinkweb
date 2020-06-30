import path from 'path';
import fetch from './fetch';
import { promises as fsPromises } from 'fs';
// import { GITHUB_API_URL, REPO_NAME } from './constants';

export const GITHUB_URL = 'https://github.com';
export const GITHUB_API_URL = 'https://api.github.com';
export const RAW_GITHUB_URL = 'https://raw.githubusercontent.com';
export const REPO_NAME = 'blinksh/blink';

// https://github.com/blinksh/blink/raw/docs/docs/images/command-blink-image4.jpg

const { readFile, writeFile } = fsPromises;

const USE_CACHE = process.env.USE_CACHE === 'true';
const TAG_CACHE_PATH = path.resolve('.github-latest-tag');

export async function getLatestTag() {
  // return "docs/";

  let cachedTag;
  if (USE_CACHE) {
    try {
      cachedTag = await readFile(TAG_CACHE_PATH, 'utf8');
    } catch (error) {
      // A cached file is not required
    }
  }

  if (!cachedTag) {
    const res = await fetch(
      `${GITHUB_API_URL}/repos/${REPO_NAME}/releases/latest`
    );

    if (res.ok) {
      const data = await res.json();
      const tag = data.tag_name;

      if (USE_CACHE) {
        try {
          await writeFile(TAG_CACHE_PATH, tag, 'utf8');
        } catch (error) {
          // A cached file is not required
        }
      }

      cachedTag = tag;
    }
  }

  return cachedTag;
}

function getErrorText(res: any) {
  try {
    return res.text();
  } catch (err) {
    return res.statusText;
  }
}

async function getError(res: any) {
  const errorText = await getErrorText(res);
  const error: any = new Error(
    `GitHub raw download error (${res.status}): ${errorText}`
  );

  error.status = res.status;
  error.headers = res.headers.raw();

  return error;
}

export async function getRawFileFromGitHub(path: string) {
  let url = RAW_GITHUB_URL + path;

  const res = await fetch(url);

  if (res.ok) {
    return res.text();
  }
  throw await getError(res);
}

export function getRawFileUrl(path: string, tag: string | void) {
  let url = RAW_GITHUB_URL + `/${REPO_NAME}/${tag}${path}`;
  return url;
}

export function getRawFileFromRepo(path: string, tag: string | void) {
  return getRawFileFromGitHub(`/${REPO_NAME}/${tag}${path}`);
}
