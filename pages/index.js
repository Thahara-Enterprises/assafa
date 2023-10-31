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
import Pricing from '../components/pricing';
import Container from '../components/container';
import { google } from 'googleapis';
import Link from 'next/link';
import Bene from '../components/Bene';
import SignatureDish from '../components/signaturedish';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
library.add(faHandshake);
import { useRouter } from 'next/router';
const sheets = google.sheets('v4');
import moment from 'moment-timezone';

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
  const router = useRouter();
  const { userId } = router.query;
  const [currentTime, setCurrentTime] = useState(moment().tz('Asia/Kolkata'));

  useEffect(() => {
    // Update the current time every second
    const interval = setInterval(() => {
      setCurrentTime(moment().tz('Asia/Kolkata'));
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const isDinnerTime = () => {
    const currentTimeFormatted = currentTime.format('HH:mm');

    return currentTimeFormatted >= '13:00' && currentTimeFormatted <= '19:00';
  };
  const isLunchTime = () => {
    const currentTimeFormatted = currentTime.format('HH:mm');
    return currentTimeFormatted >= '18:00' || currentTimeFormatted <= '10:00';
  };
  return (
    <div >
      <Head>
        <title>
          Freshly made Homemade food Home delivered in Chennai | Assafa
          Delicacy
        </title>
        <meta
          name="description"
          content="Home cooked food available on Daily / Weekly / Monthly basis. Party Orders undertaken. Bulk sweet orders also undertaken"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Our Signature Dish"
        title="Assafa Delicacy's Top Reviewed dishes."
      ></SectionTitle>
      <SignatureDish />

      <SectionTitle
        pretitle="Today's Menu"
        title="Learn how to fullfil your needs"
      >
        Submit the form by clicking on Order now button below and Get
        confirmation Email . We undertake Lunch orders before 10 AM and Dinner
        Orders Before 06:00 PM. Please be upon the time constraint. Else the
        order will be delivered the day after or in any untime or it will never
        be delivered based on circumstances.
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
                {isLunchTime() && lunch !== '-' ? (
                  <span className="text-green-500">
                    Current Status: Order Undertaken
                  </span>
                ) : (
                  <span className="text-red-500">
                    Current Status: Order closed
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
            {isLunchTime() && lunch !== '-' ? (
              <Link href="/todays-lunch-order">
                <button className="bg-complementary text-white font-semibold py-2 px-4 rounded-full mt-6">
                  Order Now
                </button>
              </Link>
            ) : (
              <Link href="/todays-lunch-order">
                <button
                  type="button"
                  className="bg-gray-300 blur-sm cursor-not-allowed text-white font-semibold py-2 px-4 rounded-full mt-6"
                  disabled
                >
                  Order Now
                </button>
              </Link>
            )}
          </div>
          <div className=" bg-secondary rounded-lg shadow-md p-6 w-auto">
            <div className="mb-4">
              <p className="text-gray-400 text-base float-right">
                Date: {date}
              </p>
            </div>

            <div className="mb-4">
              <div className="text-2xl sm:text-lg xs:text-lg font-bold text-primary tracking-wider mb-2 uppercase">
                Today&apos;s Dinner Menu
              </div>
              <div className="text-sm">
                {isDinnerTime() && dinner !== '-' ? (
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
            {isDinnerTime() && dinner !== '-' ? (
              <Link href="/todays-dinner-order">
                <button className="bg-complementary text-white font-semibold py-2 px-4 rounded-full mt-6">
                  Order Now
                </button>
              </Link>
            ) : (
              <Link href="/todays-dinner-order">
                <button
                  type="button"
                  className="bg-gray-300 blur-sm cursor-not-allowed text-black font-semibold py-2 px-4 rounded-full mt-6"
                  disabled
                >
                  Order Now
                </button>
              </Link>
            )}
          </div>
        </div>
      </Container>
      <SectionTitle
        pretitle="Assafa Cloud Kitchen Benefits"
        title="What make Assafa Delicacy to stand out in Market?"
      >
        The food we make at Assafa Delicacy is always delicious and loved by
        Many people. Visit our instagram Review page to see all the reviews. We
        have been doing it for 20 years as a bulk order yearly and have started
        to do it on daily basis as we have always been passion about cooking.
        Are you a great cook and has the same zeal and passion as well, then
        join our network by submitting Our{' '}
        <nobr
          dangerouslySetInnerHTML={{
            __html: '&ldquo;Become a Partner&rdquo;',
          }}
        />
        form below.
      </SectionTitle>
      <Bene />
      <SectionTitle
        pretitle="Subscription Plan Pricing"
        title="Prices That Delight, Every Bite"
      >
        Delivery Free for 5km around Our cloud Kitchen. Charges applies for the
        rest of the area based on number of Boxes or orders and kilometers.
      </SectionTitle>
      <Pricing />

      <SectionTitle
        pretitle="Become a Partner"
        title="A form to fullfil your passion and dreams"
      >
        Are you a great cook? want to be a partner with us? Submit your Details
        here.
      </SectionTitle>
      <Form id="requestquote" />

      <div className="bg-secondary pb-10 shadow-md text-center rounded-3xl">
        <SectionTitle
          pretitle="Halwa Corner"
          title="A bite of halwa is a taste of comfort and tradition."
        >
          <div className="text-white font-sans font-bold">
            Dear Halwa lovers, we make fresh homemade halwa customizable to your
            preferences - Beetroot, Bread, carrot, pumpkin etc and we also cater
            for bulk order.
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
