import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from '@heroicons/react/24/solid';

import benefitOneImg from '../public/img/benefit-one.png';
import benefitTwoImg from '../public/img/benefit-two.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHandSparkles,
  faBowlFood,
  faSlidersH,
  faHeartbeat,
  faUsers,
  faUserFriends,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(
  faHandSparkles,
  faBowlFood,
  faHeartbeat,
  faUsers,
  faUserFriends,
  faUsers
);

const benefitOne = {
  title: 'Highlight your benefits',
  desc: 'You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.',
  image: benefitOneImg,
  bullets: [
    {
      title: 'Fresh Homemade Quality',
      desc: 'Feel the authenticity of South indian, North indian and Middle eastern food in our hands. Subscribe our Weekly/ Monthly plans now.',
      icon: <FontAwesomeIcon icon="fa-solid fa-bowl-food" size="2x" />,
    },
    {
      title: 'Authentic Flavors',
      desc: 'Feel the authenticity of South indian, North indian and Middle eastern food in our hands. Subscribe our Weekly/ Monthly plans now.',
      icon: <FontAwesomeIcon icon="fa-solid fa-bowl-food" />,
    },
    {
      title: 'Customization',
      desc: 'There is no boundaries for flavors, you can customize the food according to your taste buds. Subscribe to Our Monthly plans and Give your customization by contacting us',
      icon: <FontAwesomeIcon icon={faSlidersH} size="2x" />,
    },

    {
      title: 'Pregnancy Friendly diets',
      desc: 'Your diet during pregnancy impacts your babys future health. Make each bite count with our Monthly/Weekly subscription plans',
      icon: <FontAwesomeIcon icon={faHeartbeat} size="3x" />,
    },
    {
      title: 'Family Friendly Options',
      desc: 'Your diet during pregnancy impacts your babys future health. Make each bite count with our Monthly/Weekly subscription plans',
      icon: <FontAwesomeIcon icon={faUsers} size="3x" />,
    },

    {
      title: 'We Care our senior citizens',
      desc: 'Growing old is mandatory, but growing up with care is optional. We dont just cook food, we spice it up with love. Subscribe to our monthly plans and let your days bloom with love',
      icon: <FontAwesomeIcon icon={faUserFriends} size="3x" />,
    },
    {
      title: 'Bachelor friendly Food',
      desc: 'Now you dont have to go back to home for delicious home made food. Subscribe to our Monthly plan. And Yes! there is no compromise.',
      icon: <FontAwesomeIcon icon={faUser} size="3x" />,
    },
  ],
};

const benefitTwo = {
  title: 'Offer more benefits here',
  desc: 'You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.',
  image: benefitTwoImg,
  bullets: [
    {
      title: 'Mobile Responsive Template',
      desc: 'Nextly is designed as a mobile first responsive template.',
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: 'Powered by Next.js & TailwindCSS',
      desc: 'This template is powered by latest technologies and tools.',
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: 'Dark & Light Mode',
      desc: 'Nextly comes with a zero-config light & dark mode. ',
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
