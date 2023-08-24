import React from 'react'
import Container from './container';
import Image from 'next/image';

export default function SignatureDish() {
  const services = [
    {
      title: 'Gajar Halwa (Carrot Halwa)',
      image: Balcony,
      description: 'We do orders for Marriage and other functions',
    },
    {
      title: 'Suji Halwa (Semolina Halwa)',
      image: Balcony,
      description:
        'Free delivery available for certain areas while for rest of the areas, delivery charges applies',
    },
    {
      title: 'Badam Halwa (Almond Halwa)',
      image: Balcony,
      description:
        'Need Custom meal as per your own taste bud? We accept order accordingly',
    },
    {
      title: 'Kaju Halwa (Cashew Nut Halwa)',
      image: Balcony,
      description: 'You can also take food from our doorstep',
    },
    {
      title: 'Baklava',
      image: Balcony,
      description:
        'Dear Halwa lovers, we make fresh homemade halwa customizable to your preferences - Beetroot, Bread, carrot, pumpkin and we also cater for bulk order.',
    },
    {
      title: 'Pistachio Halwa',
      image: Balcony,
      description:
        'Dear Halwa lovers, we make fresh homemade halwa customizable to your preferences - Beetroot, Bread, carrot, pumpkin and we also cater for bulk order.',
    },
    {
      title: 'Coconut Halwa',
      image: Balcony,
      description:
        'Dear Halwa lovers, we make fresh homemade halwa customizable to your preferences - Beetroot, Bread, carrot, pumpkin and we also cater for bulk order.',
    },
    {
      title: 'Any Halwa based on your Preferences',
      image: Balcony,
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
              <h3 className="py-5 text-sm font-bold tracking-wider text-indigo-600 uppercase">
                {i.title}
              </h3>
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

