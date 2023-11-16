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
          Homemade Food Subscription | Get 20% Offer on
          November Monthly Meal Plan in Chennai
        </title>
        <meta
          name="description"
          content="Get Delivered Hot home made food from Assafa Cloud kitchen for Working couples, Senior citizens, Bachelors and for Chennai foodie"
        />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Navbar />

      <Container>
        <SectionTitle
          id="7daymeal"
          pretitle="7 days Meal Plan subscription menus"
          title="13-11-2023 to 19-11-2023 One week menus"
        ></SectionTitle>

        <div className="lg:mx-40 grid lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-6 lg:p-6 md:p-2 sm:p-2 xs:p-2 rounded-md ">
          <div className="p-3 w-full border-2 rounded-md shadow-md bg-secondary">
            <div className="lg:text-5xl text-center sm:text-3xl xs:text-lg font-bold text-primary tracking-wider mb-2 uppercase">
              Lunch Menu
            </div>
            <div className="mt-6 uppercase text-accent">
              Monday (13-11-2023)
            </div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Prawn Biriyani
                </span>

                <br />
                <span className="text-gray-400 ">Extras: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Raita
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent">
              Tuesday (14-11-2023)
            </div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Mutton Kofta Curry
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Jeera Rice
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent">
              Wednesday (15-11-2023)
            </div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Chettinad Ghee roast Chicken
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Basmathi Moong Dal Pulao
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent">
              Thursday (16-11-2023)
            </div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Pepper Mutton Liver
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  White Rice, Thenga pal Rasam
                </span>
                <br />
                <span className="text-gray-400 ">Extras: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Kadamba Poriyal
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent">
              Friday (17-11-2023)
            </div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Mutton Kurma & Dhalcha
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
              Saturday (18-11-2023)
            </div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Chicken Mandi
                </span>
                <br />
                <span className="text-gray-400 ">Extras: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Salsa
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent">
              Sunday (19-11-2023)
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
                Monday (13-11-2023)
              </div>
              <hr />
              <ul className="text-white text-base">
                <li>
                  <span className="text-gray-400">Main Course: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Prawn-capsicum-Mushroom Curry
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
                Tuesday (14-11-2023)
              </div>
              <hr />
              <ul className="text-white text-base">
                <li>
                  <span className="text-gray-400">Main Course: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Mutton Keema Dal
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
                Wednesday (15-11-2023)
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
                Thursday (16-11-2023)
              </div>
              <hr />
              <ul className="text-white text-base">
                <li>
                  <span className="text-gray-400">Main Course: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Afghani Green Chicken
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
                Friday (17-11-2023)
              </div>
              <hr />
              <ul className="text-white text-base">
                <li>
                  <span className="text-gray-400">Main Course: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Honey Garlic Chicken
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
                Saturday (18-11-2023)
              </div>
              <hr />
              <ul className="text-white text-base">
                <li>
                  <span className="text-gray-400">Main Course: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    -
                  </span>
                  <br />
                  <span className="text-gray-400">Side Dish: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    -
                  </span>
                  <br />
                </li>
              </ul>
              <div className="mt-6 uppercase text-accent">
                Sunday (19-11-2023)
              </div>
              <hr />
              <ul className="text-white text-base">
                <li>
                  <span className="text-gray-400">Main Course: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    South Indian Mapillai Chicken Pangan
                  </span>
                  <br />
                  <span className="text-gray-400">Side Dish: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Ghee Phulka
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
        <h1 className="sm:text-xl text-center font-bold leading-snug tracking-tight text-complementary lg:text-4xl lg:leading-tight dark:text-white">
         November Meal Plan Subscription - Monthly, Weekly, Daily plan in Chennai
        </h1>
        <PricingCard />
      </Container>
      <SectionTitle pretitle="Note" title="Terms and Conditions alert">
        Delivery is free upto 5 km around the Cloud Kitchen. For the rest of the
        locations, charges applies and it varies according to porter app prices.
      </SectionTitle>
      <SectionTitle title="Areas we serve">
        Adambakkam, Adyar, Ambattur, Anna Nagar, Besant nagar, Choolaimedu,
        Chrompet, kk nagar, Kodambakkam, Kolathur, Madipakkam, Medavakkam,
        Mogappair, Mylapore Nanganallur, Nungambakkam, OMR, Pallavaram,
        Pallikaranai, Perambur, Perungudi Porur, Ramapuram, Sholinganallur,
        Tambaram, Thiruvanmiyur, Thoraipakkam, Triplicane, Velachery, West
        tambaram
      </SectionTitle>

      <Cta />

      <Footer />
    </div>
  );
}
