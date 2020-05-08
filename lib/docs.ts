import { getLatestTag, getRawFileFromRepo } from "./github";
import { removeFromLast } from "./utils";
import { TAG, FORCE_TAG } from "./config";

export type RouteType = {
  title: string;
  fallback: boolean;
  open?: boolean;
  path: string;
  routes?: Array<RouteType>;
};

export async function getCurrentTag(tag: string | void): Promise<string> {
  if (tag) {
    return tag;
  }
  if (FORCE_TAG) {
    return TAG;
  }
  return getLatestTag();
}

export async function fetchDocsManifest(
  tag: string | void
): Promise<{ routes: Array<RouteType> }> {
  const res = await getRawFileFromRepo("/docs/manifest.json", tag);
  return JSON.parse(res);
}

export function findRouteByPath(
  path: string,
  routes: Array<RouteType>
): RouteType | void {
  // eslint-disable-next-line
  for (const route of routes) {
    if (route.path && removeFromLast(route.path, ".") === path) {
      return route;
    }
    const childPath = route.routes && findRouteByPath(path, route.routes);
    if (childPath) {
      return childPath;
    }
  }
}

export function getPaths(nextRoutes: Array<RouteType>, carry: Array<any> = []) {
  nextRoutes.forEach(({ path, routes }) => {
    if (path) {
      carry.push(removeFromLast(path, "."));
    } else if (routes) {
      getPaths(routes, carry);
    }
  });

  return carry;
}
