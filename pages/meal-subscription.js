import React, { useState } from 'react';
import Container from '../components/container';
import Footer from '../components/footer';
import Head from 'next/head';
import Navbar from '../components/navbar';
import SectionTitle from '../components/sectionTitle';
import Link from 'next/link';
import PricingCard from '../components/pricing';
import Cta from '../components/cta';

export default function MealSubscription() {

  return (
    <div>
      <Head>
        <title>
          Homemade Food Meal Plan Subscription | Get 20% Offer on February 7
          days / Monthly Meal Plan in Chennai
        </title>
        <meta
          name="description"
          content="Best home cooked Food delivery on Monthly weekly basis/ curated Healthy diet for pregnancy women"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <Container>
        <h1 className="sm:text-xl text-center font-bold leading-snug tracking-tight text-complementary lg:text-4xl lg:leading-tight dark:text-white">
          February Meal Plan Subscription - Monthly, Weekly, Daily plan in
          Chennai
        </h1>

        <SectionTitle
          id="7daymeal"
          pretitle="7 days Meal Plan subscription menus"
          title="29-01-2024 to 04-02-2024 One week menus"
        ></SectionTitle>

        <div className="lg:mx-40 grid lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-6 lg:p-6 md:p-2 sm:p-2 xs:p-2 rounded-md ">
          <div className="p-3 w-full border-2 rounded-md shadow-md bg-secondary">
            <div className="lg:text-5xl text-center sm:text-3xl xs:text-lg font-bold text-primary tracking-wider mb-2 uppercase">
              Lunch Menu
            </div>
            <div className="mt-6 uppercase text-accent">
              Monday (29-01-2024)
            </div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Crab masala
                </span>

                <br />
                <span className="text-gray-400">Side dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  White rice
                </span>

                <br />

                <span className="text-gray-400 ">Extras: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Poriyal
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent">
              Tuesday (30-01-2024)
            </div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Mutton Gravy
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Kuska Rice
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent">
              Wednesday (31-01-2024)
            </div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Fish fry, Fish gravy
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  White rice
                </span>
                <br />
                <span className="text-gray-400">Extras: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Poriyal
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent">
              Thursday (01-02-2024)
            </div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Pepper liver masala, Mutton bone semi gravy
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  White Rice
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent">
              Friday (02-02-2024)
            </div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Mutton Salna & Dhalcha
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Bahara Rice
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent">
              Saturday (03-02-2024)
            </div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Honey garlic chicken
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Fried Rice
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent">
              Sunday (04-02-2024)
            </div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <br />
                <span className="text-gray-400">Main Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Mutton Biriyani
                </span>
                <br />
                <span className="text-gray-400">Extras: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Raita
                </span>
                <br />
              </li>
            </ul>
            <Link href="/meal-subscription-order">
              <button className="bg-complementary text-white font-semibold py-2 px-4 rounded-full mt-6">
                Subscribe Now
              </button>
            </Link>
          </div>
          <div className="p-3 w-auto border-2 rounded-md shadow-md bg-secondary">
            <div className="lg:text-5xl text-center sm:text-3xl xs:text-lg font-bold text-primary tracking-wider mb-2 uppercase">
              Dinner Menu
            </div>
            <div>
              <div className="mt-6 uppercase text-accent">
                Monday (29-01-2024)
              </div>
              <hr />
              <ul className="text-white text-base">
                <li>
                  <span className="text-gray-400">Main Course: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Prawn capsicum curry
                  </span>
                  <br />
                  <span className="text-gray-400">Side Dish: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Ghee phulka
                  </span>
                  <br />
                </li>
              </ul>
              <div className="mt-6 uppercase text-accent">
                Tuesday (30-01-2024)
              </div>
              <hr />
              <ul className="text-white text-base">
                <li>
                  <span className="text-gray-400">Main Course: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Mutton Gravy
                  </span>
                  <br />
                  <span className="text-gray-400">Side Dish: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Ghee Phulka
                  </span>
                  <br />
                </li>
              </ul>
              <div className="mt-6 uppercase text-accent">
                Wednesday (31-01-2024)
              </div>
              <hr />
              <ul className="text-white text-base">
                <li>
                  <span className="text-gray-400">Main Course: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Chicken Murthabak or Mutton Murthabak
                  </span>
                  <br />
                </li>
              </ul>
              <div className="mt-6 uppercase text-accent ">
                Thursday (01-02-2024)
              </div>
              <hr />
              <ul className="text-white text-base">
                <li>
                  <span className="text-gray-400">Main Course: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Mutton soup
                  </span>
                  <br />
                  <span className="text-gray-400">Side Dish: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    kal dosa
                  </span>
                  <br />
                </li>
              </ul>
              <div className="mt-6 uppercase text-accent">
                Friday (02-02-2024)
              </div>
              <hr />
              <ul className="text-white text-base">
                <li>
                  <span className="text-gray-400">Main Course: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Pepper chicken
                  </span>
                  <br />
                  <span className="text-gray-400">Side Dish: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Ghee Phulka
                  </span>
                  <br />
                </li>
              </ul>
              <div className="mt-6 uppercase text-accent">
                Saturday (03-02-2024)
              </div>
              <hr />
              <ul className="text-white text-base">
                <li>
                  <span className="text-gray-400">Main Course: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Mutton green peas gravy
                  </span>
                  <br />
                  <span className="text-gray-400">Side Dish: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Ghee phulka
                  </span>
                  <br />
                </li>
              </ul>
              <div className="mt-6 uppercase text-accent">
                Sunday (04-02-2024)
              </div>
              <hr />
              <ul className="text-white text-base">
                <li>
                  <span className="text-gray-400">Main Course: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Chicken Murthabak
                  </span>
                  <br />
                </li>
              </ul>
              <Link href="/meal-subscription-order">
                <button className="bg-complementary text-white font-semibold py-2 px-4 rounded-full mt-6 items-end">
                  Subscribe Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <PricingCard />
      </Container>
      <SectionTitle
        pretitle="Contact Number"
        title="Terms and Conditions alert"
      >
        Call 9600052742 for further inquiry or submit your inquiries here{' '}
        <a href="https://assafadelicacy.com/meal-subscription-order" className="text-blue-400">
          https://assafadelicacy.com/meal-subscription-order
        </a>
      </SectionTitle>
      <SectionTitle pretitle="Note" title="Terms and Conditions alert">
        Delivery is free upto 5 km and per 2 parcels around the Cloud Kitchen.
        For the rest of the locations, charges applies and it varies according
        to porter app prices.
      </SectionTitle>
      <SectionTitle title="Areas we serve">
        Mylapore, Triplicane, Royapettah, R A Puram, Thousand lights,
        Pattinambakkam, Mirsahibpet, Nandanam, Adyar, Santhome, Balagi nagar,
        Pattinapakkam, DR Mgr Janaki college, Alwarpet, Valleeswaran thottam,
        Chepauk, Gopalapuram, Anna salai, City center, Kailasapuram mylapore,
        Abhiramapuram, Teynapet, Ice house, Krishnampet, Vadapalani, T nagar,
        chepauk, velachery, sholinganalur, nungambakkam, villivakkam,
        ayanavaram, anna nagar, gopalapuram, thoraipakkam, tambaram, pallavaram,
        pammal,chrompet, perungalathur
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1gBGVRr6YtG2monnRbwlH4FTUG355Ypk&ehbc=2E312F"
          width="640"
          height="480"
        ></iframe>
      </SectionTitle>

      <Cta />

      <Footer />
    </div>
  );
}
