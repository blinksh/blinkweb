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
    <div id="choose-package" style={{overflowX: 'hidden'}} className="border-top">
      <div className="dimmer grid-xl">
        <div className="columns col-gapless">
          <div className="col-12">
            <h2 className="space with-slash">
              CHOOSE YOUR PACKAGE
            </h2>
          </div>
          <div className="column col-5 col-lg-12 col-md-12">
            <h3 className="list-spacer">BLINK+</h3>
            <h4 className="list-spacer with-quotes">$19.99/year</h4>
            <ul className="list-with-arrows">
              <p>
                The Shell of choice for developers for more than 7 years:
              </p>
              <li><b>Lightining fast and Fully Customizable terminal:</b>
                <br/>Keyboard Modifiers • Keyboard Shortcuts • Themes • Fonts
              </li>
              <li><b>Shell into remote machines using SSH and Mosh:</b>
                <br/>Use Secure Keys, Certificates & HW • Jump Hosts • Tunnels • Agent
              </li>
              <li><b>Code using the world's most popular editor:</b>
                <br/>Edit local files • Edit remote files • Interface adapted to your mobile device.
              </li>
            </ul>
            <br/>
          </div>
          <div className="column col-6 col-ml-auto col-lg-12 col-md-12">
            <h3 className="list-spacer">BLINK+BUILD</h3>
            <h4 className="list-spacer with-quotes">$9.99/month</h4>
            <ul className="list-with-arrows">
              <p>
                The full toolbox for dev work on your device. In Beta:
              </p>
              <li><b>Includes everything on Blink+</b></li>
              <li><b>On-demand dev environments, powered by containers</b>
                <br/>Code, Compile and Deploy • Run JS, Python, Rust, etc. • Run your containers
              </li>
              <li><b>Focus on work, not on managing a remote VM</b>
                <br/>Access from any of your devices • Control from the CLI • Auto-shutdown
              </li>
              <li><b>Powerful, private and secure</b>
                <br/>Separate VMs allocated per user • 2 vCPU • 4GB RAM • Powered by Digital Ocean
              </li>
            </ul>
            <br/>
          </div>
        </div>
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
