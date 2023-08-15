import Container from './container';
import Image from 'next/image';
import Apartment from '../public/img/contracting/apartment.jpg';
import Balcony from '../public/img/contracting/Balcony.jpg';
import Hotel from '../public/img/contracting/hotel.jpg';
import CarPark from '../public/img/contracting/carpark.jpg';
import Masjid from '../public/img/contracting/masjid.jpg';
import Residential from '../public/img/contracting/residential.jpg';

const WhatWeDo = () => {
  return (
    <Container>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
        <div>
          <Image
            src={Apartment}
            className="rounded-md"
            height={300}
            alt="apartment contracting in dubai"
          />
          <h3 className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
            Large Quantity Orders
          </h3>
        </div>
        <div>
          <Image
            src={CarPark}
            className="rounded-md"
            height={300}
            alt="apartment contracting in dubai"
          />
          <h3 className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
            Takeaway available
          </h3>
        </div>
        <div>
          <Image
            src={Masjid}
            className="rounded-md"
            height={300}
            alt="masjid contracting in dubai"
          />
          <h3 className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
            Delivery free within certain areas
          </h3>
        </div>
      </div>
    </Container>
  );
};

export default WhatWeDo;
