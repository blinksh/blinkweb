import React from 'react';
import {
  SIZE_MD,
  SIZE_LG,
  COLOR_BG_DARK,
  COLOR_BG_BRIGHT,
} from './theme';

import CodeLike from './CodeLike';

export default function SectionChooseYourToolbox() {
  return (
    <div style={{overflowX: 'hidden'}} className="border-top">
      <div className="dimmer grid-xl">
        <div className="columns col-gapless">
          <div className="col-12">
            <h2 className="space with-quotes">
              CHOOSE YOUR PACKAGE
            </h2>
          </div>
          <div className="column col-5 col-lg-12 col-md-12">
            <h3 className="list-spacer">BLINK+</h3>

            <ul className="list-with-arrows">
              <p>
                The Shell of choice for developers for more than 7 years:
              </p>
              <li><b>Lightining fast and Fully Customizable.</b>
                <br/>Keyboard Modifiers • Keyboard Shortcuts • Themes • Fonts
              </li>
              <li><b>Shell into remote machines using SSH and Mosh.</b>
                <br/>Use Secure Keys, Certificates & HW • Jump Hosts • Agent
              </li>
              <li><b>Code using the world's most popular editor.</b>
                <br/>Edit local files • Edit remote files • Interface adapted to your mobile device.
              </li>
            </ul>
          </div>
          <div className="column col-6 col-ml-auto col-lg-12 col-md-12">
            <h3 className="list-spacer">BLINK+BUILD</h3>
            <ul className="list-with-arrows">
              <p>
                The full toolbox for dev work on your device
              </p>
              <li><b>Includes everything on Blink+</b></li>
              <li><b>On-demand dev environments for any task</b>
                <br/>Run Python, Go, Rust, and others • Accessible from any of your devices • Customizable with a Personal Cloud Disk
              </li>
              <li><b>Private VMs</b>
                <br/>VMs allocated per user • 2 vCPU • 4GB RAM • Personal Cloud Disk
              </li>
            </ul>
            {/* <h4 className="list-spacer with-quotes">$9.99/month</h4> */}
          </div>
        </div>
        <div className="columns col-gapless">
          <div className="column col-5 col-lg-12 col-md-12">
            <h4 className="list-spacer with-quotes">$19.99/year</h4>
          </div>
          <div className="column col-6 col-ml-auto col-lg-12 col-md-12">
            <h4 className="list-spacer with-quotes">$9.99/month</h4>
          </div>

        </div>
        <br/>
        <br/>
      </div>
      <style jsx>{`
        .space {
          margin-top: 100px;
          text-align: center;
        }
        .list-spacer {
          text-align: center;
        }
        `}</style>
    </div>
  );
}
