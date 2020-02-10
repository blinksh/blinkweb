import React from 'react';
let AppStoreBadge = require('./app-store-badge.svg');

export default function AppStoreLink() {
  return (
    <a target="about:blank" href="http://itunes.apple.com/app/id1156707581">
      <AppStoreBadge className="app-store" />
      <style jsx>{`
        :global(.app-store) {
          border: 1px solid #a6a6a6;
          border-radius: 4px;
          margin-right: 28px;
        }
      `}</style>
    </a>
  );
}
