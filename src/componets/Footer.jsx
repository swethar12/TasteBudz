/* eslint-disable no-unused-vars */
import React from "react";
import { FaDribbbleSquare, FaFacebookSquare,FaGithubSquare,FaInstagram,FaTwitterSquare } from "react-icons/fa";

function Footer(){
    return(
        <>
        <div className="max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]">
            <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
                <div>
                    <h1 className="w-full text-3xl font-bold text-orange-500">TasteBudz</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit metus a egestas viverra. Donec convallis efficitur dapibus. Integer non metus placerat nisi fermentum mattis. Fusce blandit arcu ac facilisis congue. Fusce a ex a metus placerat vulputate.
                    </p>
                    <div className="flex justify-between md:w-[75%] my-6">
                        <FaFacebookSquare size={30}/>
                        <FaInstagram size={30}/>
                        <FaTwitterSquare size={30}/>
                        <FaGithubSquare size={30}/>
                        <FaDribbbleSquare size={30}/> 
                    </div>
                </div>
                <div className="lg:col-span-2 flex justify-between mt-6">
                    <div>
                        <h6 className="font-medium text-[#9b9b9b]">Location</h6>
                        <ul>
                            <li className="py-2 text-sm">India</li>
                            <li className="py-2 text-sm">New York</li>
                            <li className="py-2 text-sm">Canada</li>
                            <li className="py-2 text-sm">USA</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-medium text-[#9b9b9b]">Location</h6>
                        <ul>
                            <li className="py-2 text-sm">India</li>
                            <li className="py-2 text-sm">New York</li>
                            <li className="py-2 text-sm">Canada</li>
                            <li className="py-2 text-sm">USA</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-medium text-[#9b9b9b]">Location</h6>
                        <ul>
                            <li className="py-2 text-sm">India</li>
                            <li className="py-2 text-sm">New York</li>
                            <li className="py-2 text-sm">Canada</li>
                            <li className="py-2 text-sm">USA</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}
export default Footer