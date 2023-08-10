import Head from 'next/head';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import SectionTitle from '../components/sectionTitle';
import Form from '../components/form';
import { benefitOne } from '../components/data';
import WhatWeDo from '../components/whatWeDo';
import Benefits from '../components/benefits';
import Footer from '../components/footer';
import Testimonials from '../components/testimonials';
import Cta from '../components/cta';
import Faq from '../components/faq';
import Countup from '../components/pluscount';
import Pricing from '../components/pricing';
import MealPlan from '../components/mealPlan';
import Container from '../components/container';

const Home = ({ id, breakfast, lunch, dinner }) => {
  return (
    <div>
      <Head>
        <title>Assafa Delicacy</title>
        <meta
          name="description"
          content="Online Cloud kitchen for Working couples, Senior citizens, Bachelors and also or foodie"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Our Accompolishment"
        title="Real Acheivement takes hard roads to finish"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Countup />

      <SectionTitle pretitle="Company LLC Benefits" title="Why do you need us?">
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle>
      <Benefits data={benefitOne} />

      <SectionTitle
        pretitle="What we do"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <WhatWeDo />
      <SectionTitle
        pretitle="Today's Menu"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Container>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Breakfast</th>
              <th className="border border-gray-300 p-2">Lunch</th>
              <th className="border border-gray-300 p-2">Dinner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">{id}</td>
              <td className="border border-gray-300 p-2">{breakfast}</td>
              <td className="border border-gray-300 p-2">{lunch}</td>
              <td className="border border-gray-300 p-2">{dinner}</td>
            </tr>
          </tbody>
        </table>
      </Container>

      <SectionTitle
        pretitle="Submit to us your Requirements"
        title="A form to begin your biggest Milestone"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Form id="requestquote" />
      <SectionTitle pretitle="Pricing" title="Prices That Delight, Every Bite">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Pricing />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const apiUrl =
    process.env.NODE_ENV === 'production'
      ? process.env.API_URL_PROD
      : process.env.API_URL_DEV;
  const response = await fetch(`${apiUrl}/api/meal`);
  const jsonData = await response.json();
  const id = jsonData.id;
  const breakfast = jsonData.breakfast;
  const dinner = jsonData.dinner;
  const lunch = jsonData.lunch;

  return {
    props: {
      id,
      breakfast,
      lunch,
      dinner,
    },
  };
}
export default Home;
