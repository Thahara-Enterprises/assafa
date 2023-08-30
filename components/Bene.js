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

export default function Bene() {
  const benefit = [
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
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-1 gap-6 rounded-md place-items-center items-center justify-center">
          {benefit.map((i) => (
            <div
              key={i.title}
              className="max-w-2xl mt-3 text-3xl text-center  font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white"
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
              <h3 className="py-5 text-xl font-bold tracking-wider text-accent uppercase">
                {i.title}
              </h3>
              <p className="max-w-2xl pt-4 pb-8 text-lg leading-normal text-gray-800 lg:text-base xl:text-base dark:text-gray-300">
                {i.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
