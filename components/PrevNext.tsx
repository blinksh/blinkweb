import React from 'react';
import { NextRouter, Router } from 'next/router';
import { RouteType } from '../lib/docs';
import { useRouter } from 'next/router';
import { removeFromLast } from '../lib/utils';
import Link from 'next/link';

type PropsType = {
  routes: Array<RouteType>;
};

function _flatRoutes(routes: Array<RouteType>): Array<RouteType> {
  var result: Array<RouteType> = [];
  for (let route of routes) {
    let subRoutes = route.routes;
    if (subRoutes != null) {
      result = result.concat(_flatRoutes(subRoutes));
      continue;
    }
    result.push(route);
  }

  return result;
}

type IndexType = { next: RouteType | null; prev: RouteType | null };

function _nextPrevRoute(path: string, flatRoutes: Array<RouteType>): IndexType {
  var result: IndexType = { next: null, prev: null };

  let len = flatRoutes.length;

  for (var i = 0; i < len; i++) {
    if (path.indexOf(removeFromLast(flatRoutes[i].path, '.')) !== 0) {
      continue;
    }

    if (i == 0) {
      if (len > 1) {
        result.next = flatRoutes[i + 1];
      }
      return result;
    }

    if (i == len - 1) {
      if (len > 1) {
        result.prev = flatRoutes[i - 1];
      }

      return result;
    }

    result.next = flatRoutes[i + 1];
    result.prev = flatRoutes[i - 1];
    return result;
  }
  return result;
}

const PrevNext = (props: PropsType) => {
  let router = useRouter();

  let flatRoutes = _flatRoutes(props.routes);
  let prevNext = _nextPrevRoute(router.asPath, flatRoutes);
  let prev = null;
  if (prevNext.prev != null) {
    prev = (
      <Link
        as={removeFromLast(prevNext.prev.path, '.')}
        href={'/docs/[...slug]'}
      >
        <a className="prev-link">{prevNext.prev.title}</a>
      </Link>
    );
  }
  let next = null;
  if (prevNext.next != null) {
    next = (
      <Link
        as={removeFromLast(prevNext.next.path, '.')}
        href={'/docs/[...slug]'}
      >
        <a className="next-link">{prevNext.next.title}</a>
      </Link>
    );
  }
  return (
    <div className="container next-prev-links">
      <div className="columns">
        <div className="column col-6 col-sm-12">{prev}</div>
        <div className="column col-6 col-sm-12 text-right">{next}</div>
      </div>
      <style jsx global>
        {`
          .next-prev-links {
            padding-top: 12px;
            padding-bottom: 24px;
          }
          .next-link,
          .prev-link {
            padding-top: 12px;
          }

          .next-link::after {
            content: '→';
            padding-left: 6px;
            display: inline-block;
          }
          .prev-link::before {
            content: '←';
            padding-right: 6px;
            display: inline-block;
          }
        `}
      </style>
    </div>
  );

  // <div>{JSON.stringify(prevNext)}</div>;
};

export default PrevNext;
