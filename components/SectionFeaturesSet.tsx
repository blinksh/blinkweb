import React from 'react';
import {SIZE_MD} from './theme';

let IconSSH = require('./icons/ssh.svg');
let IconPKI = require('./icons/pki.svg');
let IconKB = require('./icons/keyboard.svg');
let IconLighting = require('./icons/lighting.svg');
let IconCustomize = require('./icons/customize.svg');
let IconOSS = require('./icons/opensource.svg');
let IconSFTP = require('./icons/sftp.svg');
let IconCloud = require('./icons/icloud.svg');
let IPadOS = require('./icons/ipados.svg');

export default function SectionFeaturesSet() {
  const features = [
    {
      name: 'Mosh, SSH and CLI tools',
      icon: IconSSH,
    },
    {
      name: 'PKI and Agent',
      icon: IconPKI,
    },
    {
      name: 'SFTP & Files.app',
      icon: IconSFTP,
    },
    {
      name: 'Sync your devices',
      icon: IconCloud,
    },
    {
      name: 'Lightning fast',
      icon: IconLighting,
    },
    {
      name: 'Customize all things',
      icon: IconCustomize,
    },
    {
      name: 'External keyboard',
      icon: IconKB,
    },
    {
      name: 'Open Source',
      icon: IconOSS,
    },
  ];
  return (
    <div className="border-top container grid-xl section">
      <h2 className="with-slash" id="features">
        FEATURES
      </h2>
      <div className="columns col-gapless">
        {features.map((f, i) => (
          <div key={i} className="feature column col-3 col-md-6">
            <div />
            <f.icon />
            <div className="feature-name">{f.name}</div>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .feature {
            margin-bottom: 60px;
            height: 150px;
            align-items: center;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
          }

          .feature-name {
            text-align: center;
          }

          .section {
            padding-bottom: 7rem;
          }

          @media screen and (max-width: ${SIZE_MD}px) {
            .feature {
              margin-bottom: 30px;
              height: 130px;
            }
            .section {
              padding-bottom: 3rem;
            }
          }
        `}
      </style>
    </div>
  );
}
