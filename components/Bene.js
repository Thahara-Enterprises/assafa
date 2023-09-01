import React from 'react';
import Container from './container';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHandSparkles,
  faBowlFood,
  faSlidersH,
  faHeartbeat,
  faUsers,
  faUserFriends,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
library.add(
  faHandSparkles,
  faBowlFood,
  faHeartbeat,
  faUsers,
  faUserFriends,
  faUsers
);
import Bachelors from '../public/img/icons/bachelors.png';
import CookingPot from '../public/img/icons/cookingpot.png';
import Customisation from '../public/img/icons/customisation.png';
import Family from '../public/img/icons/family.png';
import FreshFood from '../public/img/icons/freshfood.png';
import Pregnancy from '../public/img/icons/pregnancy.png';
import SeniorCitizen from '../public/img/icons/seniorcitizen.png';
import KetoFriendly2 from '../public/img/icons/keto-friendly2.png';
import Slider from 'react-slick';

export default function Bene() {
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const benefit = [
    {
      title: 'Keto Friendly',
      desc: 'Keto friendly foods help your body to easily break the foods into ketones which is a key way for weight loss and helps your body to keep in shape. 70% of our dinner menu are keto friendly. Subscribe to Our dinner Meal Weekly and Montly and kickstart your weight loss journey here.',
      icon: <FontAwesomeIcon icon={faBowlFood} size="2x" />,
      image: KetoFriendly2,
    },
    {
      title: 'Fresh Homemade Quality',
      desc: 'Feel the authenticity of South indian, North indian and Middle eastern food in our hands. Subscribe our Weekly/ Monthly plans now.',
      icon: <FontAwesomeIcon icon={faBowlFood} size="2x" />,
      image: FreshFood,
    },
    {
      title: 'Authentic Flavors',
      desc: 'Feel the authenticity of South indian, North indian and Middle eastern food in our hands. Subscribe our Weekly/ Monthly plans now.',
      icon: <FontAwesomeIcon icon={faBowlFood} size="2x" />,
      image: CookingPot,
    },
    {
      title: 'Customization',
      desc: 'There is no boundaries for flavors, you can customize the food according to your taste buds. Subscribe to Our Monthly plans and Give your customization by contacting us',
      icon: <FontAwesomeIcon icon={faSlidersH} size="2x" />,
      image: Customisation,
    },

    {
      title: 'Pregnancy Friendly diets',
      desc: 'Your diet during pregnancy impacts your babys future health. Make each bite count with our Monthly/Weekly subscription plans',
      icon: <FontAwesomeIcon icon={faHeartbeat} size="3x" />,
      image: Pregnancy,
    },
    {
      title: 'Family Friendly Options',
      desc: 'Your diet during pregnancy impacts your babys future health. Make each bite count with our Monthly/Weekly subscription plans',
      icon: <FontAwesomeIcon icon={faUsers} size="3x" />,
      image: Family,
    },

    {
      title: 'We Care our senior citizens',
      desc: 'Growing old is mandatory, but growing up with care is optional. We dont just cook food, we spice it up with love. Subscribe to our monthly plans and let your days bloom with love',
      icon: <FontAwesomeIcon icon={faUserFriends} size="3x" />,
      image: SeniorCitizen,
    },
    {
      title: 'Bachelor friendly Food',
      desc: 'Now you dont have to go back to home for delicious home made food. Subscribe to our Monthly plan. And Yes! there is no compromise.',
      icon: <FontAwesomeIcon icon={faUser} size="3x" />,
      image: Bachelors,
    },
  ];
  return (
    <>
      <Container>
        <Slider {...settings} className="m-0">
          {benefit.map((i) => (
            <div
              key={i.title}
              className="max-w-2xl mt-3 text-3xl text-center tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white"
            >
              <div className="flex justify-center items-center">
                <Image
                  src={i.image}
                  width="75"
                  height="75"
                  alt={i.title}
                  placeholder="blur"
                />
              </div>
              <h3 className="py-5 text-base font-bold tracking-wider text-accent uppercase">
                {i.title}
              </h3>
              <p className="max-w-2xl pt-2 pb-5 text-base leading-normal text-gray-500  dark:text-gray-300">
                {i.desc}
              </p>
            </div>
          ))}
        </Slider>
      </Container>
    </>
  );
}
