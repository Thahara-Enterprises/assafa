import React from 'react'
import Image from 'next/image'
import Container from '../components/container'
import CarrotHalwa from '../public/img/halwa/carrot-halwa.jpg'
import BeetrootHalwa from '../public/img/halwa/beetroot-halwa.jpg'
import BreadHalwa from '../public/img/halwa/bread-halwa.jpg'
import AnyHalwa from '../public/img/halwa/any-halwa.jpg'
import CashewNut from '../public/img/halwa/Cashew-Nut-Halwa.jpg'
import BadamHalwa from '../public/img/halwa/badam-halwa.jpg'
import PistachioHalwa from '../public/img/halwa/pistachio-halwa.jpg'
import CoconutHalwa from '../public/img/halwa/coconut-halwa.jpg'
import Semolina from '../public/img/halwa/semolina-kesari-halwa.jpg'

export default function Biriyani() {
  const services = [
    {
      title: 'Chicken Biriyani',
      image: CarrotHalwa,
      price: '₹ 2000/- per kg',
    },
    {
      title: 'Mutton Biriyani',
      image: CoconutHalwa,
      price: '₹ 666/- per kg',
    },
    {
      title: 'Bread Halwa',
      image: BreadHalwa,
      price: '₹ 666/- per kg',
    },
    {
      title: 'Beetroot Halwa',
      image: BeetrootHalwa,
      price: '₹ 666/- per kg',
    },
  ]
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
  )
}
