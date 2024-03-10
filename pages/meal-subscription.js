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
          Homemade Food Meal Plan Subscription | Get 20% Offer on Ramadan / March - 7
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
          March and Ramadan Meal Plan Subscription  - Monthly, Weekly, Daily plan in
          Chennai
        </h1>

        <SectionTitle
          id="7daymeal"
          pretitle="7 days Meal Plan subscription menus"
          title="Ramadan Menus / March meal subscription Menu"
        ></SectionTitle>

        <div className="lg:mx-40 grid lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-6 lg:p-6 md:p-2 sm:p-2 xs:p-2 rounded-md ">
          <div className="p-3 w-full border-2 rounded-md shadow-md bg-secondary">
            <div className="lg:text-5xl text-center sm:text-3xl xs:text-lg font-bold text-primary tracking-wider mb-2 uppercase">
              Iftar / Lunch Menu
            </div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-complementary2 uppercase font-bold">
                  <span className=" text-accent">Common combo :</span> Kanjee + Kadal Paasi(china grass) + Juice + Fruits
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className="text-complementary2 uppercase font-bold">
                  <span className=" text-accent">1. </span>Common combo + Zeera rice , Butter Chicken + Falafil + Mint chutney
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className="text-complementary2 uppercase font-bold">
                  <span className=" text-accent">2. </span>Common combo + Mutter Pulao + Salsa + Tikka roll + Curd chutney
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className="text-complementary2 uppercase font-bold">
                  <span className=" text-accent">3. </span>Common Combo + Noodles + Sauce + Cauliflower pakoda + Tamarind chutney
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className="text-complementary2 uppercase font-bold">
                  <span className=" text-accent">4. </span>Common Combo + Ghee pulka + Pepper chicken + Vadai + chutney
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className="text-complementary2 uppercase font-bold">
                  <span className=" text-accent">5. </span> Common Combo + Murthabak + Mayonaise + Chicken popcorn + Tomato sauce
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className="text-complementary2 uppercase font-bold">
                  <span className=" text-accent">6. </span> Common Combo + Prawn Noodles + Coconut shrimp + Tomato sauce
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className="text-complementary2 uppercase font-bold">
                  <span className=" text-accent">7. </span> Common Combo + Afghani Pulao + Salsa + Samosa + Tamarind and Mint chutney
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className="text-complementary2 uppercase font-bold">
                  <span className=" text-accent">8. </span> Common Combo + Chicken Mandi + Mayonise + Salsa + Paruppu Vadai + Mint chutney
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className="text-complementary2 uppercase font-bold">
                  <span className=" text-accent">9. </span> Common Combo + Chicken biriyani + Raita + Nuggets + Sauce
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className="text-complementary2 uppercase font-bold">
                  <span className=" text-accent">10. </span> Common Combo + White sauce noodles + Small burger (2 pcs) + Sauce
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className="text-complementary2 uppercase font-bold">
                  <span className=" text-accent">11. </span> Common Combo + Dal Pulao + Chettinad chicken + Cheese ball
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className="text-complementary2 uppercase font-bold">
                  <span className=" text-accent">12. </span> Common Combo + Spaghetti + Hariyali tikka roll + chutney
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className="text-complementary2 uppercase font-bold">
                  <span className=" text-accent">13. </span> Common Combo + Ghee Rice + Dum Aloo + Potato balls + Sauce
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className="text-complementary2 uppercase font-bold">
                  <span className=" text-accent">14. </span> Common Combo + Veg fried rice + Gobi Manchurian + Chicken Pakoda
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className="text-complementary2 uppercase font-bold">
                  <span className=" text-accent">15. </span> Common Combo + Zeera rice + Chicken Tikka Masala + Chicken Culet
                </span>
                <hr />
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
              Sahar / Dinner Menu
            </div>
            <div>
              <hr />
              <ul className="text-white text-base">
                <li><span className="text-complementary2 uppercase font-bold">
                  <span className=" text-accent">Common combo :</span> White rice  + Rasam + Appalam + Curd
                </span>
                  <hr />
                  <br /></li>
                <li>
                  <span className="text-complementary2 uppercase font-bold">
                    <span className=" text-accent">Day 1. </span> Common Combo + Chicken curry + Corn chips
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className="text-complementary2 uppercase font-bold">
                    <span className=" text-accent">Day 2. </span> Common Combo + Chicken Salna + Poriyal
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className="text-complementary2 uppercase font-bold">
                    <span className=" text-accent">Day 3. </span> Common Combo + Sambar + Prawn Curry
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className="text-complementary2 uppercase font-bold">
                    <span className=" text-accent">Day 4. </span> Common Combo + Drumsick Dal + Mutton Culet
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className="text-complementary2 uppercase font-bold">
                    <span className=" text-accent">Day 5. </span> Common Combo + Mutton Keema dal + Poriyal
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className="text-complementary2 uppercase font-bold">
                    <span className=" text-accent">Day 6. </span> Common Combo + Brinjal kulambu + Mutton Liver
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className="text-complementary2 uppercase font-bold">
                    <span className=" text-accent">Day 7. </span> Common Combo + Prawn sepang kilangu + Poriyal
                  </span>
                  <hr />
                  <br />
                </li>
              </ul>
              <hr />
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
        <a
          href="https://assafadelicacy.com/meal-subscription-order"
          className="text-blue-400"
        >
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
          width="320"
          height="480"
        ></iframe>
      </SectionTitle>

      <Cta />

      <Footer />
    </div>
  );
}
