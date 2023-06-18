import React from 'react';
import Navbar from '../components/Navbar'

const About = () => {
    return (
        <div className="">
            <Navbar/>
            <div>
                <div class="bg-white dark:bg-gray-800 ">
                    <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                        <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                            <span class="block">
                            want your achievements to be supported ?
                            </span>
                            <span class="block text-indigo-500">
                            Sign up for Pelita Jaya High School
                            </span>
                        </h2>
                        <p class="text-xl mt-4 max-w-md mx-auto text-gray-400">
                        being the only High School in Malang that is the official organizer of RPL. Through the RPL pathway you can become a graduate in a short time.
                        </p>
                        <div class="lg:mt-0 lg:flex-shrink-0">
                            <div class="mt-12 inline-flex rounded-md shadow">
                                <button type="button" class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Get started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;