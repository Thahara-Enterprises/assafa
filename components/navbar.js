import Link from 'next/link';
import ThemeChanger from './DarkSwitch';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';

const Navbar = () => {
  const navigation = [
    {
      item: 'Home',
      href: '/',
    },
    {
      item: 'Meal Subscription',
      href: '/meal-subscription',
    },
    {
      item: 'Halwa corner',
      href: '/halwa-corner',
    },
    {
      item: 'Party Orders',
      href: '/party-order',
    },
    {
      item: 'Become a chef',
      href: '/become-a-chef',
    },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between lg:justify-between p-2">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <Image
                    src="/img/favicon.ico"
                    alt="home food delivery chennai"
                    width="32"
                    height="32"
                  />
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-accent rounded-md lg:hidden hover:underline hover:text-primary focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((i) => (
                      <Link
                        key={i.item}
                        href={i.href}
                        className="w-full px-4 py-2 -ml-4 text-accent rounded-md dark:text-gray-300 hover:text-primary hover:underline focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                      >
                        {i.item}
                      </Link>
                    ))}
                    <Link
                      href="#requestquote"
                      className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                    >
                      Today&apos;s Hot Meal
                    </Link>
                    <Link
                      href="#requestquote"
                      className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                    >
                      Meal Subscription
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={menu.href}
                  className="inline-block px-4 py-2 text-lg font-normal text-accent no-underline rounded-md dark:text-gray-200 hover:text-primary hover:underline focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu.item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link
            href="/todays-menu-update"
            className="px-6 py-2 text-white bg-accent rounded-md md:ml-5"
          >
            Today&apos;s Hot Meal
          </Link>
          <Link
            href="/meal-subscription"
            className="px-6 py-2 text-white bg-accent rounded-md md:ml-5"
          >
            Meal Subscription
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
