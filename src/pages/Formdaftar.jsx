import React from 'react'
import Navbar from '../components/Navbar'

const Formdaftar = () => {
  return (
    <div>
      <Navbar/>
      <section class="h-screen bg-gray-100/50 ">
        <form class="container flex flex-col items-center gap-8 mt-32 p-5 my-auto border max-w-2xl mx-auto shadow-md md:w-3/4">
          <div className=''>

            <input type="text" className=' border py-3 px-10 ms-5' placeholder='Nama lengkap' />
          </div>
          <div className=''>

            <input type="text" className='border py-3 px-10 ms-5' placeholder='tempat Tanggal Lahir' />
          </div>
          <div className=''>
            <input type="radio" id='option' name='jkel' value={"perempuan"} />
            <label htmlFor="Perempuan">Perempuan</label><br />
            <input type="radio" id='option' name='jkel' value={"Laki - Laki"} />
            <label htmlFor="Perempuan">Laki-Laki</label>
          </div>
          <div className=''>
            <input type="text" className='border py-3 px-10 ms-5' id='alamat' placeholder='Alamat' />
          </div>

          <button className='py-2 px-3 bg-slate-600'>Submit</button>



        </form>
      </section>
    </div>
  )
}

export default Formdaftar;