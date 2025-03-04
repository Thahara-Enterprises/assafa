import React, { useState } from "react"
import Container from "../components/container"
import Footer from "../components/footer"
import Head from "next/head"
import Navbar from "../components/navbar"
import SectionTitle from "../components/sectionTitle"
import Link from "next/link"
import PricingCard from "../components/pricing"
import Cta from "../components/cta"
import RamadanMeal from "../public/img/ramadanmeal.jpeg"
import Image from "next/image"
export default function MealSubscription() {
  return (
    <div>
      <Head>
        <title>
          Homemade Food Meal Plan Subscription | Get 20% Offer | 7 days /
          Monthly Meal Plan in Chennai
        </title>
        <meta
          name='description'
          content='Best home cooked Food delivery on Monthly weekly basis/ curated Healthy diet for pregnancy women'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />

      <Container>
        <h1 className='sm:text-xl text-center font-bold leading-snug tracking-tight text-complementary lg:text-4xl lg:leading-tight dark:text-white'>
          August Meal Plan Subscription - Monthly, Weekly, Daily plan in Chennai
        </h1>

        <SectionTitle
          id='7daymeal'
          pretitle=' Meal Plan subscription menus'
          title='August meal subscription Menu'
        ></SectionTitle>

        <div className='lg:mx-40 grid lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-6 lg:p-6 md:p-2 sm:p-2 xs:p-2 rounded-md '>
          <div className='p-3 w-full border-2 rounded-md shadow-md bg-secondary'>
            <div className='lg:text-5xl text-center sm:text-3xl xs:text-lg font-bold text-primary tracking-wider mb-2 uppercase'>
              Lunch Menu
            </div>
            <hr />
            <ul className='text-white text-base'>
              <li>
                <span className='text-complementary2 uppercase font-bold'>
                  <span className=' text-accent'>1. </span>Boti gravy, Rasam,
                  White rice
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className='text-complementary2 uppercase font-bold'>
                  <span className=' text-accent'>2. </span>Plain paruppu, Mutton
                  liver curry, Poriyal, rasam, white rice
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className='text-complementary2 uppercase font-bold'>
                  <span className=' text-accent'>3. </span>Chicken salna,
                  Poriyal, rasam, White rice
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className='text-complementary2 uppercase font-bold'>
                  <span className=' text-accent'>4. </span>Mutton afghani pulao,
                  Dates tamarind chutney, Mint chutney, Cucumber curd
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className='text-complementary2 uppercase font-bold'>
                  <span className=' text-accent'>5. </span>Crab gravy. Crab
                  soup, Poriyal, White rice
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className='text-complementary2 uppercase font-bold'>
                  <span className=' text-accent'>6. </span> Bahara rice, Chicken
                  salna, Dalcha
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className='text-complementary2 uppercase font-bold'>
                  <span className=' text-accent'>7. </span> Crab gravy. Crab
                  soup, Poriyal, White rice
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className='text-complementary2 uppercase font-bold'>
                  <span className=' text-accent'>8. </span> Beef chukka,
                  Parauppu, Rasam, White rice
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className='text-complementary2 uppercase font-bold'>
                  <span className=' text-accent'>9. </span> Thala kari salna,
                  Poriyal, White rice
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className='text-complementary2 uppercase font-bold'>
                  <span className=' text-accent'>10. </span> Prawn cheppang
                  kelangu, Prawn kootu, Rasam, white rice
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className='text-complementary2 uppercase font-bold'>
                  <span className=' text-accent'>11. </span> Chicken mandi,
                  Veg-Gravy
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className='text-complementary2 uppercase font-bold'>
                  <span className=' text-accent'>12. </span> Sambar, Pepper
                  chicken, Poriyal, Rasam, White rice
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className='text-complementary2 uppercase font-bold'>
                  <span className=' text-accent'>13. </span> Ghee rice and
                  Chicken tikka masala
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className='text-complementary2 uppercase font-bold'>
                  <span className=' text-accent'>14. </span> Nethili meen gravy,
                  Nethili meen fry, Poriyal, Rasam, White rice
                </span>
                <hr />
                <br />
              </li>
              <li>
                <span className='text-complementary2 uppercase font-bold'>
                  <span className=' text-accent'>15. </span> Beef chukka,
                  Parauppu, Rasam, White rice
                </span>
                <hr />
                <br />
              </li>
            </ul>

            <Link href='/meal-subscription-order'>
              <button className='bg-complementary text-white font-semibold py-2 px-4 rounded-full mt-6'>
                Subscribe Now
              </button>
            </Link>
          </div>
          <div className='p-3 w-auto border-2 rounded-md shadow-md bg-secondary'>
            <div className='lg:text-5xl text-center sm:text-3xl xs:text-lg font-bold text-primary tracking-wider mb-2 uppercase'>
              Dinner Menu
            </div>
            <div>
              <hr />
              <ul className='text-white text-base'>
                <li>
                  <span className='text-complementary2 uppercase font-bold'>
                    <span className=' text-accent'>1. </span> Mutton gravy, Ghee
                    phulka
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className='text-complementary2 uppercase font-bold'>
                    <span className=' text-accent'>2. </span> Chicken gravy,
                    Ghee phulka
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className='text-complementary2 uppercase font-bold'>
                    <span className=' text-accent'>3. </span> Fish gravy, Ghee
                    phulka
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className='text-complementary2 uppercase font-bold'>
                    <span className=' text-accent'>4. </span> Prawn mushroom
                    capsicum semi gravy, Ghee phulka
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className='text-complementary2 uppercase font-bold'>
                    <span className=' text-accent'>5. </span> Mutton keema dal,
                    Ghee phulka
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className='text-complementary2 uppercase font-bold'>
                    <span className=' text-accent'>6. </span> Pepper chicken,
                    Ghee phulka
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className='text-complementary2 uppercase font-bold'>
                    <span className=' text-accent'>7. </span> Afghani chicken,
                    Ghee phulka
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className='text-complementary2 uppercase font-bold'>
                    <span className=' text-accent'>8. </span> South indian
                    mapillai pangan, Ghee phulka
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className='text-complementary2 uppercase font-bold'>
                    <span className=' text-accent'>9. </span> Hariyali chicken,
                    Ghee phulka
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className='text-complementary2 uppercase font-bold'>
                    <span className=' text-accent'>10. </span> Butter chicken,
                    Ghee phulka
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className='text-complementary2 uppercase font-bold'>
                    <span className=' text-accent'>11. </span> Chicken tikka
                    masala, Ghee phulka
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className='text-complementary2 uppercase font-bold'>
                    <span className=' text-accent'>12. </span> Chicken murthabak
                    / Mutton murthabak & Mayonise
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className='text-complementary2 uppercase font-bold'>
                    <span className=' text-accent'>13. </span> Aatukkal paya,
                    Ghee phulka
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className='text-complementary2 uppercase font-bold'>
                    <span className=' text-accent'>14. </span> Prawn chepang
                    kelangu, Ghee phulka
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className='text-complementary2 uppercase font-bold'>
                    <span className=' text-accent'>15. </span> Mutton malai
                    kofta, Ghee phulka
                  </span>
                  <br />
                </li>
              </ul>
              <hr />
              <Link href='/meal-subscription-order'>
                <button className='bg-complementary text-white font-semibold py-2 px-4 rounded-full mt-6 items-end'>
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
        pretitle='Contact Number'
        title='Terms and Conditions alert'
      >
        Call 9600052742 for further inquiry or submit your inquiries here{" "}
        <a
          href='https://assafadelicacy.com/meal-subscription-order'
          className='text-blue-400'
        >
          https://assafadelicacy.com/meal-subscription-order
        </a>
      </SectionTitle>
      <SectionTitle pretitle='Note' title='Terms and Conditions alert'>
        Delivery is free upto 5 km and per 2 parcels around the Cloud Kitchen.
        For the rest of the locations, charges applies and it varies according
        to porter app prices.
      </SectionTitle>
      <SectionTitle title='Areas we serve'>
        Mylapore, Triplicane, Royapettah, R A Puram, Thousand lights,
        Pattinambakkam, Mirsahibpet, Nandanam, Adyar, Santhome, Balagi nagar,
        Pattinapakkam, DR Mgr Janaki college, Alwarpet, Valleeswaran thottam,
        Chepauk, Gopalapuram, Anna salai, City center, Kailasapuram mylapore,
        Abhiramapuram, Teynapet, Ice house, Krishnampet, Vadapalani, T nagar,
        chepauk, velachery, sholinganalur, nungambakkam, villivakkam,
        ayanavaram, anna nagar, gopalapuram, thoraipakkam, tambaram, pallavaram,
        pammal,chrompet, perungalathur
      </SectionTitle>

      <Cta />

      <Footer />
    </div>
  )
}
