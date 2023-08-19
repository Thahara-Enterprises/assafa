import Container from './container';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUtensils,
  faShoppingBag,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faUtensils, faShoppingBag);

const WhatWeDo = () => {
  return (
    <Container>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 place-items-center items-center  gap-4">
        <div className="max-w-2xl mt-3 text-3xl text-center font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          <FontAwesomeIcon
            icon="utensils"
            size="lg"
            className="text-complementary"
          />
          <div className="text-sm mt-3 font-bold tracking-wider text-indigo-600 uppercase">
            Large Quantity Orders
          </div>
        </div>
        <div className="max-w-2xl mt-3 text-3xl text-center font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          <FontAwesomeIcon
            icon="fa-solid fa-bag-shopping"
            size="lg"
            className="text-complementary"
          />
          <div className="text-sm mt-3 font-bold tracking-wider text-indigo-600 uppercase">
            Takeaway available
          </div>
        </div>

        <div className="max-w-2xl mt-3 text-3xl text-center font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          <FontAwesomeIcon
            icon="fa-solid fa-truck"
            size="lg"
            className="text-complementary"
          />
          <div className="text-sm mt-3 font-bold tracking-wider text-indigo-600 uppercase">
            Delivery free within certain areas
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhatWeDo;
