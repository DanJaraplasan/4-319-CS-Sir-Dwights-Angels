import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    return (
        <div className="bg-black font-sans">
        {/* Navigation Bar */}
        <nav className="bg-gradient-to-r from-gray-900 to-gray-600 text-white p-4 h-[100px]">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-xl font-bold">Gym</a>
                <ul className="flex space-x-[50px]">
                    <li><a href="#" className="hover:text-gray-300">Home</a></li>
                    <li><a href="#" className="hover:text-gray-300">About</a></li>
                    <li><a href="#" className="hover:text-gray-300">Services</a></li>
                    <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                </ul>
            </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-600 text-white py-20">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold">GYM</h1>
                <p className="text-lg">We are GYM</p>
                <div class="w-full flex items-center justify-center cursor-pointer">
                <div
                    class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-black-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group"
                >
                    <span
                    class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gray-600 group-hover:h-full"
                    ></span>
                    <span
                    class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        class="w-5 h-5 text-white"
                    >
                        <path
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                        stroke-width="2"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        ></path>
                    </svg>
                    </span>
                    <span
                    class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        class="w-5 h-5 text-white"
                    >
                        <path
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                        stroke-width="2"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        ></path>
                    </svg>
                    </span>
                    <button onClick= "relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200"
                    >JOIN US</button>
                    
                </div>
                <div className="mb-[125px]"></div>
            </div>

            </div>
        </section>

        {/* Features Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-600 pb-[50px]">
            <div className="container mx-auto text-center text-white">
                <h2 className="text-3xl font-bold mb-8">What we offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="p-4 border border-gray-300 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Feature 1</h3>
                        <p className="text-white">Coaching Services.</p>
                    </div>
                    {/* Feature 2 */}
                    <div className="p-4 border border-gray-300 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Feature 2</h3>
                        <p className="text-white">Planned Workout Split.</p>
                    </div>
                    {/* Feature 3 */}
                    <div className="p-4 border border-gray-300 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Feature 3</h3>
                        <p className="text-white">Good Customer Services.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white text-center py-8">
            <p>&copy; 2024 Company Name. All rights reserved.</p>
        </footer>
    </div>    
    );
}

export default Home