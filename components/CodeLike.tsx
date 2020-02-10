import React from 'react';

import {
  SIZE_MD,
  COLOR_TEXT_CODE,
  COLOR_BG_CODE_DARK,
} from './theme.js';

function _renderLine(line: string, i: number) {
  return <div key={i}>{line || ' '}</div>;
}

function _renderGutter(linesCount: number) {
  var lines = Array.from(Array(linesCount * 4));
  return (
    <div className="gutter">
      {lines.map((_, i) => <div key={i}>{i + 1}</div>)}
      <style jsx>{`
        .gutter {
          user-select: none;
          -moz-user-select: none;
          -webkit-user-select: none;

          max-height: 100%;
          overflow-y: hidden;
          text-align: right;
          width: 2.5rem;
          opacity: 0.4;

          position: absolute;
          left: 0;
          top: 0;
        }

        @media screen and (max-width: ${SIZE_MD}px) {
          .gutter {
            width: 2rem;
          }
        }
      `}</style>
    </div>
  );
}

type PropsType = {
  lines: Array<any>;
  theme: 'dark' | 'light';
};

export default function CodeLike({lines, theme}: PropsType) {
  return (
    <pre className={theme}>
      {_renderGutter(lines.length)}
      {lines.map(_renderLine)}
      <style global jsx>{`
        pre {
          white-space: pre-wrap;
          font-family: PragmataPro;
          line-height: 2;
          padding: 0;
          padding-left: 4rem;
          position: relative;
        }

        pre h3,
        pre h4,
        pre h5 {
          font-size: 14px;
          line-height: 2;
          margin: 0;
          padding: 0;
          color: #fff;
        }

        /* dark theme */
        pre.dark {
          background: ${COLOR_BG_CODE_DARK};
          color: ${COLOR_TEXT_CODE};
        }

        /* light theme */
        pre.light {
          background: none;
          color: ${COLOR_TEXT_CODE};
        }

        pre a {
          color: ${COLOR_TEXT_CODE};
          text-decoration: underline;
        }
        pre a:visited {
          color: ${COLOR_TEXT_CODE};
          text-decoration: underline;
        }

        @media screen and (max-width: ${SIZE_MD}px) {
          pre {
            padding-left: 3.5rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </pre>
  );
}
