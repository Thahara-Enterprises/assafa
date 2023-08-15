import React from 'react';
import Container from './container';

function PricingCard() {
  return (
    <Container>
      <div className="grid lg:grid-cols-4 text-center justify-center sm:grid-cols-1 gap-5 mt-8 mx-auto px-10 md:justify-around">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white mb-4">
            <span className="text-xl font-bold">1</span>
          </div>
          <h2 className="text-2xl font-semibold text-secondary mb-2">
            Daily Meal Plan
          </h2>
          <p className="text-gray-600 mb-4">Daily Meal Plan</p>
          <div className="flex justify-between items-center mb-6">
            <span className="text-secondary text-lg">₹ 189/- Only</span>
            <span className="text-accent font-bold text-lg">/ day</span>
          </div>
          <ul className="text-sm text-gray-600">
            <li className="flex items-center mb-2">
              <svg
                className="w-4 h-4 mr-2 fill-current text-accent"
                viewBox="0 0 24 24"
              >
                <path d="M21 2H3C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V3C22 2.44772 21.5523 2 21 2ZM20 20H4V4H20V20Z"></path>
              </svg>
              Unlimited projects
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="w-4 h-4 mr-2 fill-current text-accent"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C12.5523 2 13 2.44772 13 3V13H21C21.5523 13 22 13.4477 22 14V20C22 20.5523 21.5523 21 21 21H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V21H3C2.44772 21 2 20.5523 2 20V14C2 13.4477 2.44772 13 3 13H11V3C11 2.44772 11.4477 2 12 2Z"></path>
              </svg>
              Premium support
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="w-4 h-4 mr-2 fill-current text-accent"
                viewBox="0 0 24 24"
              >
                <path d="M2 21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V14H2V21Z"></path>
                <path d="M3 2C2.44772 2 2 2.44772 2 3V10H22V3C22 2.44772 21.5523 2 21 2H3Z"></path>
              </svg>
              Access to all features
            </li>
          </ul>
          <button className="bg-complementary hover:bg-accent text-white font-semibold py-2 px-4 rounded-full mt-6">
            Call Now
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white mb-4">
            <span className="text-xl font-bold">2</span>
          </div>
          <h2 className="text-2xl font-semibold text-secondary mb-2">
            Weekly Meal Plan
          </h2>
          <p className="text-gray-600 mb-4">Perfect for Working Couples</p>
          <div className="flex justify-between items-center mb-6">
            <span className="text-secondary text-lg">₹ 999 /- (approx)</span>
            <span className="text-accent font-bold text-lg">/ month</span>
          </div>
          <ul className="text-sm text-gray-600">
            <li className="flex items-center mb-2">
              <svg
                className="w-4 h-4 mr-2 fill-current text-accent"
                viewBox="0 0 24 24"
              >
                <path d="M21 2H3C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V3C22 2.44772 21.5523 2 21 2ZM20 20H4V4H20V20Z"></path>
              </svg>
              Unlimited projects
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="w-4 h-4 mr-2 fill-current text-accent"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C12.5523 2 13 2.44772 13 3V13H21C21.5523 13 22 13.4477 22 14V20C22 20.5523 21.5523 21 21 21H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V21H3C2.44772 21 2 20.5523 2 20V14C2 13.4477 2.44772 13 3 13H11V3C11 2.44772 11.4477 2 12 2Z"></path>
              </svg>
              Premium support
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="w-4 h-4 mr-2 fill-current text-accent"
                viewBox="0 0 24 24"
              >
                <path d="M2 21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V14H2V21Z"></path>
                <path d="M3 2C2.44772 2 2 2.44772 2 3V10H22V3C22 2.44772 21.5523 2 21 2H3Z"></path>
              </svg>
              Access to all features
            </li>
          </ul>
          <button className="bg-complementary hover:bg-accent text-white font-semibold py-2 px-4 rounded-full mt-6">
            Call Now
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white mb-4">
            <span className="text-xl font-bold">3</span>
          </div>
          <h2 className="text-2xl font-semibold text-secondary mb-2">
            Monthly Meal Plan
          </h2>
          <p className="text-gray-600 mb-4">
            Perfect for Bachelors and Senior citizens
          </p>
          <div className="flex justify-between items-center mb-6">
            <span className="text-secondary text-lg">₹ 3999/- (approx)</span>
            <span className="text-accent font-bold text-lg">/ month</span>
          </div>
          <ul className="text-sm text-gray-600">
            <li className="flex items-center mb-2">
              <svg
                className="w-4 h-4 mr-2 fill-current text-accent"
                viewBox="0 0 24 24"
              >
                <path d="M21 2H3C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V3C22 2.44772 21.5523 2 21 2ZM20 20H4V4H20V20Z"></path>
              </svg>
              Non-veg Main Course + Side dishes + extras
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="w-4 h-4 mr-2 fill-current text-accent"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C12.5523 2 13 2.44772 13 3V13H21C21.5523 13 22 13.4477 22 14V20C22 20.5523 21.5523 21 21 21H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V21H3C2.44772 21 2 20.5523 2 20V14C2 13.4477 2.44772 13 3 13H11V3C11 2.44772 11.4477 2 12 2Z"></path>
              </svg>
              Subject to change as per preferences
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="w-4 h-4 mr-2 fill-current text-accent"
                viewBox="0 0 24 24"
              >
                <path d="M2 21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V14H2V21Z"></path>
                <path d="M3 2C2.44772 2 2 2.44772 2 3V10H22V3C22 2.44772 21.5523 2 21 2H3Z"></path>
              </svg>
             Delivery Available for certain areas
            </li>
          </ul>
          <a href="tel:9600052742">
            <button className="bg-complementary hover:bg-accent text-white font-semibold py-2 px-4 rounded-full mt-6">
              Call Now
            </button>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default PricingCard;
