import Link from 'next/link';
import React from 'react';
import Container from '../components/container';
import SectionTitle from '../components/sectionTitle';
import { google } from 'googleapis';
const sheets = google.sheets('v4');
import Navbar from '../components/navbar';
import Head from 'next/head';
import Footer from '../components/footer';

export default function DailyMenuUpdate({
  date,
  lunch,
  lunchPrice,
  dinner,
  dinnerPrice,
  total,
  lunchStatus,
  dinnerStatus,
}) {
  return (
    <div>
      <Head>
        <title>Assafa Delicacy - Party Orders Undertaken</title>
        <meta
          name="description"
          content="Worried about Party orders Arrangement?
Sit back and Relax! We have got you covered till its on your guest's Table"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
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
            <Link href="/todays-lunch-order">
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
              <div className="text-2xl sm:text-lg xs:text-lg font-bold text-primary tracking-wider mb-2 uppercase">
                Today&apos;s Dinner Menu
              </div>
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
            <Link href="/todays-dinner-order">
              <button className="bg-complementary text-white font-semibold py-2 px-4 rounded-full mt-6">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </Container>
      <SectionTitle pretitle="Note" title="Terms and Conditions alert">
        Delivery is free upto 5 km around the Cloud Kitchen. For the rest of the
        locations, charges applies and it varies from Rs 30 to Rs 90 and also
        depends on Number of Boxes Ordered. Please be upon the time constraint.
        Else the order will be delivered the day after or in any untime or it
        will never be delivered based on circumstances.
      </SectionTitle>
      <Footer />
    </div>
  );
}
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
