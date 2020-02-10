import React from 'react';
import {
  SIZE_MD,
  SIZE_LG,
  COLOR_BG_DARK,
  COLOR_BG_BRIGHT,
} from './theme';

import CodeLike from './CodeLike';

export default function SectionAlwaysOn() {
  return (
    <div className="dark">
      <div className="dots">
        <div className="container grid-xl p-0">
          <div className="columns col-gapless">
            <div className="column col-6 col-md-12">
              <div className="p-inner">
                <h2 className="with-slash" id="always-on">
                  ALWAYS ON
                </h2>
                <p className="narrow">
                  Mosh was built for constant mobile connectivity. You can
                  flawlessly jump from home, to the train, and then to the
                  office thanks to Mosh.{' '}
                  <em>Blink is rock-solid connected all the way.</em> And don't
                  be afraid to put your device to sleep, when you wake it up
                  later, your connections will be intact.
                  <br />
                  <br />Lag can make or break an experience. Mosh precludes network lag by performing intelligent local echo.{' '}
                  <em>You can type as if you were in your local machine</em>.
                  <br />
                  <br />It feels like magic.
                </p>
              </div>
            </div>
            <div className="column col-5 col-md-12 alt-bg">
              <CodeLike
                theme="light"
                lines={[
                  '/**',
                  '',
                  <h3><b>Press {"&"} Blogs</b></h3>,
                  '',
                  <h4>
                    <a
                      target="about:blank"
                      href="https://www.theverge.com/circuitbreaker/2018/3/27/17152482/ipad-pro-web-development-setup-how-to-terminal-apps">
                      <b>{'<TheVerge>'}</b>
                    </a>
                  </h4>,
                  <b>In some ways, I prefer my iPad / Blink / Digital Ocean setup to coding on my Mac.</b>,
                  '',
                  <h4>
                    <a
                      target="about:blank"
                      href="https://twit.tv/posts/picks/ios-pick-blink-shell">
                      <b>{'<Twit.tv>'}</b>
                    </a>
                  </h4>,
                  <b>I have tried a number of terminals on iOS and this is really The One.</b>,
                  '',
                  <h4>
                    <a
                      target="about:blank"
                      href="https://thesweetsetup.com/how-to-use-digital-ocean-for-web-development-on-an-ipad/">
                      <b>{'<The Sweet Setup>'}</b>
                    </a>
                  </h4>,
                  <b>Connections still come up when I get back to a client project after a weekend off.</b>,
                  '',
                  <h4>
                    <a
                      target="about:blank"
                      href="https://arslan.io/2019/01/07/using-the-ipad-pro-as-my-development-machine/">
                      <b>{'<Fatih Arslan>'}</b>
                    </a>
                  </h4>,
                  <b>Is this magic? I don’t know but it really feels like magic.</b>,
                  '',
                  '',
                  '',
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .narrow {
          line-height: 2;
          padding-bottom: 4rem;
        }

        h4 a {
          color: white;
        }
        .dark {
          background: linear-gradient(
            to right,
            ${COLOR_BG_DARK},
            ${COLOR_BG_DARK} 50%,
            ${COLOR_BG_BRIGHT} 50%,
            ${COLOR_BG_BRIGHT} 50%,
            ${COLOR_BG_BRIGHT} 100%
          );
        }
        .dots {
          background: 15% -50% / 490px 342px no-repeat url('/static/dots1@2x.png'),
            46% 150% / 490px 342px no-repeat url('/static/dots1@2x.png');
        }

        @media screen and (max-width: ${SIZE_LG + 100}px) {
          .dots {
            background: -30% -30% / 490px 342px no-repeat url('/static/dots1@2x.png'),
              46% 150% / 490px 342px no-repeat url('/static/dots1@2x.png');
          }
        }

        @media screen and (max-width: ${SIZE_MD}px) {
          .narrow {
            padding: inherited;
            padding-bottom: 2rem;
          }

          .dark {
            background: ${COLOR_BG_DARK};
          }
          .dots {
            background: none;
          }
        }
      `}</style>
    </div>
  );
}
