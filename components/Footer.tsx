import React from 'react';
import { SIZE_MD } from './theme';

import CodeLike from './CodeLike';

let DiscordIcon = require('./icons/discord.svg');
let GithubIcon = require('./icons/github.svg');
let TwitterIcon = require('./icons/twitter.svg');

export default function SectionInternalization() {
  return (
    <div className="alt-bg">
      <div className="vr">
        <div className="container grid-xl">
          <div className="columns col-gapless">
            <div className="column col-6 col-md-12">
              <CodeLike
                theme="light"
                lines={[
                  '/**',
                  <h3>Our community</h3>,
                  <span
                    style={{display: 'inline-block', paddingBottom: '15px'}}>
                    <a
                      target="about:blank"
                      href="https://discord.gg/ZTtMfvK"
                      className="btn btn-link btn-icon btn-dark">
                      <DiscordIcon className="icon-dark" /> {'<Discord>'}
                    </a>
                    <a
                      target="about:blank"
                      href="https://twitter.com/blinkshell"
                      className="btn btn-link btn-icon btn-dark">
                      <TwitterIcon className="icon-dark" /> {'<Twitter>'}
                    </a>
                    <a
                      target="about:blank"
                      href="https://github.com/blinksh/blink"
                      className="btn btn-link btn-icon btn-dark"
                      style={{marginBottom: '6px'}}>
                      <GithubIcon className="icon-dark" /> {'<GitHub>'}
                    </a>
                  </span>,
                  '',
                  '',
                  '',
                  '',
                  '',
                  '',
                  '',
                  '',
                  '',
                  '',
                  `© 2016-${new Date().getFullYear()} Blink Shell is developed by The Blink Shell Project.`,
                  <a target="about:blank" href="mailto:hello@blink.sh">
                    {'<hello@blink.sh>'}
                  </a>,
                  '',
                  '**/',
                ]}
              />
            </div>
            <div className="column col-6 col-md-12">
              <CodeLike
                theme="light"
                lines={[
                  '/**',
                  <h3>Mosh</h3>,
                  '',
                  <span>Mosh was written by Keith Winstein, along with Anders Kaseorg, Quentin Smith, Richard Tibbetts, Keegan McAllister, and John Hood. You can find more info on{" "}
                  <a target="about:blank" href="https://mosh.org">mosh.org</a></span>,
                  '',
                  <h3>libssh</h3>,
                  '',
                  <span>libssh is a multiplatform C library implementing the SSHv2 protocol on client and server side. More information on <a target="about:blank" href="https://libssh.org">libssh.org</a></span>,
                  '',
                  <h3>libssh2</h3>,
                  '',
                  <span>libssh2 is a client-side C library implementing the SSH2 protocol. See details on <a target="about:blank" href="https://libssh2.org">libssh2.org</a></span>,
                  '',
                  '**/',
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .vr {
          background: 50% 100% / 1px 100% no-repeat
            linear-gradient(#07a7b3, #07a7b3);
        }
        @media screen and (max-width: ${SIZE_MD}px) {
          .vr {
            background-image: none;
          }
        }
        .container {
          padding-top: 40px;
          padding-bottom: 40px;
        }
      `}</style>
    </div>
  );
}
