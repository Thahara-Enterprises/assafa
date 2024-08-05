import Link from 'next/link'

export default function MealSubscription() {
  return (
    <div>
      <div className="lg:mx-40 grid lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-6 lg:p-6 md:p-2 sm:p-2 xs:p-2 rounded-md ">
        <div className="p-3 w-full border-2 rounded-md shadow-md bg-secondary">
          <div className="lg:text-5xl text-center sm:text-3xl xs:text-lg font-bold text-primary tracking-wider mb-2 uppercase">
            Lunch Menu
          </div>
          <div className="mt-6 uppercase text-accent">Monday (05-02-2024)</div>
          <hr />
          <ul className="text-white text-base">
            <li>
              <span className="text-gray-400">Main Course: </span>
              <span className="text-complementary2 uppercase font-bold">
                Chicken tikka masala
              </span>

              <br />
              <span className="text-gray-400">Side dish: </span>
              <span className="text-complementary2 uppercase font-bold">
                White rice
              </span>

              <br />

              <span className="text-gray-400 ">Extras: </span>
              <span className="text-complementary2 uppercase font-bold">
                Poriyal
              </span>
              <br />
            </li>
          </ul>
          <div className="mt-6 uppercase text-accent">Tuesday (06-02-2024)</div>
          <hr />
          <ul className="text-white text-base">
            <li>
              <span className="text-gray-400">Main Course: </span>
              <span className="text-complementary2 uppercase font-bold">
                Mutton Keema Mutter dal tadka
              </span>
              <br />
              <span className="text-gray-400">Side Dish: </span>
              <span className="text-complementary2 uppercase font-bold">
                White Rice
              </span>
              <br />
            </li>
          </ul>
          <div className="mt-6 uppercase text-accent">
            Wednesday (07-02-2024)
          </div>
          <hr />
          <ul className="text-white text-base">
            <li>
              <span className="text-gray-400">Main Course: </span>
              <span className="text-complementary2 uppercase font-bold">
                Fish fry, Fish gravy
              </span>
              <br />
              <span className="text-gray-400">Side Dish: </span>
              <span className="text-complementary2 uppercase font-bold">
                White rice
              </span>
              <br />
              <span className="text-gray-400">Extras: </span>
              <span className="text-complementary2 uppercase font-bold">
                Poriyal
              </span>
              <br />
            </li>
          </ul>
          <div className="mt-6 uppercase text-accent">
            Thursday (08-02-2024)
          </div>
          <hr />
          <ul className="text-white text-base">
            <li>
              <span className="text-gray-400">Main Course: </span>
              <span className="text-complementary2 uppercase font-bold">
                Squid Capsicum, Pepper rasam
              </span>
              <br />
              <span className="text-gray-400">Side Dish: </span>
              <span className="text-complementary2 uppercase font-bold">
                White Rice
              </span>
              <br />
            </li>
          </ul>
          <div className="mt-6 uppercase text-accent">Friday (09-02-2024)</div>
          <hr />
          <ul className="text-white text-base">
            <li>
              <span className="text-gray-400">Main Course: </span>
              <span className="text-complementary2 uppercase font-bold">
                Mutton Salna & Dhalcha
              </span>
              <br />
              <span className="text-gray-400">Side Dish: </span>
              <span className="text-complementary2 uppercase font-bold">
                Bahara Rice
              </span>
              <br />
            </li>
          </ul>
          <div className="mt-6 uppercase text-accent">
            Saturday (10-02-2024)
          </div>
          <hr />
          <ul className="text-white text-base">
            <li>
              <span className="text-gray-400">Main Course: </span>
              <span className="text-complementary2 uppercase font-bold">
                Boti gravy, Rasam
              </span>
              <br />
              <span className="text-gray-400">Side Dish: </span>
              <span className="text-complementary2 uppercase font-bold">
                White Rice
              </span>
              <br />
            </li>
          </ul>
          <div className="mt-6 uppercase text-accent">Sunday (11-02-2024)</div>
          <hr />
          <ul className="text-white text-base">
            <li>
              <br />
              <span className="text-gray-400">Main Dish: </span>
              <span className="text-complementary2 uppercase font-bold">
                Chicken Kabsa
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
          <div className="lg:text-5xl text-center sm:text-3xl xs:text-lg font-bold text-primary tracking-wider mb-2 uppercase">
            Dinner Menu
          </div>
          <div>
            <div className="mt-6 uppercase text-accent">
              Monday (05-02-2024)
            </div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Chicken Tikka masala
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Ghee phulka
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent">
              Tuesday (06-02-2024)
            </div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Mutton keema Mutter dal tadka
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Ghee Phulka
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent">
              Wednesday (07-02-2024)
            </div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Fish gravy
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Ghee phulka
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent ">
              Thursday (08-02-2024)
            </div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Squid capsicum curry
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Ghee phulka
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent">
              Friday (09-02-2024)
            </div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Mutton Salna
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Ghee Phulka
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent">
              Saturday (10-02-2024)
            </div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Mutton Paya
                </span>
                <br />
                <span className="text-gray-400">Side Dish: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Ghee phulka
                </span>
                <br />
              </li>
            </ul>
            <div className="mt-6 uppercase text-accent">
              Sunday (11-02-2024)
            </div>
            <hr />
            <ul className="text-white text-base">
              <li>
                <span className="text-gray-400">Main Course: </span>
                <span className="text-complementary2 uppercase font-bold">
                  Chicken Murthabak or Mutton murthabak
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
        /*Ramadan menu */
        <Container>
          <h1 className="sm:text-xl text-center font-bold leading-snug tracking-tight text-complementary lg:text-4xl lg:leading-tight dark:text-white">
            March Meal Plan Subscription - Monthly, Weekly, Daily plan in
            Chennai with Delivery
          </h1>

          <SectionTitle
            id="7daymeal"
            pretitle="7 days Meal Plan subscription menus"
            title="May meal subscription Menu"
          ></SectionTitle>

          <div className="lg:mx-40 grid lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-6 lg:p-6 md:p-2 sm:p-2 xs:p-2 rounded-md ">
            <div className="p-3 w-full border-2 rounded-md shadow-md bg-secondary">
              <div className="lg:text-5xl text-center sm:text-3xl xs:text-lg font-bold text-primary tracking-wider mb-2 uppercase">
                Iftar / Lunch Menu
              </div>
              <hr />
              <ul className="text-white text-base">
                <li>
                  <span className="text-complementary2 uppercase font-bold">
                    <span className=" text-accent">Common combo :</span> Kanjee
                    + Kadal Paasi(china grass) + Juice + Fruits
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className="text-complementary2 uppercase font-bold">
                    <span className=" text-accent">1. </span>Common combo +
                    Zeera rice , Butter Chicken + Falafil + Mint chutney
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className="text-complementary2 uppercase font-bold">
                    <span className=" text-accent">2. </span>Common combo +
                    Mutter Pulao + Salsa + Tikka roll + Curd chutney
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className="text-complementary2 uppercase font-bold">
                    <span className=" text-accent">3. </span>Common Combo +
                    Noodles + Sauce + Cauliflower pakoda + Tamarind chutney
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className="text-complementary2 uppercase font-bold">
                    <span className=" text-accent">4. </span>Common Combo + Ghee
                    pulka + Pepper chicken + Vadai + chutney
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className="text-complementary2 uppercase font-bold">
                    <span className=" text-accent">5. </span> Common Combo +
                    Murthabak + Mayonaise + Chicken popcorn + Tomato sauce
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className="text-complementary2 uppercase font-bold">
                    <span className=" text-accent">6. </span> Common Combo +
                    Prawn Noodles + Coconut shrimp + Tomato sauce
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className="text-complementary2 uppercase font-bold">
                    <span className=" text-accent">7. </span> Common Combo +
                    Afghani Pulao + Salsa + Samosa + Tamarind and Mint chutney
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className="text-complementary2 uppercase font-bold">
                    <span className=" text-accent">8. </span> Common Combo +
                    Chicken Mandi + Mayonise + Salsa + Paruppu Vadai + Mint
                    chutney
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className="text-complementary2 uppercase font-bold">
                    <span className=" text-accent">9. </span> Common Combo +
                    Chicken biriyani + Raita + Nuggets + Sauce
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className="text-complementary2 uppercase font-bold">
                    <span className=" text-accent">10. </span> Common Combo +
                    White sauce noodles + Small burger (2 pcs) + Sauce
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className="text-complementary2 uppercase font-bold">
                    <span className=" text-accent">11. </span> Common Combo +
                    Dal Pulao + Chettinad chicken + Cheese ball
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className="text-complementary2 uppercase font-bold">
                    <span className=" text-accent">12. </span> Common Combo +
                    Spaghetti + Hariyali tikka roll + chutney
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className="text-complementary2 uppercase font-bold">
                    <span className=" text-accent">13. </span> Common Combo +
                    Ghee Rice + Dum Aloo + Potato balls + Sauce
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className="text-complementary2 uppercase font-bold">
                    <span className=" text-accent">14. </span> Common Combo +
                    Veg fried rice + Gobi Manchurian + Chicken Pakoda
                  </span>
                  <hr />
                  <br />
                </li>
                <li>
                  <span className="text-complementary2 uppercase font-bold">
                    <span className=" text-accent">15. </span> Common Combo +
                    Zeera rice + Chicken Tikka Masala + Chicken Culet
                  </span>
                  <hr />
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
              <div className="lg:text-5xl text-center sm:text-3xl xs:text-lg font-bold text-primary tracking-wider mb-2 uppercase">
                Sahar / Dinner Menu
              </div>
              <div>
                <hr />
                <ul className="text-white text-base">
                  <li>
                    <span className="text-complementary2 uppercase font-bold">
                      <span className=" text-accent">Common combo :</span> White
                      rice + Rasam + Appalam + Curd
                    </span>
                    <hr />
                    <br />
                  </li>
                  <li>
                    <span className="text-complementary2 uppercase font-bold">
                      <span className=" text-accent">Day 1. </span> Common Combo
                      + Chicken curry + Corn chips
                    </span>
                    <hr />
                    <br />
                  </li>
                  <li>
                    <span className="text-complementary2 uppercase font-bold">
                      <span className=" text-accent">Day 2. </span> Common Combo
                      + Chicken Salna + Poriyal
                    </span>
                    <hr />
                    <br />
                  </li>
                  <li>
                    <span className="text-complementary2 uppercase font-bold">
                      <span className=" text-accent">Day 3. </span> Common Combo
                      + Sambar + Prawn Curry
                    </span>
                    <hr />
                    <br />
                  </li>
                  <li>
                    <span className="text-complementary2 uppercase font-bold">
                      <span className=" text-accent">Day 4. </span> Common Combo
                      + Drumsick Dal + Mutton Culet
                    </span>
                    <hr />
                    <br />
                  </li>
                  <li>
                    <span className="text-complementary2 uppercase font-bold">
                      <span className=" text-accent">Day 5. </span> Common Combo
                      + Mutton Keema dal + Poriyal
                    </span>
                    <hr />
                    <br />
                  </li>
                  <li>
                    <span className="text-complementary2 uppercase font-bold">
                      <span className=" text-accent">Day 6. </span> Common Combo
                      + Brinjal kulambu + Mutton Liver
                    </span>
                    <hr />
                    <br />
                  </li>
                  <li>
                    <span className="text-complementary2 uppercase font-bold">
                      <span className=" text-accent">Day 7. </span> Common Combo
                      + Prawn sepang kilangu + Poriyal
                    </span>
                    <hr />
                    <br />
                  </li>
                </ul>
                <hr />
                <Link href="/meal-subscription-order">
                  <button className="bg-complementary text-white font-semibold py-2 px-4 rounded-full mt-6 items-end">
                    Subscribe Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
