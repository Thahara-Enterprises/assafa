import React from 'react';
import Container from '../components/container';
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

export default function Bene() {
  const benefit = [
    {
      title: 'Fresh Homemade Quality',
      desc: 'Feel the authenticity of South indian, North indian and Middle eastern food in our hands. Subscribe our Weekly/ Monthly plans now.',
      icon: <FontAwesomeIcon icon={faBowlFood} size="2x" />,
    },
    {
      title: 'Authentic Flavors',
      desc: 'Feel the authenticity of South indian, North indian and Middle eastern food in our hands. Subscribe our Weekly/ Monthly plans now.',
      icon: <FontAwesomeIcon icon={faBowlFood} size="2x" />,
    },
    {
      title: 'Customization',
      desc: 'There is no boundaries for flavors, you can customize the food according to your taste buds. Subscribe to Our Monthly plans and Give your customization by contacting us',
      icon: <FontAwesomeIcon icon={faSlidersH} size="2x" />,
    },

    {
      title: 'Pregnancy Friendly diets',
      desc: 'Your diet during pregnancy impacts your babys future health. Make each bite count with our Monthly/Weekly subscription plans',
      icon: <FontAwesomeIcon icon={faHeartbeat} size="3x" />,
    },
    {
      title: 'Family Friendly Options',
      desc: 'Your diet during pregnancy impacts your babys future health. Make each bite count with our Monthly/Weekly subscription plans',
      icon: <FontAwesomeIcon icon={faUsers} size="3x" />,
    },

    {
      title: 'We Care our senior citizens',
      desc: 'Growing old is mandatory, but growing up with care is optional. We dont just cook food, we spice it up with love. Subscribe to our monthly plans and let your days bloom with love',
      icon: <FontAwesomeIcon icon={faUserFriends} size="3x" />,
    },
    {
      title: 'Bachelor friendly Food',
      desc: 'Now you dont have to go back to home for delicious home made food. Subscribe to our Monthly plan. And Yes! there is no compromise.',
      icon: <FontAwesomeIcon icon={faUser} size="3x" />,
    },
  ];
  return (
    <>
      <Container>
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-1 gap-6 rounded-md">
          {benefit.map((i) => (
            <div className="p-5 shadow-xl border-2 text-center" key={i.title}>
              {i.icon}
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
    </>
  );
}
