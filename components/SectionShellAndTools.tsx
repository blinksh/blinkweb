import React from 'react';

import {SIZE_MD} from './theme';

export default function SectionShellAndTools() {
  return (
    <div className="border-top">
      <div className="container grid-xl">
        <h2 className="with-slash" id="shell-and-tools">
          ...with Unix base tools
        </h2>
        <div className="columns">
          <div className="column col-6 col-md-12">
            {' '}
            <p>
              Go beyond just remote connections from your local device. Manage
              files from the command line, check on your network or download
              files. <em>We just make it better and better on each release.</em>
            </p>
          </div>
          <div className="column col-6 hidden-md" />
          <div className="column col-12">
            <div className="cols">
              <ul className="list-with-arrows">
                <li>
                  cd, setenv, ls, touch, cp, rm, ln, mv, mkdir, rmdir, df, du,
                  chksum, chflags, chgrp, stat, readlink, compress,
                  uncompress, gzip, gunzip,
                </li>
                <li>
                  pwd, env, printenv, date, uname, id, groups, whoami, uptime
                </li>
                <li>cat, grep, wc</li>
                <li>curl (includes http, https, scp, sftp...), scp, sftp</li>
                <li>tar</li>
                <li>
                  You can call commands individually. There is redirection (">",
                  "{'<"'}, {'"&>"'} ...).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .cols {
          column-count: 2;
        }
        .stripes-wrapper {
          margin-top: 6rem;
        }

        @media screen and (max-width: ${SIZE_MD}px) {
          .cols {
            column-count: 1;
          }
          .stripes-wrapper {
            margin-top: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
