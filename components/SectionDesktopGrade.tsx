import React from "react";
import Link from "next/link";
import { SIZE_MD, SIZE_LG } from "./theme";
let IPadWithShield = require("./ipad-with-shield.svg");

export default function SectionDesktopGrade() {
  return (
    <div>
      <div className="border-top">
        <div className="container grid-xl">
          <h2>
          BLINK CODE. YOUR NEW SUPERPOWER.
          </h2>
          <ul className="list-with-arrows">
            <li>A coding experience fitted to your device, that connects to Microsoft Visual Studio Code for web, GitHub Codespaces, GitPod or your own VS Code server.</li>
            <li>Work on local projects, or seamlessly on remote machines thanks to Blink Files. </li>
            <li>First class iOS experience, with software and hardware keyboard, and the full edge-to-edge experience.</li>
          </ul>
          <p><br/><br/>
          Blink Code is not affiliated with nor endorsed by Microsoft.
          <br/></p>
        </div>
      </div>
      <div className="border-top" style={{ background: "#1d1d1d" }}>
        <div className="container grid-xl">
          <div className="columns col-gapless">
            <div className="column col-12 p-0">
              <h2 className="with-slash" id="desktop-grade">
                DESKTOP GRADE
              </h2>
            </div>
            <div className="column col-5 col-md-12 p-0">
              <p>
                Blink was built as the tool we wanted to use all day. We were
                tired of User Interfaces being on our way, and of connections
                that couldn’t even last for 5 minutes.
              </p>
              <ul className="list-with-arrows">
                <li>
                  Blink puts you in a command line from the start, so you know
                  what to do.
                </li>
                <li>
                  Supports Ed25519, ECDSA and RSA keys. It is built on top of{" "}
                  <a target="about:blank" href="https://www.libssh.org">
                    libssh
                  </a>{" "}
                  and{" "}
                  <a target="about:blank" href="https://www.libssh2.org">
                    libssh2
                  </a>.
                </li>
                <li>
                  Including <em>tunnels</em> (-L), <em>proxycommand</em> and{" "}
                  <em>ssh-agent</em>.
                </li>
              </ul>
              <br />
              <br />
              <br />
              <br />
            </div>
            <div className="column col-7 col-lg-4 col-md-12 p-0 ">
              <div className="center-md">
                <IPadWithShield />
                <br />
                <br />
              </div>
            </div>
          </div>
          <h2
            className="with-slash"
            id="shell-and-tools"
            style={{ marginTop: "4rem" }}
          >
            ...with Unix base tools
          </h2>
          <div className="columns section">
            <div className="column col-5 col-md-12">
              {" "}
              <p>
                Go beyond just remote connections from your local device. Manage
                files from the command line, check on your network or download
                files.{" "}
                <em>We just make it better and better on each release.</em>
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
                    You can call commands individually. There is redirection
                    ("{'>'}", "{'<"'}, {'"&>"'} ...).
                  </li>
                </ul>
              </div>
            </div>
            <div className="column col-12">
              <br/>
              <Link href="https://docs.blink.sh/advanced/unix-roundup">
                <a className="arrow-link">Learn more about builtin commands</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
      <style jsx>{`
        .question {
          padding: 150px 0;
          font-size: 32px;
        }
        .cols {
          column-count: 2;
        }
        .stripes-wrapper {
          margin-top: 6rem;
        }

        .section {
          padding-bottom: 7rem;
        }

        @media screen and (max-width: ${SIZE_MD}px) {
          .cols {
            column-count: 1;
          }
          .stripes-wrapper {
            margin-top: 2rem;
          }
          .section {
            padding-bottom: 4rem;
          }
        }

        .center-md {
          text-align: center;
        }
      `}</style>
    </div>
  );
}
