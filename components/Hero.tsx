import React from 'react';
import AppStoreLink from './AppStoreLink';
import {COLOR_BG_DARK, COLOR_PRIMARY, SIZE_MD} from './theme';
let Logo = require('./logo.svg');
let DiscordIcon = require('./icons/discord.svg');
let GithubIcon = require('./icons/github.svg');
let TwitterIcon = require('./icons/twitter.svg');
let RedditIcon = require('./icons/reddit.svg');

export default function Hero() {
  return (
    <div style={{overflowX: 'hidden',  position: 'relative' /* backgroundColor: '#1d1d1d'*/}}>
      <div className="wrapper">
        <div className="inner dimmer">
          {/*<div className="big-line" />*/}
        </div>
        {/*<div className="line" /> */ }
        {/*<div className="line2" /> */ }
      </div>
      <div className="container grid-xl header">
        <div className="columns">
          <div className="column col-12">
            <Logo />
            <h1>CODING FROM iOS<br/>WILL NEVER FEEL THE SAME</h1>
            <br/>
            <p>
              Blink is designed to keep up with you. Always on, blazing fast and fitted specifically to your devices.
              <br/>
              Blink gives you the freedom to develop your own way. Anywhere.
              <br/>
            </p>
            <div>
              <br /> 
              <a
                target="about:blank" href="http://itunes.apple.com/app/id1594898306"
                className="btn btn-primary btn-lg">
                Download now for free
              </a>
            </div>
            <p>
              <br />
              <br/>
              <a className="whats-new"
                target="about:blank"
                href="https://github.com/blinksh/blink/blob/raw/CHANGELOG.md">
                See What’s New on v15.0.9
              </a>
              <br />
              <a className="whats-new"
                href="/docs">
                Learn the basics
            </a>
              <br/><a className="whats-new"
              href="/docs/basics/tips-and-tricks">
              Tips & Tricks
            </a>
            </p>
            <br/>
          </div>
          <div className="column col-12 ">
            <br/>
            <div className="social">
              <div>/**</div>
              <div>Join our movement</div>
              <a target="about:blank" href="https://github.com/blinksh/blink" className="btn btn-link btn-white">
                <GithubIcon className="icon-white" /> {'<Github>'}
              </a>
              <a target="about:blank" href="https://twitter.com/blinkshell" className="btn btn-link btn-white">
                <TwitterIcon className="icon-white" /> {'<Twitter>'}
              </a>
              <a target="about:blank" href="https://discord.gg/ZTtMfvK" className="btn btn-link btn-white">
                <DiscordIcon className="icon-white" /> {'<Discord>'}
              </a>
              <a target="about:blank" href="https://reddit.com/r/BlinkShell" className="btn btn-link btn-white">
                <RedditIcon className="icon-white" /> {'<Reddit>'}
              </a>
              <div>**/</div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .header {
          padding-top: 75px;
          padding-bottom: 75px;
        }
        .wrapper {
          background: url(/bg.jpg);
          background-position: 50% 0;
          background-repeat: no-repeat;
          background-size: cover;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }

        .line {
          position: absolute;
          width: 5px;
          height: 28px;
          border: 1px solid #0ae0f0;
          left: 50%;
          transform: skewX(-23deg) translateX(-540px);
          top: 544px;
        }
        .line2 {
          position: absolute;
          width: 28px;
          height: 156px;
          border: 4px solid #0ae0f0;
          left: 50%;
          transform: skewX(-23deg) translateX(-640px);
          top: 600px;
          opacity: 0.5;
          filter: blur(2px);
        }

        .big-line {
          width: 100%;
          height: 100%;
          background: linear-gradient(
              -67.5deg,
              transparent 80px,
              #0ae0f0 81px,
              #0ae0f0 82px,
              transparent 83px
            ),
            linear-gradient(
              -67.5deg,
              transparent 190px,
              #0ae0f0 191px,
              #0ae0f0 192px,
              transparent 193px
            );
        }
        /*.inner {
          height: 559px;
        }*/
        .inner {
          height: 100%;
        }
        .flex-col {
          display: flex;
          flex-direction: column;
        }
        .social {
          margin-top: auto;
          line-height: 1.9;
        }
        h1 {
          margin-top: 32px;
          margin-bottom: 15px;
        }
        .video {
          background: ${COLOR_BG_DARK};
        }

        .whats-new {
          padding-top: 6px;
          display: inline-block;
          border-bottom: 1px solid ${COLOR_PRIMARY};
          color: white;
        }
        .whats-new:hover {
          text-decoration: none;
          color: ${COLOR_PRIMARY};
        }

        .whats-new::after {
          content: '――――‣';
          position: absolute;
          padding-left: 8px;
          padding-top: 4px;
          font-size: 10px;
          color: ${COLOR_PRIMARY};
        }
        .whats-new:hover::after {
          padding-left: 12px;
        }

        @media screen and (max-width: ${SIZE_MD}px) {
          .header {
            padding-top: 63px;
          }
          .inner {
         /*   height: 733px;*/
          }

          .social {
            margin-top: 0;
            padding: 1.5rem 0;
          }
          .whats-new {
            padding-top: 1.5rem;
          }
        }
      `}</style>
      <style global jsx>
        {`
          @supports (padding: max(0px)) {
            .container {
              /*padding-left: max(0.4rem, env(safe-area-inset-left));
              padding-right: max(0.4rem, env(safe-area-inset-right));
              */
            }
          }
        `}
      </style>
    </div>
  );
}
