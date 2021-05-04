import React from 'react';

let TwitterIcon = require('./icons/twitter.svg');
let GithubIcon = require('./icons/github.svg');
let DiscordIcon = require('./icons/discord.svg');

import {SIZE_MD} from './theme';

export default function SectionComeOnIn() {
  return (
    <div>
      <div className="dark">
        <div className="dark2 container grid-xl">
          <div className="dimmer grid-xl">
            <div className="columns">
              <div className="col-12">
                <h2 className="space with-quotes" id="come-on-in">
                  COME ON IN, WE ARE OPEN
                </h2>
                <div style={{maxWidth: 580, marginLeft: 'auto', marginRight: 'auto'}}>
                <p>
                  Collaborate in Blink’s development.
                  Reach out to us and get our free Community version.
                  Or if you are a student or participant in any other open source project, tweet us and get a free license.
                </p>
                <div className="center">
                  <a
                    target="about:blank"
                    href="https://community.blink.sh"
                    className="btn btn-primary btn-lg">
                    Sign Up for Community Edition
                  </a>
                </div>
                </div>
              </div>
              <div className="col-12">
                <div className="follow">
                  <br/>
                  FOLLOW US ON{' '}
                  <a
                    target="about:blank"
                    href="https://github.com/blinksh/blink"
                    className="btn btn-link btn-icon">
                    <GithubIcon className="icon-blue" />
                  </a>
                  <a
                    target="about:blank"
                    href="https://twitter.com/blinkshell"
                    className="btn btn-link btn-icon">
                    <TwitterIcon className="icon-blue" />{' '}
                  </a>
                  <a
                    target="about:blank"
                    href="https://discord.gg/ZTtMfvK"
                    className="btn btn-link btn-icon">
                    <DiscordIcon className="icon-blue" />{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container grid-xl">
        <div className="columns col-oneline f-centered">
          <div className="questions">
            <em>…/</em>HAVE&nbsp;QUESTIONS<em>?</em>
          </div>
          <div className="line" />
          <div className="arrow hide-md" />
          <a
            target="about:blank"
            href="https://twitter.com/blinkshell"
            className="btn btn-sm btn-primary btn-icon">
            <i className="i">
              <TwitterIcon className="icon-dark" />
            </i>
            @blinkshell
          </a>
        </div>
      </div>
      <style jsx>{`
        .f-centered {
          align-items: center;
          padding: 54px;
        }
        .i {
          display: inline-block;
          margin-top: 6px;
          vertical-align: middle;
          margin-right: 10px;
        }
        .dark {
          background: #000;
        }
        .dark2 {
          background: #000;
          background-image: url(/bg2.jpg);
          background-posion: 50% 50%;
          background-size: cover;
          background-repeat: no-repeat;
          padding: 0 !important;
        }
        .space {
          margin-top: 200px;
          text-align: center;
        }
        .follow {
          margin-bottom: 200px;
          text-align: center;
        }
        .line {
          background: white;
          margin-left: 35px;
          height: 2px;
          border-radius: 2px;
          flex: 1;
        }
        .arrow:after {
          content: '';
          border: solid white;
          border-width: 0 2px 2px 0;
          display: inline-block;
          padding: 4px;
          transform: rotate(-45deg);
          margin-left: -10px;
          margin-right: 35px;
        }

        .questions {
          font-size: 18px;
        }

        @media screen and (max-width: ${SIZE_MD}px) {
          .space {
            margin-top: 120px;
          }
          .follow {
            margin-bottom: 120px;
          }

          .line {
            background: none;
          }

          .f-centered {
            padding: 40px 10px;
          }
        }
      `}</style>
    </div>
  );
}
