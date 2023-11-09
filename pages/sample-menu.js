import Link from 'next/link';
import React from 'react'
import SectionTitle from '../components/sectionTitle';

export default function SampleMenu() {
  return (
    <div>
      <SectionTitle
        pretitle="Sample Meal Plan"
        title="Check below what does a Assafa Cloud Kitchen's Typical Plan Looks like"
      ></SectionTitle>

      <div className="lg:mx-40 grid lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-6 lg:p-6 md:p-2 sm:p-2 xs:p-2 rounded-md ">
        <div className="p-3 w-full border-2 rounded-md shadow-md bg-secondary">
          <div className="text-2xl sm:text-lg xs:text-lg font-bold text-primary tracking-wider mb-2 uppercase">
            Lunch Menu
          </div>
          <div className="mt-6 uppercase text-accent">Monday</div>
          <hr />
          <ul className="text-white text-base">
            <li>
              <span className="text-gray-400">Main Course: </span>
              <span className="text-complementary2 uppercase font-bold">
                Nethili Gravy & Dal Rasam
              </span>
              <br />
              <span className="text-gray-400">Side Dish: </span>
              <span className="text-complementary2 uppercase font-bold">
                White Rice
              </span>
              <br />
              <span className="text-gray-400 ">Extras: </span>
              <span className="text-complementary2 uppercase font-bold">
                Kadamba Poriyal
              </span>
              <br />
            </li>
          </ul>
          <div className="mt-6 uppercase text-accent">Tuesday</div>
          <hr />
          <ul className="text-white text-base">
            <li>
              <span className="text-gray-400">Main Course: </span>
              <span className="text-complementary2 uppercase font-bold">
                Chettinad Chicken Ghee Roast
              </span>
              <br />
              <span className="text-gray-400">Side Dish: </span>
              <span className="text-complementary2 uppercase font-bold">
                Khichdi Rice
              </span>
              <br />
              <span className="text-gray-400 ">Extras: </span>
              <span className="text-complementary2 uppercase font-bold">
                Kadamba Poriyal
              </span>
              <br />
            </li>
          </ul>
          <div className="mt-6 uppercase text-accent">Wednesday</div>
          <hr />
          <ul className="text-white text-base">
            <li>
              <span className="text-gray-400">Main Course: </span>
              <span className="text-complementary2 uppercase font-bold">
                Fish Gravy & Sura Puttu
              </span>
              <br />
              <span className="text-gray-400">Side Dish: </span>
              <span className="text-complementary2 uppercase font-bold">
                White Rice
              </span>
              <br />
              <span className="text-gray-400 ">Extras: </span>
              <span className="text-complementary2 uppercase font-bold">
                Kadamba Poriyal
              </span>
              <br />
            </li>
          </ul>
          <div className="mt-6 uppercase text-accent">Thursday</div>
          <hr />
          <ul className="text-white text-base">
            <li>
              <span className="text-gray-400">Main Course: </span>
              <span className="text-complementary2 uppercase font-bold">
                Boti Gravy / Kodal salna
              </span>
              <br />
              <span className="text-gray-400">Side Dish: </span>
              <span className="text-complementary2 uppercase font-bold">
                White Rice
              </span>
              <br />
              <span className="text-gray-400 ">Extras: </span>
              <span className="text-complementary2 uppercase font-bold">
                Kadamba Poriyal
              </span>
              <br />
            </li>
          </ul>
          <div className="mt-6 uppercase text-accent">Friday</div>
          <hr />
          <ul className="text-white text-base">
            <li>
              <span className="text-gray-400">Main Course: </span>
              <span className="text-complementary2 uppercase font-bold">
                Chicken Kurma & Dhalcha
              </span>
              <br />
              <span className="text-gray-400">Side Dish: </span>
              <span className="text-complementary2 uppercase font-bold">
                Bahara Rice
              </span>
              <br />
            </li>
          </ul>
          <div className="mt-6 uppercase text-accent">Saturday</div>
          <hr />
          <ul className="text-white text-base">
            <li>
              <span className="text-gray-400">Main Course: </span>
              <span className="text-complementary2 uppercase font-bold">
                Mutton Liver / Eeral , Coconut Rasam
              </span>
              <br />
              <span className="text-gray-400">Side Dish: </span>
              <span className="text-complementary2 uppercase font-bold">
                White Rice
              </span>
              <br />
              <span className="text-gray-400 ">Extras: </span>
              <span className="text-complementary2 uppercase font-bold">
                Kadamba Poriyal
              </span>
              <br />
            </li>
          </ul>
          <div className="mt-6 uppercase text-accent">Sunday</div>
          <hr />
          <ul className="text-white text-base">
            <li>
              <br />
              <span className="text-gray-400">Side Dish: </span>
              <span className="text-complementary2 uppercase font-bold">
                Chicken Mandi
              </span>
              <br />
              <span className="text-gray-400">Extras: </span>
              <span className="text-complementary2 uppercase font-bold">
                Salsa
              </span>
              <br />
            </li>
          </ul>
          <Link href="/meal-subscription-order">
            <button className="bg-complementary text-white font-semibold py-2 px-4 rounded-full mt-6">
              Subscribe Now
            </button>
          </Link>
        </div>
        <div className="p-3 w-auto border-2 rounded-md shadow-md bg-secondary">
          <div className="text-2xl sm:text-lg xs:text-lg font-bold text-primary tracking-wider mb-2 uppercase">
            Dinner Menu
          </div>
          <div>
            <div className="mt-6 uppercase text-accent">Monday</div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Beef Chukka
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Roti
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent">Tuesday</div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Butter Chicken
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Roti
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent">Wednesday</div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Panneer Butter Masala
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Roti
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent ">Thursday</div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Pepper Chicken
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Roti
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent">Friday</div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Aatu Kal Paya
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Roti
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent">Saturday</div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Afghani Green Chicken
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Roti
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent">Sunday</div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Mutton Keema Masala
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Roti
                </span>
                <br />
              </li>
            </ul>
            <Link href="/meal-subscription-order">
              <button className="bg-complementary text-white font-semibold py-2 px-4 rounded-full mt-6 items-end">
                Subscribe Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
