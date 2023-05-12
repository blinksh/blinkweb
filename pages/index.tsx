import React from 'react';
import Hero from '../components/Hero';
import Head from 'next/head';
import SectionAirTerminals from '../components/SectionAirTerminals';
import SectionAlwaysOn from '../components/SectionAlwaysOn';
import SectionComeOnIn from '../components/SectionComeOnIn';
import SectionChooseYourToolbox from '../components/SectionChooseYourToolbox';
import SectionDesktopGrade from '../components/SectionDesktopGrade';
import SectionFeaturesSet from '../components/SectionFeaturesSet';
import SectionYourTerminal from '../components/SectionYourTerminal';
import SectionEmacsOrVimLikePro from '../components/SectionEmacsOrVimLikePro';
import Footer from '../components/Footer';

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>
          Blink Shell is a professional, desktop grade terminal for iOS. With
          Mosh {'&'} SSH clients for iOS, lightning fast and fully customizable.
          The best terminal for iOS and iPadOS.
        </title>
        <meta
          name="keywords"
          content="blink, shell, terminal, mosh, ios, ssh, emulator"
        />
      </Head>
      <Hero />
      <SectionChooseYourToolbox />
      <SectionFeaturesSet />
      <SectionAlwaysOn />
      <SectionDesktopGrade />
      <SectionEmacsOrVimLikePro />
      {/* <SectionInternalization /> */}
      <SectionYourTerminal />
      <SectionAirTerminals />
      <SectionComeOnIn />
      <Footer />
    </div>
  );
}
