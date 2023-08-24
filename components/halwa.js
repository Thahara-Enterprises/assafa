import React from 'react';
import Footer from '../components/footer';
import Balcony from '../public/img/contracting/Balcony.jpg';

import Image from 'next/image';
import Container from '../components/container';
import Navbar from '../components/navbar';
import Head from 'next/head';
import Cta from '../components/cta';
import Residential from '../public/img/contracting/residential.jpg';
import SectionTitle from '../components/sectionTitle';
import Link from 'next/link';

export default function Halwa() {
  const services = [
    {
      title: 'Gajar Halwa (Carrot Halwa)',
      image: Balcony,
      price: '₹ 666/- per kg',
      description: 'We do orders for Marriage and other functions',
    },
    {
      title: 'Suji Halwa (Semolina Halwa)',
      image: Balcony,
      price: '₹ 666/- per kg',
      description:
        'Free delivery available for certain areas while for rest of the areas, delivery charges applies',
    },
    {
      title: 'Badam Halwa (Almond Halwa)',
      image: Balcony,
      price: '₹ 666/- per kg',
      description:
        'Need Custom meal as per your own taste bud? We accept order accordingly',
    },
    {
      title: 'Kaju Halwa (Cashew Nut Halwa)',
      image: Balcony,
      price: '₹ 666/- per kg',
      description: 'You can also take food from our doorstep',
    },
    {
      title: 'Baklava',
      image: Balcony,
      price: '₹ 666/- per kg',
      description:
        'Dear Halwa lovers, we make fresh homemade halwa customizable to your preferences - Beetroot, Bread, carrot, pumpkin and we also cater for bulk order.',
    },
    {
      title: 'Pistachio Halwa',
      image: Balcony,
      price: '₹ 666/- per kg',
      description:
        'Dear Halwa lovers, we make fresh homemade halwa customizable to your preferences - Beetroot, Bread, carrot, pumpkin and we also cater for bulk order.',
    },
    {
      title: 'Coconut Halwa',
      image: Balcony,
      price: '₹ 666/- per kg',
      description:
        'Dear Halwa lovers, we make fresh homemade halwa customizable to your preferences - Beetroot, Bread, carrot, pumpkin and we also cater for bulk order.',
    },
    {
      title: 'Any Halwa based on your Preferences',
      image: Balcony,
      price: '₹ 666/- per kg',
      description:
        'Dear Halwa lovers, we make fresh homemade halwa customizable to your preferences - Beetroot, Bread, carrot, pumpkin and we also cater for bulk order.',
    },
  ];
  return (
    <div>
      <Container>
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-1 gap-6 rounded-md">
          {services.map((i) => (
            <div className="p-5 shadow-xl border-2 text-center" key={i.title}>
              <Image src={i.image} alt={i.title} className="w-full h-auto" />
              <h3 className="py-5 text-sm font-bold tracking-wider text-accent uppercase">
                {i.title}
              </h3>
              <p className="py-5 text-sm text-gray-600 tracking-wider uppercase">
                {i.price}
              </p>
              <hr />
              <p className="max-w-2xl pt-4 pb-8 text-lg leading-normal text-gray-800 lg:text-xl xl:text-xl dark:text-gray-300">
                {i.description}
              </p>
              <a href="tel:+919600052742">
                <button className="bg-complementary text-white font-semibold py-2 px-4 rounded-full mt-6">
                  Call Now
                </button>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
