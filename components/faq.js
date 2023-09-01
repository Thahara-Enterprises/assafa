import React from 'react';
import Container from './container';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: 'What is a Homemade Food Cloud Kitchen?',
    answer: 'It is a kitchen unlike restaurant kitchen where the food tastes only like home made food. It has takeaway options and online order options.',
  },
  {
    question: 'How Does Ordering Work?',
    answer: 'You order the meal by submitting the form and you will get a confirmation mail and whatsapp message and meal is either delivered to you or you takeaway is available based on your preferences',
  },
  {
    question: 'Is Your Food Prepared Fresh?',
    answer:
      "Yes, we start to prepare only when order is placed. Literally means the food is made just for you.",
  },
  {
    question: 'Are Special Dietary Requirements Accommodated?',
    answer:
      "70% of our dinner menu are mostly keto friendly.",
  },
  {
    question: 'Are there a Delivery and Pickup Options?',
    answer:
      "Delivery is free around 5 km radius from cloud kitchen and rest of the place delivery charges may range from Rs 40 to Rs 100",
  },
  {
    question: 'How Soon Can I Get My Order?',
    answer:
      "We always make sure that orders are delivered on time.",
  },
  {
    question: 'Can I Customize My Order?',
    answer:
      "You cannot customize daily based order. But yes you can customize if you are meal plan subscriber.",
  },
  {
    question: 'What Payment Methods Are Accepted?',
    answer:
      "We accept GPay, PhonePe, Stripe pay",
  },
  {
    question: 'Can I Cancel or Modify an Order?',
    answer:
      "Yes you can cancel before the time constraints.",
  },
  {
    question: 'Do You Offer Subscription Plans?',
    answer:
      "Yes we give weekly and monthly subscription plans",
  },
  {
    question: 'How Do I Contact Customer Support?',
    answer:
      "Submit the form or Online chat or Call 9600052742 ",
  },
  {
    question: 'Do You Have Reviews or Testimonials?',
    answer:
      "Yes, Checkout the testimonials in our website or in our instagram Highlights",
  },
  {
    question: 'How Can I Partner with Your Cloud Kitchen?',
    answer:
      "By submitting your details on our 'become a partner' page, you get a confirmation message stating that you are a partner",
  },
];

export default Faq;
