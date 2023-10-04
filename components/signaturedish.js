import React from 'react';
import Container from './container';
import Image from 'next/image';
import BhindiMasala from '../public/img/signature/bhindimasalafry.jpeg';
import ButterChicken from '../public/img/signature/butter-chicken.jpg';
import ChickenMandi from '../public/img/signature/chickenmandi.jpeg';
import SofianiBiriyani from '../public/img/signature/sofiyanibiriyani.jpeg';
import ChickenWhiteKurma from '../public/img/signature/chickenwhitekurma.jpeg';
import Crab from '../public/img/signature/crab.jpeg';
import Squid from '../public/img/signature/squid.jpg';
import DalMuttonSalna from '../public/img/signature/dalmuttoncheema.jpeg';
import PotatoCheeseBall from '../public/img/signature/potatocheeseball.jpeg';
import PrawnRoast from '../public/img/signature/Prawnroast.webp';
import SpicyFishCurry from '../public/img/signature/spicy-fish-curry.jpeg';
import Roti from '../public/img/signature/roti.jpeg';

import Slider from 'react-slick';
import Link from 'next/link';

export default function SignatureDish() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const services = [
    {
      title: 'Chicken White Biriyani',
      image: SofianiBiriyani,
      description: 'We do orders for Marriage and other functions',
    },
    {
      title: 'Chicken Mandi',
      image: ChickenMandi,
      description:
        'Free delivery available for certain areas while for rest of the areas, delivery charges applies',
    },
    {
      title: 'Spicy Fish Curry',
      image: SpicyFishCurry,
      description:
        'Need Custom meal as per your own taste bud? We accept order accordingly',
    },
    {
      title: 'Butter Chicken',
      image: ButterChicken,
      description: 'You can also take food from our doorstep',
    },
    {
      title: 'Prawn Roast',
      image: PrawnRoast,
      description:
        'Dear Halwa lovers, we make fresh homemade halwa customizable to your preferences - Beetroot, Bread, carrot, pumpkin and we also cater for bulk order.',
    },
    {
      title: 'Roti',
      image: Roti,
      description:
        'Dear Halwa lovers, we make fresh homemade halwa customizable to your preferences - Beetroot, Bread, carrot, pumpkin and we also cater for bulk order.',
    },
    {
      title: 'Bhindi Masala Fry',
      image: BhindiMasala,
      description:
        'Dear Halwa lovers, we make fresh homemade halwa customizable to your preferences - Beetroot, Bread, carrot, pumpkin and we also cater for bulk order.',
    },
    {
      title: 'Dal Mutton Cheema',
      image: DalMuttonSalna,
      description:
        'Dear Halwa lovers, we make fresh homemade halwa customizable to your preferences - Beetroot, Bread, carrot, pumpkin and we also cater for bulk order.',
    },
    {
      title: 'Squid Fry',
      image: Squid,
      description:
        'Dear Halwa lovers, we make fresh homemade halwa customizable to your preferences - Beetroot, Bread, carrot, pumpkin and we also cater for bulk order.',
    },
    {
      title: 'Potato Cheese Balls',
      image: PotatoCheeseBall,
      description:
        'Dear Halwa lovers, we make fresh homemade halwa customizable to your preferences - Beetroot, Bread, carrot, pumpkin and we also cater for bulk order.',
    },
    {
      title: 'Chicken White Kurma',
      image: ChickenWhiteKurma,
      description:
        'Dear Halwa lovers, we make fresh homemade halwa customizable to your preferences - Beetroot, Bread, carrot, pumpkin and we also cater for bulk order.',
    },
    {
      title: 'Crab Curry',
      image: Crab,
      description:
        'Dear Halwa lovers, we make fresh homemade halwa customizable to your preferences - Beetroot, Bread, carrot, pumpkin and we also cater for bulk order.',
    },
  ];
  return (
    <div>
      <Container>
        <Slider {...settings} className="m-0">
          {services.map((i) => (
            <div className="p-3 text-center" key={i.title}>
              <Image src={i.image} alt={i.title} className="rounded-2xl " />
              <h3 className="py-5 text-sm font-bold tracking-wider text-indigo-600 uppercase h-16">
                {i.title}
              </h3>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
}
