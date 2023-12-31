import React, { useEffect, useState } from 'react';
import Container from '../components/container';
import moment from 'moment-timezone';
import Image from 'next/image';
import DinnerForm from '../public/img/dinner-menu-form.png';
import Head from 'next/head';
import Navbar from '../components/navbar';
import { google } from 'googleapis';
const sheets = google.sheets('v4');
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUser,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faBox,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../components/footer';
library.add(faUser, faEnvelope, faPhone, faMapMarkerAlt, faBox);

export default function TodaysDinnerOrder({
  date,
  lunch,
  lunchPrice,
  dinner,
  dinnerPrice,
  lunchStatus,
  dinnerStatus,
}) {
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

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    noOfBox: '',
  });
  const [totalPrice, setTotalPrice] = useState(dinnerPrice);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setTotalPrice(formData.noOfBox * Number(dinnerPrice));
  }, [formData.noOfBox, dinnerPrice]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = fetch(`/api/gsheet_todaysdinnerorder`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    alert('Order confirmation sent to You email!');
    setFormData({
      name: '',
      email: '',
      location: '',
      noOfBox: '',
      phone: '',
    });
  };
  return (
    <div>
      <Head>
        <title>Assafa Delicacy - Delicious and Tasty Home made food</title>
        <meta
          name="description"
          content="Online Cloud kitchen for Working couples, Senior citizens, Bachelors and also or foodie"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="max-w-sm mx-auto flex items-center justify-center lg:border xl:border md:border 2xl:border sm:border-none lg:border-gray-300 xl:border-gray-300 md:border-gray-300 2xl:border-gray-300  shadow-md sm:shadow-none rounded px-4 py-4 mb-4">
        <div>
          <div className="flex items-center justify-center">
            <Image
              src={DinnerForm}
              alt="home made food delivery"
              width="177"
              height="100"
            />
          </div>
          <div className="flex items-center justify-center text-base font-bold text-complementary2 uppercase font-sans">
            {dinner}
          </div>
          <div className="font-bold text-secondary flex items-center justify-center mb-2">
            ₹{dinnerPrice} /per box
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-center mb-2">
              <span className="bg-gray-300 py-1 px-2 mb-2 mx-2 rounded-full">
                <FontAwesomeIcon icon="fa-solid fa-box" />
              </span>
              <input
                type="text"
                className="shadow appearance-none border w-full py-1 px-2 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline text-xs"
                id="noOfBox"
                name="noOfBox"
                placeholder="Number Of Box"
                value={formData.noOfBox}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-center mb-2">
              <span className="bg-gray-300 py-1 px-2 mb-2 mx-2 rounded-full">
                <FontAwesomeIcon icon="fas fa-user" />
              </span>
              <input
                type="text"
                className="shadow appearance-none border w-full py-1 px-2 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline text-xs"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-center mb-2">
              <span className="bg-gray-300 py-1 px-2 mb-2 mx-2 rounded-full">
                <FontAwesomeIcon icon="fa-solid fa-phone" />
              </span>
              <input
                type="text"
                className="shadow appearance-none border w-full py-1 px-2 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline text-xs"
                id="name"
                name="phone"
                placeholder="Your Whatsapp Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-center mb-2">
              <span className="bg-gray-300 py-1 px-2 mb-2 mx-2 rounded-full">
                <FontAwesomeIcon icon="fa-solid fa-envelope" />
              </span>
              <input
                type="email"
                className="shadow appearance-none border w-full py-1 px-2 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline text-xs"
                placeholder="Enter your Email Address"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-center mb-2">
              <span className="bg-gray-300 py-1 px-2 mb-2 mx-2 rounded-full">
                <FontAwesomeIcon icon="fas fa-map-marker-alt" />
              </span>
              <input
                type="text"
                className="shadow appearance-none border w-full py-1 px-2 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline text-xs"
                placeholder="Delivery Location"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <div className="font-bold text-secondary flex items-center justify-center mb-2">
              Price: ₹{totalPrice}
            </div>
            <div className="flex items-center justify-center">
              {isDinnerTime() && dinner !== '-' ? (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Order
                </button>
              ) : (
                <button
                  type="button"
                  className="bg-blue-500 blur-sm hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  disabled
                >
                  Order
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
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
