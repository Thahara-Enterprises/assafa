import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick/lib/slider';
import CloudKitchenBanner from '../public/img/biriyanibanner.jpeg';

export default function HalwaHero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full mx-auto">
      <Slider {...settings}>
        <div className="bg-gray-200 flex items-center justify-center">
          <Image src={CloudKitchenBanner} alt="Hero Image" />
        </div>
        <div className="bg-gray-300 flex items-center justify-center">
          <Image src={CloudKitchenBanner} alt="Hero Image" />
        </div>
        <div className="bg-gray-400 flex items-center justify-center">
          <Image src={CloudKitchenBanner} alt="Hero Image" />
        </div>
        <div className="bg-gray-500 flex items-center justify-center">
          <Image src={CloudKitchenBanner} alt="Hero Image" />
        </div>
        <div className="bg-gray-600 flex items-center justify-center">
          <Image src={CloudKitchenBanner} alt="Hero Image" />
        </div>
      </Slider>
    </div>
  );
}
