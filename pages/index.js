'use client';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import SectionTitle from '../components/sectionTitle';
import Form from '../components/form';

import Footer from '../components/footer';
import Testimonials from '../components/testimonials';
import Cta from '../components/cta';
import Faq from '../components/faq';
import Countup from '../components/pluscount';
import Pricing from '../components/pricing';
import Container from '../components/container';
import { google } from 'googleapis';
import Link from 'next/link';
import Bene from '../components/Bene';
import SignatureDish from '../components/signaturedish';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
library.add(faHandshake);
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const sheets = google.sheets('v4');

const Home = ({
  date,
  lunch,
  lunchPrice,
  dinner,
  dinnerPrice,
  total,
  lunchStatus,
  dinnerStatus,
}) => {
  return (
    <div className="mx-5">
      <Head>
        <title>Assafa Delicacy - Delicious and Tasty Home made food</title>
        <meta
          name="description"
          content="Online Cloud kitchen for Working couples, Senior citizens, Bachelors and also or foodie"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Our Signature Dish"
        title="Assafa Delicacy's Top Reviewed dishes."
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <SignatureDish />

      <SectionTitle
        pretitle="Company LLC Benefits"
        title="What make Assafa Delicacy to stand out in Market?"
      >
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle>
      <Bene />

      <SectionTitle
        pretitle="Today's Menu"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Container>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 place-items-center items-center gap-2">
          <div className=" bg-secondary rounded-lg shadow-md p-6 w-auto">
            <div className="mb-4">
              <p className="text-gray-400 text-base float-right">
                Date: {date}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-2xl sm:text-lg xs:text-lg font-bold text-primary tracking-wider mb-2 uppercase">
                Today&apos;s Lunch Menu
              </p>
              <div className="text-green-600 text-sm">
                {lunchStatus === `Order Undertaken` ? (
                  <span className="text-green-500">
                    Current Status: Order Undertaken
                  </span>
                ) : (
                  <span className="text-red-500">
                    Current Status: Order not Undertaken
                  </span>
                )}
              </div>
              <p className="text-lg sm:text-base font-bold tracking-wider text-white uppercase">
                {lunch}
              </p>
            </div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-accent font-extrabold text-3xl">
                ₹ {lunchPrice} /-
              </span>
              <span className="text-accent font-bold text-lg">/ per BOX</span>
            </div>
            <Link href="/daily-menu-order">
              <button className="bg-complementary text-white font-semibold py-2 px-4 rounded-full mt-6">
                Order Now
              </button>
            </Link>
          </div>
          <div className=" bg-secondary rounded-lg shadow-md p-6 w-auto">
            <div className="mb-4">
              <p className="text-gray-400 text-base float-right">
                Date: {date}
              </p>
            </div>

            <div className="mb-4">
              <p className="text-2xl sm:text-lg xs:text-lg font-bold text-primary tracking-wider mb-2 uppercase">
                Today&apos;s Dinner Menu
              </p>
              <div className="text-sm">
                {dinnerStatus === `Order Undertaken` ? (
                  <span className="text-green-500">
                    Current Status: Order Undertaken
                  </span>
                ) : (
                  <span className="text-red-500">
                    Current Status: Order not Undertaken
                  </span>
                )}
              </div>
              <p className="text-lg sm:text-base font-bold tracking-wider text-white uppercase">
                {dinner}
              </p>
            </div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-accent font-extrabold text-3xl">
                ₹ {dinnerPrice} /-
              </span>
              <span className="text-accent font-bold text-lg">/ per BOX</span>
            </div>
            <Link href="/daily-menu-order">
              <button className="bg-complementary text-white font-semibold py-2 px-4 rounded-full mt-6">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </Container>
      <FontAwesomeIcon
        icon="fa-solid faHandshake"
        size="lg"
        className="text-complementary"
      />
      <SectionTitle
        pretitle="Become a Partner"
        title="A form to fullfil your passion and dreams"
      >
        Are you a great cook? want to be a partner with us? Submit your Details
        here.
      </SectionTitle>
      <Form id="requestquote" />
      <SectionTitle
        pretitle="Subscription Plan Pricing"
        title="Prices That Delight, Every Bite"
      >
        Delivery Free for 8km around Our cloud Kitchen.
      </SectionTitle>
      <Pricing id="subscription" />
      <SectionTitle
        pretitle="Halwa Hunt"
        title="A bite of halwa is a taste of comfort and tradition."
      >
        Dear Halwa lovers, we make fresh homemade halwa customizable to your
        preferences - Beetroot, Bread, carrot, pumpkin and we also cater for
        bulk order.
      </SectionTitle>
      <div className=" bg-secondary2 pb-10 shadow-md text-center">
        <SectionTitle
          pretitle="Halwa Corner"
          title="A bite of halwa is a taste of comfort and tradition."
        >
          <div className="text-secondary font-sans font-bold">
            Dear Halwa lovers, we make fresh homemade halwa customizable to your
            preferences - Beetroot, Bread, carrot, pumpkin and we also cater for
            bulk order.
          </div>
        </SectionTitle>
        <Link
          href="/halwa-corner"
          className=" hover:bg-yellow-700 bg-complementary text-white font-semibold py-2 px-4 rounded-full mt-6 transition duration-300"
        >
          Visit Halwa Corner
        </Link>
      </div>
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      ></SectionTitle>
      <Testimonials />
      <SectionTitle
        pretitle="FAQ"
        title="Frequently Asked Questions"
      ></SectionTitle>
      <Faq />
      <SectionTitle
        pretitle="Our Accompolishment"
        title="Real Acheivement takes hard roads to finish"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Countup />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
export async function getServerSideProps() {
  const scopes = ['https://www.googleapis.com/auth/spreadsheets'];
  const jwt = new google.auth.JWT(
    process.env.DAILY_MEAL_CLIENT_EMAIL,
    null,
    process.env.DAILY_MEAL_PRIVATE_KEY.replace(/\\n/g, '\n'),
    scopes,
    null
  );

  const readData = await sheets.spreadsheets.values.get({
    auth: jwt,
    spreadsheetId: process.env.DAILY_MEAL_DATABASE_ID,
    range: 'Sheet1!A2:H2',
  });
  const date = readData.data.values[0][0];
  const lunch = readData.data.values[0][1];
  const lunchPrice = readData.data.values[0][2];
  const dinner = readData.data.values[0][3];
  const dinnerPrice = readData.data.values[0][4];
  const total = readData.data.values[0][5];
  const lunchStatus = readData.data.values[0][6];
  const dinnerStatus = readData.data.values[0][7];

  console.log(
    date,
    lunch,
    lunchPrice,
    dinner,
    dinnerPrice,
    total,
    lunchStatus,
    dinnerStatus
  );

  return {
    props: {
      date,
      lunch,
      lunchPrice,
      dinner,
      dinnerPrice,
      total,
      lunchStatus,
      dinnerStatus,
    },
  };
}
