import React, { useEffect } from 'react';
import Router from 'next/router';

export default function Redirect() {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == '/docs') {
      Router.push('/docs/basics/navigation');
    }
  }, []);
  return null;
}
