import Link from "next/link";
import React from "react";

import {
  SIZE_MD,
  SIZE_LG,
  COLOR_BG,
  COLOR_PRIMARY,
} from "./theme";

import ThemeView from "./ThemeView";

export default function SectionYourTerminal() {
  return (
    <div className="container grid-xl stripes" style={{ overflowX: "hidden" }}>
      <h2 className="with-slash" id="your-terminal">
        Your Terminal, Your Way
      </h2>
      <div className="columns col-gapless">
        <div className="column col-5 col-lg-12 col-md-12">
          <p>
            We know how important it is for your long work sessions to have the
            color theme and font you feel comfortable looking at all day.{" "}
            You can rock your terminal and roll your own themes and fonts
            beyond our included ones.
            <em> And yes, we include Pragmata Pro by default!</em>
          </p>
          <p>
          <Link href="https://github.com/blinksh/themes">
          <a className="arrow-link">Themes Gallery</a>
          </Link>
          </p>
          <ThemeView theme="bright-lights" />
          <ThemeView theme="wwdc" />
          <ThemeView theme="flat" />
        </div>
        <div className="column col-6 col-ml-auto col-lg-12 col-md-12">
          <div className="spacer">
            <span className="dark-label">Pragmata Pro</span>
            <p className="font-demo">
              a b c d e f g h i j k l m n ñ o p q r s t u v w x y z
            </p>
          </div>
          <div className="fonts-spacer">
            <ul className="fonts">
              <li>DejaVu Sans Mono</li>
              <li>Fira Code</li>
              <li>Iosevka</li>
              <li>JetBrains Mono</li>
              <li className="selected">
                Pragmata Pro Mono
                <a
                  target="about:blank"
                  className="info-link"
                  href="https://www.fsd.it/shop/fonts/pragmatapro/"
                >
                  i
                </a>
              </li>
              <li>Roboto Mono</li>
              <li>Source Code Pro</li>
              <li><Link href="https://github.com/blinksh/fonts"><a className="arrow-link">Fonts Gallery</a></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        .font-demo {
          font-size: 58px;
        }

        .fonts-spacer {
          padding-left: 10%;
        }

        .info-link {
          display: inline-block;
          color: ${COLOR_BG};
          background: ${COLOR_PRIMARY};
          border-radius: 3px;
          width: 14px;
          height: 13px;
          margin-left: 0.5rem;
          border: 0;
          font-size: 9px;
          font-weight: bold;
          padding-left: 5px;
          padding-top: 1px;
          position: absolute;
          margin-top: 4px;
        }

        @media screen and (max-width: ${1300}px) {
          .spacer {
            padding-left: 23%;
          }
          .fonts-spacer {
            padding-left: 8.5%;
          }
        }
        @media screen and (max-width: ${SIZE_LG}px) {
          .spacer {
            padding-left: 0;
          }
        }

        @media screen and (max-width: ${SIZE_MD}px) {
          .fonts-spacer {
            padding-left: 0px;
          }
          .font-demo {
            font-size: 34px;
          }
        }
      `}</style>
    </div>
  );
}
