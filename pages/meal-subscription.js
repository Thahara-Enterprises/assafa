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
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = fetch(`/api/gsheet_subscription`, {
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
      message: '',
      phone: '',
    });
  };
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

      <Container>
        <h1 className="sm:text-xl text-center font-bold leading-snug tracking-tight text-complementary lg:text-4xl lg:leading-tight dark:text-white">
          Meal Plan Subscription
        </h1>

        <SectionTitle
          pretitle="Meal Plan"
          title="Check below what does a Assafa Cloud Kitchen's Typical Plan Looks like"
        ></SectionTitle>

        <div className="lg:mx-40 grid lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-6 lg:p-6 md:p-2 sm:p-2 xs:p-2 rounded-md ">
          <div className="p-3 w-full border-2 rounded-md shadow-md bg-secondary">
            <div className="text-2xl sm:text-lg xs:text-lg font-bold text-primary tracking-wider mb-2 uppercase">
              Lunch Menu
            </div>
            <div className="mt-6 uppercase text-accent">Monday</div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Squid Fry
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  White Rice
                </span>
                <br />
                <span className="text-gray-400 ">Extras: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Kadamba Poriyal
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent">Tuesday</div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Squid Fry
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  White Rice
                </span>
                <br />
                <span className="text-gray-400 ">Extras: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Kadamba Poriyal
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent">Wednesday</div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Squid Fry
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  White Rice
                </span>
                <br />
                <span className="text-gray-400 ">Extras: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Kadamba Poriyal
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent">Thursday</div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Squid Fry
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  White Rice
                </span>
                <br />
                <span className="text-gray-400 ">Extras: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Kadamba Poriyal
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent">Friday</div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Squid Fry
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  White Rice
                </span>
                <br />
                <span className="text-gray-400 ">Extras: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Kadamba Poriyal
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent">Saturday</div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Squid Fry
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  White Rice
                </span>
                <br />
                <span className="text-gray-400 ">Extras: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Kadamba Poriyal
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent">Sunday</div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Squid Fry
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  White Rice
                </span>
                <br />
                <span className="text-gray-400">Extras: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Kadamba Poriyal
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
            <div className="text-2xl sm:text-lg xs:text-lg font-bold text-primary tracking-wider mb-2 uppercase">
              Dinner Menu
            </div>
            <div>
              <div className="mt-6 uppercase text-accent">Monday</div>
              <hr />
              <ul className="text-white text-base">
                <li>
                  <span className="text-gray-400">Main Course: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Squid Fry
                  </span>
                  <br />
                  <span className="text-gray-400">Side Dish: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Roti
                  </span>
                  <br />
                </li>
              </ul>
              <div className="mt-6 uppercase text-accent">Tuesday</div>
              <hr />
              <ul className="text-white text-base">
                <li>
                  <span className="text-gray-400">Main Course: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Squid Fry
                  </span>
                  <br />
                  <span className="text-gray-400">Side Dish: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Roti
                  </span>
                  <br />
                </li>
              </ul>
              <div className="mt-6 uppercase text-accent">Wednesday</div>
              <hr />
              <ul className="text-white text-base">
                <li>
                  <span className="text-gray-400">Main Course: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Squid Fry
                  </span>
                  <br />
                  <span className="text-gray-400">Side Dish: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Roti
                  </span>
                  <br />
                </li>
              </ul>
              <div className="mt-6 uppercase text-accent ">Thursday</div>
              <hr />
              <ul className="text-white text-base">
                <li>
                  <span className="text-gray-400">Main Course: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Squid Fry
                  </span>
                  <br />
                  <span className="text-gray-400">Side Dish: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Roti
                  </span>
                  <br />
                </li>
              </ul>
              <div className="mt-6 uppercase text-accent">Friday</div>
              <hr />
              <ul className="text-white text-base">
                <li>
                  <span className="text-gray-400">Main Course: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Squid Fry
                  </span>
                  <br />
                  <span className="text-gray-400">Side Dish: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Roti
                  </span>
                  <br />
                </li>
              </ul>
              <div className="mt-6 uppercase text-accent">Saturday</div>
              <hr />
              <ul className="text-white text-base">
                <li>
                  <span className="text-gray-400">Main Course: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Squid Fry
                  </span>
                  <br />
                  <span className="text-gray-400">Side Dish: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Roti
                  </span>
                  <br />
                </li>
              </ul>
              <div className="mt-6 uppercase text-accent">Sunday</div>
              <hr />
              <ul className="text-white text-base">
                <li>
                  <span className="text-gray-400">Main Course: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Squid Fry
                  </span>
                  <br />
                  <span className="text-gray-400">Side Dish: </span>
                  <span className="text-complementary2 uppercase font-bold">
                    Roti
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
      <SectionTitle pretitle="Note" title="Terms and Conditions alert">
        Delivery is free upto 5 km around the Cloud Kitchen. For the rest of the
        locations, charges applies and it varies from Rs 30 to Rs 90 and also
        depends on Number of Boxes Ordered. Please be upon the time constraint.
        Else the order will be delivered the day after or in any untime or it
        will never be delivered based on circumstances.
      </SectionTitle>

      <PricingCard />
      <Cta />

      <Footer />
    </div>
  );
}
