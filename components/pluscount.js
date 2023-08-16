import React, { Component } from 'react';
import CountUp from 'react-countup';
import Mosque from '../public/img/contracting/residential.jpg';
import Image from 'next/image';
class Countup extends Component {
  state = {
    visibility: false,
  };

  render() {
    return (
      <div>
        <div className="grid lg:grid-cols-4  text-center justify-center sm:grid-cols-2 gap-5 mt-8 mx-auto px-10 md:justify-around">
          <div className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            <CountUp end={88} duration={50} />+
            <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
              Happy Customers
            </div>
          </div>
          <div className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            <CountUp end={5} duration={50} />+
            <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
              Staff Members
            </div>
          </div>
          <div className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            <CountUp end={25} duration={50} />+
            <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
              Year of Experiences
            </div>
          </div>
          <div className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            <CountUp end={50} duration={50} />+
            <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
              Completed Orders
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Countup;
