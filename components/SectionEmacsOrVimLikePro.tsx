import React from 'react';
import {
  SIZE_MD,
  SIZE_LG,
} from './theme';

export default function SectionEmacsOrVimLikePro() {
  return (
    <div style={{overflowX: 'hidden'}} className="border-top">
      <div
        className="container grid-xl p-0 stripes"
        style={{position: 'relative', overflowX: 'visible'}}>
        <div className="kb2" />
        <div className="columns col-gapless">
          <div className="column col-12 p-0">
            <div className="p-inner">
              <h2 className="with-slash">Emacs or Vim like Pro</h2>
            </div>
            <div className="kb1">
              <div className="column col-6 col-lg-8 col-md-12 p-0">
                <p>
                  Blink embraces Bluetooth-coupled keyboards with gusto. Some
                  like Caps as Esc on Vim, others Cmd as Ctrl on Emacs.{' '}
                  <em>Blink champions them all</em>. During your always-on
                  sessions, you are in your zone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .kb1 {
          position: relative;
          margin-left: 80px;

          background: url(/full-kb@3x.png) 0 0/540px 240px no-repeat;

          padding-top: 280px;
          padding-bottom: 60px;
        }

        /*
        .line {
          position: absolute;
          width: 90px;
          height: 449px;
          border: 2px solid #0ae0f0;
          border-top: none;
          left: 73%;
          transform: skewX(-23deg);
        }

        .line2 {
          position: absolute;
          width: 8px;
          height: 20px;
          border: 2px solid #0ae0f0;
          left: 90%;
          transform: skewX(-23deg);
          filter: blur(3px);
        }
        */

        .kb2 {
          position: absolute;
          left: 60%;
          bottom: 8%;
          width: 100%;
          height: 374px;
          background: url(/full-kb@3x.png) top 0 left 0/825px 374px
            no-repeat;
        }

        @media screen and (max-width: ${SIZE_LG + 140}px) {
          .kb2 {
            left: 80%;
          }
        }

        @media screen and (max-width: ${SIZE_MD}px) {
          .kb1 {
            margin-left: 18px;
            padding-right: 18px;
          }

          .kb2 {
            display: none;
          }

          .line,
          line2 {
            display: none;
          }

          .center-md {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
