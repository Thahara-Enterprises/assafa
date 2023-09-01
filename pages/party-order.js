import React, { useState } from 'react';
import Container from '../components/container';
import Image from 'next/image';
import Banquet from '../public/img/party-hall.jpg';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Head from 'next/head';

export default function BulkOrders() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dateOfEvent: '',
    phone: '',
    locationOfEvent: '',
    noOfGuest: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = fetch(`/api/gsheet_bulk`, {
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
      dateOfEvent: '',
      phone: '',
      locationOfEvent: '',
      noOfGuest: '',
    });
  };
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
      <div className="bg-secondary h-screen relative">
        <Image
          src={Banquet}
          alt="banquet hall preparation"
          className="absolute inset-0 object-cover w-full h-full opacity-40"
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl text-primary font-bold mb-4">
            Party Orders Undertaken
          </h1>
          <p className="text-lg text-white mb-8">
            Love filled dishes From Assafa cloud kitchen to Your guest table |
            Submit your Inquiries Below and get a call back from our expert
          </p>
        </div>
      </div>

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
              htmlFor="dateOfEvent"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Date of Event:
            </label>
            <input
              type="date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Approximate No. of Guest in the Party"
              id="dateOfEvent"
              name="dateOfEvent"
              value={formData.dateOfEvent}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="noOfGuest"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              No of Guest (approx):
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Approximate No. of Guest in the Party"
              id="noOfGuest"
              name="noOfGuest"
              value={formData.noOfGuest}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="text"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Location of Event
            </label>
            <input
              type="locationOfEvent"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Location of Delivering the Orders"
              id="locationOfEvent"
              name="locationOfEvent"
              value={formData.locationOfEvent}
              onChange={handleChange}
            />
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Get Call back
          </button>
        </form>
      </Container>
      <Footer />
    </div>
  );
}
