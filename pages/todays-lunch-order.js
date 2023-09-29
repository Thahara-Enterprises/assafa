import React, { useEffect, useState } from 'react';
import Container from '../components/container';
import { google } from 'googleapis';
const sheets = google.sheets('v4');
import moment from 'moment-timezone';

export default function TodaysLunchrOrder() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    noOfBox: '',
  });
  const [currentTime, setCurrentTime] = useState(moment().tz('Asia/Kolkata'));

  useEffect(() => {
    // Update the current time every second
    const interval = setInterval(() => {
      setCurrentTime(moment().tz('Asia/Kolkata'));
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = fetch(`/api/gsheet_todayslunchorder`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    alert('Message sent!');
    setFormData({
      name: '',
      email: '',
      location: '',
      noOfBox: '',
      phone: '',
    });
  };
  const isLunchTime = () => {
    const currentTimeFormatted = currentTime.format('HH:mm');
    return currentTimeFormatted >= '18:00' || currentTimeFormatted <= '10:00';
  };
  return (
    <div>
      <Container className={`flex w-full flex-col mt-4 max-w-2xl`}>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Whatsapp No:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="phone"
              placeholder="Your Whatsapp Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your Email Address"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="location"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Select your Location
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your Email Address"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="noOfBox"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              No Of Box
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your Email Address"
              id="noOfBox"
              name="noOfBox"
              value={formData.noOfBox}
              onChange={handleChange}
            />
          </div>
          {isLunchTime() && lunch !== '-' ? (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Order
            </button>
          ) : (
            <button
              type="button"
              className="bg-blue-500 blur-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled
            >
              Order
            </button>
          )}
        </form>
      </Container>
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
  const total = readData.data.values[0][5];
  const lunchStatus = readData.data.values[0][6];

  return {
    props: {
      date,
      lunch,
      lunchPrice,

      total,
      lunchStatus,
    },
  };
}
