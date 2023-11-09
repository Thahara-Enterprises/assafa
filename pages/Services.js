import React from 'react';
import Footer from '../components/footer';
import Balcony from '../public/img/contracting/Balcony.jpg';
import MEP from '../public/img/contracting/MEP.jpg';

import Image from 'next/image';
import Container from '../components/container';
import Navbar from '../components/navbar';
import Head from 'next/head';
import Cta from '../components/cta';
import Residential from '../public/img/contracting/residential.jpg';
import SectionTitle from '../components/sectionTitle';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Bulk Orders Undertaken',
      image: Balcony,
      description:
        'We do orders for Marriage and other functions',
    },
    {
      title: 'Delivery',
      image: Balcony,
      description:
        'Free delivery available for certain areas while for rest of the areas, delivery charges applies',
    },
    {
      title: 'Custom Meals Available on request',
      image: Balcony,
      description:
        'Need Custom meal as per your own taste bud? We accept order accordingly',
    },
    {
      title: 'Takeaway available',
      image: Balcony,
      description:
        'You can also take food from our doorstep',
    },
    {
      title: 'Halwa Hunt',
      image: Balcony,
      description:
        'Dear Halwa lovers, we make fresh homemade halwa customizable to your preferences - Beetroot, Bread, carrot, pumpkin and we also cater for bulk order.',
    },
  ];
  return (
    <div>
      <Head>
        <title>Areas We serve</title>
        <meta
          name="description"
          content="Monthly / Weekly Meal subscription Plan | Party Orders | Sweet /Halwa orders undertaken | "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="relative">
        <Image
          src={Residential}
          alt="Hero Image"
          className="w-full h-72 brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            <h1 className="text-4xl text-center font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Welcome to Company Name LLC
            </h1>
            <p className="text-xl text-center leading-normal text-white font-semibold lg:text-xl xl:text-2xl dark:text-gray-300">
              Lorem Ipsum Dollar sit Lorem Ipsum Dollar sit Lorem Ipsum Dollar
              sit Lorem Ipsum Dollar sit
            </p>
          </div>
        </div>
      </div>
      <SectionTitle pretitle="Our Services" title="Checkout our service list!">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Container>
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-1 gap-6 rounded-md">
          {services.map((i) => (
            <div className="p-5 shadow-xl border-2 text-center" key={i.title}>
              <Image src={i.image} alt={i.title} className="w-full h-auto" />
              <h3 className="py-5 text-sm font-bold tracking-wider text-indigo-600 uppercase">
                {i.title}
              </h3>
              <hr />
              <p className="max-w-2xl pt-4 pb-8 text-lg leading-normal text-gray-800 lg:text-xl xl:text-xl dark:text-gray-300">
                {i.description}
              </p>
              <Link
                href="/Contact"
                className="p-4 text-lg font-medium text-center text-white bg-indigo-600 focus:bg-indigo-400 border-indigo-600 focus:border-indigo-400 border-4  rounded-md"
              >
                Request Free Quote
              </Link>
            </div>
          ))}
        </div>
      </Container>
      <Cta />
      <Footer />
    </div>
  );
}
