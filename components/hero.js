import Container from './container';
import Image from 'next/image';
import CloudKitchenBanner from '../public/img/biriyanibanner.jpeg';
import CloudKitchen from '../public/img/cloud-kitchen.png';
import Link from 'next/link';

const Hero = () => {
  const userId = 123;
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 place-items-center">
          <Image src={CloudKitchenBanner} alt="Hero Image" />

          <div>
            <h1 className="sm:text-xl text-center font-bold leading-snug tracking-tight text-complementary lg:text-4xl lg:leading-tight dark:text-white">
              Think homemade food? Think Assafa Cloud kitchen
            </h1>
            <p className="sm:text-base text-center leading-normal text-secondary font-semibold lg:text-xl xl:text-2xl dark:text-gray-300 lg:mx-20 xs:mx-5 xl:mx-20">
              Culinary Engineering, Digitally Delicious - An Online Homemade
              food Cloud kitchen platform for Working couples, Senior citizens,
              Bachelors, Marriage orders and Our Foodie family of Assafa
              delicacy
            </p>
            <div className="flex flex-col sm:mx-4 items-center justify-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row my-8">
              <div>
                <span>
                  <Link
                    href="/meal-subscription"
                    className="px-8 lg:py-4 sm:px-6 sm:mx-3 sm:py-2 xs:mx-1 xs:py-2 lg:text-lg font-medium text-center text-white bg-accent focus:bg-accent border-accent focus:border-accent border-4 sm:border-2 rounded-md"
                  >
                    Meal Subscription Plans
                  </Link>
                </span>
                <span className="mx-3 xs:mx-0">
                  <Link
                    href="/todays-menu-update"
                    className="lg:mx-7 lg:px-8 lg:py-4  sm:mx-4 sm:px-4 xs:px-1 xs:px-1 lg:text-lg sm:text-base font-medium text-center border-accent border-4 rounded-md px-2"
                  >
                    View Today&apos;s Meal
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h6 className="mt-3 text-3xl font-bold leading-snug tracking-tight text-primary  lg:leading-tight lg:text-4xl dark:text-white">
              Who Are We
            </h6>
            <div className="text-lg font-bold tracking-wider text-complementary uppercase">
              Find us where Cooking with Passion and Love met an Unexpected
              Business Model
            </div>
            <div className="py-5 text-lg leading-normal text-gray-700 lg:text-lg xl:text-lg sm:text-base dark:text-gray-300">
              <ul className="list-disc">
                <li>
                  We give weekly and monthly subscription plans Check out{' '}
                  <Link href="/meal-subscription" className="text-accent">
                    here
                  </Link>
                </li>
                <li>
                  We cook only after order is placed. Check today&apos;s menu
                  <Link href="/meal-subscription" className="text-accent">
                    here
                  </Link>{' '}
                  and make sure to order on time
                </li>
                <li>
                  We cater South indian, North indian and Middle eastern food
                </li>
                <li>
                  We take orders for variety of traditional Halwa options like
                  dum karoot, beetroot halwa, bread halwa, omani halwa, see the
                  range of products{' '}
                  <Link
                    href="/halwa-corner"
                    target="_blank"
                    className="text-accent"
                  >
                    here
                  </Link>
                </li>
                <li>
                  We undertake Bulk orders for get togethers and party orders.
                  Get a call back from our experts{' '}
                  <Link
                    href="/party-order"
                    target="_blank"
                    className="text-accent"
                  >
                    here
                  </Link>
                </li>
                <li>
                  We take orders for variety of chai like ginger, Masala chai,
                  kashmiri chai, Sulaimani chai, see the range of products{' '}
                  <Link
                    href="/party-order"
                    target="_blank"
                    className="text-accent"
                  >
                    here
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/become-a-chef"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-accent rounded-md "
              >
                BECOME A CHEF
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={CloudKitchen}
              width="616"
              height="617"
              className={'object-cover'}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
