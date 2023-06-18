import React from 'react'
import Form from './Form'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div>
            <Navbar />
           
<div class="relative h-screen overflow-hidden bg-indigo-900">
    <img src="/images/landscape/7.svg" class="absolute object-cover w-full h-full"/>
    <div class="absolute inset-0 bg-black opacity-25">
    </div>
    <header class="absolute top-0 left-0 right-0 z-20">
        <nav class="container px-6 py-4 mx-auto md:px-12">
            <div class="items-center justify-center md:flex">
                <div class="flex items-center justify-between">
                    <div class="md:hidden">
                        <button class="text-white focus:outline-none">
                            <svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
               
            </div>
        </nav>
    </header>
    <div class="container relative z-10 flex items-center w-4/5 py-16 mx-auto my-24 border-4 border-white rounded-lg md:my-32">
        <div class="relative z-10 flex flex-col items-center justify-between w-full">
            <p class="flex flex-col items-center text-6xl font-extrabold text-center text-white md:text-8xl">
                Silakan Daftar Disini
            </p>
            <p class="flex flex-col items-center max-w-lg mt-6 text-lg font-extrabold text-center text-white">
            Sekolah kami adalah tempat di mana mimpi-mimpi menjadi nyata. Dengan program pendidikan yang holistik dan lingkungan yang mendukung, kami mempersiapkan siswa-siswa kami untuk menghadapi tantangan masa depan dengan keyakinan dan keunggulan.
            </p>
           
        </div>
    </div>
</div>

        </div>
    )
}

export default Home