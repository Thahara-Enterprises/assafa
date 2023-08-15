import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: 'Highlight your benefits',
  desc: 'You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.',
  image: benefitOneImg,
  bullets: [
    {
      title: 'Authentic Feel',
      desc: 'Feel the authenticity of South indian, North indian and Middle eastern food in our hands. Subscribe our Weekly/ Monthly plans now.',
      icon: <FaceSmileIcon />,
    },
    {
      title: 'Cost Efficiency',
      desc: ' Hiring a contracting company can be more cost-effective than maintaining in-house teams, as it eliminates the need for employee benefits, training, and overhead expenses.',
      icon: <ChartBarSquareIcon />,
    },
    {
      title: 'Time Efficiency',
      desc: 'Proper nutrition isnt just about what you eat, but also when you eat it. Subscribe to Assafa delicacys Monthly/Weekly subscription plan to get your meal on time',
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: 'Quality Assurance',
      desc: 'Contracting companies are focused on maintaining their reputation and meeting client expectations, ensuring that work is executed with high standards of quality and craftsmanship.',
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: 'Pregnancy Friendly diets',
      desc: 'Your diet during pregnancy impacts your babys future health. Make each bite count with our Monthly/Weekly subscription plans',
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: 'We Care our senior citizens',
      desc: 'Growing old is mandatory, but growing up with care is optional. We dont just cook food, we spice it up with love. Subscribe to our monthly plans and let your days bloom with love',
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: 'Bachelor friendly Food',
      desc: 'Now you dont have to go back to home for delicious home made food. Subscribe to our Monthly plan. And Yes! there is no compromise.',
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
