import React from 'react';
import Container from './container';

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal text-secondary">
              Share a real <Mark>testimonial</Mark>
              that hits some of your benefits from one of your popular customer.
            </p>

            <Avatar name="Sarah Steiner" title="VP Sales at Google" />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal text-secondary">
              Make sure you only pick the <Mark>right sentence</Mark>
              to keep it short and simple.
            </p>

            <Avatar name="Dylan Ambrose" title="Lead marketer at Netflix" />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal text-secondary">
              This is an <Mark>awesome</Mark> landing page template I&apos;ve
              seen. I would use this for anything.
            </p>

            <Avatar name="Gabrielle Winn" title="Co-founder of Acme Inc" />
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
        <div className="text-white">{props.title}</div>
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
