// eslint-disable-next-line no-unused-vars
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">About TasteBudz</h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        Welcome to TasteBudz, where we are passionate about bringing delicious meals right to your doorstep.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mt-4">
        TasteBudz was founded with a simple mission: to make ordering food convenient, enjoyable, and reliable for everyone. Whether you are craving a hearty dinner after a long day at work or hosting a gathering with friends, we are here to satisfy your hunger with a wide selection of mouthwatering dishes from top local restaurants.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mt-4">
        Our team is dedicated to providing exceptional service and ensuring that every order is delivered promptly and with care. With TasteBudz, you can expect:
      </p>
      <ul className="list-disc pl-6 mt-2">
        <li className="text-gray-700">A diverse menu featuring cuisines from around the world</li>
        <li className="text-gray-700">Fast and reliable delivery to your doorstep</li>
        <li className="text-gray-700">Easy ordering process through our user-friendly app</li>
        <li className="text-gray-700">Friendly and responsive customer support</li>
        <li className="text-gray-700">Special promotions and deals for our valued customers</li>
      </ul>
      <p className="text-lg text-gray-700 leading-relaxed mt-4">
        Thank you for choosing TasteBudz. We look forward to serving you and helping you discover new flavors that delight your taste buds!
      </p>
    </div>
  );
};

export default About;
