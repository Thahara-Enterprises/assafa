import React from 'react';
import Container from './container';

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-base leading-normal text-secondary">
              Mutton gravy was <Mark>very Delicious </Mark> with all the spices mixed with perfection, especially the minor touch of Potato in the gravy gave it an authentic South Tamil nadu taste.
            </p>

            <Avatar name="Shahul Hameed" title="Indira Nagar" />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-base leading-normal text-secondary">
               <Mark>Loved</Mark> the mandi. It was very Flavorful and Aromatic.
            </p>

            <Avatar name="Aysha Maryam" title="Mandaveli" />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-base leading-normal text-secondary">
              Maa Shaa Allah <Mark>White biriyani</Mark> was very delicious.
            </p>

            <Avatar name="Alimuddin" title="Royapettah" />
          </div>
        </div>
      </div>
    </Container>
  );
};

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full ">
        <div className="h-12 w-12 rounded-full bg-accent"></div>
      </div>
      <div>
        <div className="text-lg font-medium text-accent">{props.name}</div>
        <div className="text-black">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {' '}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{' '}
    </>
  );
}

export default Testimonials;
