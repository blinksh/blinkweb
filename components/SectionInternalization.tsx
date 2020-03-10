import React from 'react';

import {COLOR_PRIMARY, SIZE_MD, SIZE_LG, SIZE_XL} from './theme';

export default function SectionInternalization() {
  var jp = (
    <div className="page">
      <p>
        Blink は、ブルートゥースで接続されたキーボードを歓迎しています。
        いくつかは、VimのEscとしての でのCtrlとしてのCmdなどです。
        彼らを全滅させるチャンピオン。
        いつものセッションの間、あなたはあなたのゾーンにいます
        は、ブルートゥースで接続されたキーボードを歓迎しています。
        いくつかは、VimのEscとしての でのCtrlとしてのCmdなどです。
        彼らを全滅させるチャンピオン。
        いつものセッションの間、あなたはあなたのゾーンにいます。は、ブルートゥースで接続されたキーボードを歓迎しています。
        いくつかは、VimのEscとしての でのCtrlとしてのCmdなどです。
        彼らを全滅させるチャンピオン。
        いつものセッションの間、あなたはあなたのゾーンにいます
      </p>
    </div>
  );

  var ch = (
    <div className="page">
      <p>
        Blink擁抱藍牙耦合鍵盤 有些人喜歡在Vim上使用作為，其他人在E上使用作為
        支持他們所有 在您的常駐會議期間，您將進入您的區域 擁抱藍牙耦合鍵盤
        有些人喜歡在Vim上使用作為，其他人在E上使用作為 支持他們所有
        在您的常駐會議期間，您將進入您的區域
      </p>
      <p>
        擁抱藍牙耦合鍵盤 有些人喜歡在Vim上使用作為，其他人在E上使用作為
        支持他們所有 在您的常駐會議期間，您將進入您的區域 擁抱藍牙耦合鍵盤
        有些人喜歡在Vim上使用作為，其他人在E上使用作為 支持他們所有
        在您的常駐會議期間，您將進入您的區域
      </p>
    </div>
  );
  return (
    <div className="wrapper">
      <div className="container grid-xl world-bg">
        <h2 className="with-slash" id="internalization">
          INTERNALIZATION
        </h2>
        <div className="columns hide-md">
          <div className="column col-6 col-md-12 narrow">{jp}</div>
          <div className="column col-6 col-md-12 narrow ">{ch}</div>
        </div>
        <div className="pager show-md">
          {jp}
          {ch}
        </div>
      </div>
      <style jsx>
        {`
          .narrow {
            padding: 5rem 7rem;
            padding-top: 1rem;
          }

          @media screen and (max-width: ${SIZE_XL}px) {
            .narrow {
              padding: 3rem 4rem;
            }
          }

          @media screen and (max-width: ${SIZE_LG}px) {
            .narrow {
              padding: 1rem 2rem;
            }
          }
          @media screen and (max-width: ${SIZE_MD}px) {
            .narrow {
              padding: 1rem 1rem;
            }
          }
          #internalization {
            font-size: 18px;
            color: ${COLOR_PRIMARY};
            padding-top: 80px;
            margin-top: 0;
          }
          .wrapper {
            background: #1d1d1d;
          }

          .world-bg {
            background: url(/world-bg@2x.png) 50% 50% no-repeat;
            background-size: contain;
          }
        `}
      </style>
    </div>
  );
}
