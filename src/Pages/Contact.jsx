/* eslint-disable no-unused-vars */
import React from "react";
import TopNav from "../componets/TopNav";
import Footer from "../componets/Footer";

function Contact(){
    return (
        <>
            <div className="bg-cover bg-[url('https://d1fd34dzzl09j.cloudfront.net/2023/09/LBM%20College%20Park%20MD/LBM%20Hero%20Image_11zon.jpg')] bg-no-repeat p-4 md:p-8 lg:p-12 flex justify-center items-center min-h-screen">
      <div className="bg-white p-4 md:p-8 lg:p-12 rounded shadow-md max-w-screen-sm">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-blue-600">Contact Us</h1>
        <p className="text-gray-600 mb-6">If you have any questions or feedback, please feel free to get in touch with us.</p>

        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 text-sm font-medium">Name</label>
            <input type="text" id="name" name="name" className="block w-full mt-1 py-2 px-3 border rounded-md shadow-sm focus:ring focus:ring-blue-200" placeholder="Your Name" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium">Email</label>
            <input type="email" id="email" name="email" className="block w-full mt-1 py-2 px-3 border rounded-md shadow-sm focus:ring focus:ring-blue-200" placeholder="Your Email" />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600 text-sm font-medium">Message</label>
            <textarea id="message" name="message" className="block w-full mt-1 py-2 px-3 border rounded-md shadow-sm focus:ring focus:ring-blue-200" rows="4" placeholder="Your Message"></textarea>
          </div>

          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Send Message
          </button>
        </form>
      </div>
    </div>
        </>
    )
}
 export default Contact