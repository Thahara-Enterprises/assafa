import Link from "next/link";

export default function MealSubscription() {
    return (
        <div><div className="lg:mx-40 grid lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-6 lg:p-6 md:p-2 sm:p-2 xs:p-2 rounded-md ">
            <div className="p-3 w-full border-2 rounded-md shadow-md bg-secondary">
                <div className="lg:text-5xl text-center sm:text-3xl xs:text-lg font-bold text-primary tracking-wider mb-2 uppercase">
                    Lunch Menu
                </div>
                <div className="mt-6 uppercase text-accent">
                    Monday (05-02-2024)
                </div>
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
                <div className="mt-6 uppercase text-accent">
                    Tuesday (06-02-2024)
                </div>
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
                <div className="mt-6 uppercase text-accent">
                    Friday (09-02-2024)
                </div>
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
                <div className="mt-6 uppercase text-accent">
                    Sunday (11-02-2024)
                </div>
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
        </div></div>
    )
}