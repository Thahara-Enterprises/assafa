import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Head from 'next/head';
import Halwa from '../components/halwa';
import HalwaHero from '../components/halwa_hero';
import SectionTitle from '../components/sectionTitle';
import Cta from '../components/cta';

export default function HalwaCorner() {
  return (
    <div>
      <Head>
        <title>
          Assafa Delicacy - Homemade Food Subscription | Get 20% Offer on
          Monthly Plan Subscription
        </title>
        <meta
          name="description"
          content="Online Cloud kitchen for Working couples, Senior citizens, Bachelors and for Chennai foodie"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HalwaHero />
      <SectionTitle
        pretitle="Halwa Hunt"
        title="A bite of halwa is a taste of comfort and tradition."
      >
        Dear Halwa lovers, we make fresh homemade halwa customizable to your
        preferences - Beetroot, Bread, carrot, pumpkin and we also cater for
        bulk order.
      </SectionTitle>

      <Halwa />
      <Cta />

      <Footer />
    </div>
  );
}
