import React from 'react';
import {SIZE_MD} from './theme';

export default function SectionAirTerminals() {
  return (
    <div className="border-top">
      <div className="container grid-xl">
        <div className="columns">
          <div className="column col-5 col-md-12">
            <h2 id="air-terminals" className="with-slash">
              AIR TERMINALS
            </h2>
            <p>
              We promise, you will end up liking the simplicity of Blink + iOS
              so much that you will want to take it to the Big Screen.
            </p>
            <p>
              <em>Create a distractions-free workstation</em>. Connect your iPad
              Pro to a 4K display and get a full resolution, crystal clear
              terminal.
            </p>
            <p>
              Giving a demo on your next presentation? Blink can be displayed on
              a <em>remote Apple TV</em> too!
            </p>
          </div>
          <div className="column col-1 col-md-12">
            <br />
            <br />
          </div>
          <div className="column col-6 col-md-12">
            <div className="terminals" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .terminals {
          margin-top: 8rem;
          width: 100%;
          height: 320px;
          background: url('/airplay@2x.png') no-repeat;
          background-size: contain;
          margin-bottom: 8rem;
        }

        @media screen and (max-width: ${SIZE_MD}px) {
          .terminals {
            margin-top: 0rem;
            margin-bottom: 0rem;
          }
        }
      `}</style>
    </div>
  );
}
