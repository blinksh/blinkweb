/* Code
 *
 * This component will render lines with correct line numbers with line wraps
 * If you want responsive variant, please use CodeLike component.
 */

import React from 'react';

import {COLOR_TEXT_CODE, COLOR_PRIMARY, COLOR_BG_CODE_DARK} from './theme';

function _renderLine(line: string, i: number) {
  return (
    <span key={i} className="tr">
      <span className="th" />
      <span className="row">{line}</span>
    </span>
  );
}

type PropsType = {
  lines: Array<any>;
  theme: 'dark' | 'light';
};

export default function CodeLike(props: PropsType) {
  return (
    <pre className={props.theme}>
      {props.lines.map(_renderLine)}
      <style global jsx>{`
        pre {
          display: table;
          table-layout: fixed;
          width: 100%; /* anything but auto, otherwise fixed layout not guaranteed */
          white-space: pre-wrap;
          font-family: PragmataPro;
          line-height: 2;
          padding: 1.8rem 0;
        }
        pre::before {
          counter-reset: linenum;
        }
        pre span.tr {
          display: table-row;
          counter-increment: linenum;
        }
        pre span.th {
          /* used for line numbers */
          display: table-cell;
          user-select: none;
          -moz-user-select: none;
          -webkit-user-select: none;
        }
        pre span.th::before {
          content: counter(linenum);
          text-align: right;
          display: block;
        }
        pre span.th {
          width: 2.5rem; /* or whatever the desired width of the numbers column is */
        }
        pre span.row {
          display: table-cell;
          padding-left: 2rem;
        }

        pre h3,
        pre h4,
        pre h5 {
          font-size: 14px;
          line-height: 2;
          margin: 0;
          padding: 0;
        }

        pre h3,
        pre h4,
        pre h5 {
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

        pre.light span.th {
          opacity: 0.4;
        }
      `}</style>
    </pre>
  );
}
