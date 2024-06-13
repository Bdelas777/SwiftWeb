import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'

const Home = () => {
  return (
    <div className='mt-12 flex flex-col items-center justify-center'>
      <h1 className='m-auto flex flex-col items-center text-4xl text-white sm:text-7xl'>
        Aprende
        <span className='mt-2 text-[5rem] sm:text-[11rem]'>Swift</span>
      </h1>

      <h2 className='m-auto mt-12 flex flex-col items-center text-lg font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl'>
        Tutoriales. Conferencias. Eventos.
        <span className='w-[300px] justify-center font-normal sm:w-[400px] md:w-[500px] lg:w-[1000px]'>
          ¡Forma parte de la familia SwiftTec y aprende con nosotros
        </span>
      </h2>
      <p className='text-md m-auto mb-2 mt-8 flex flex-col rounded-full bg-navbar-background px-6 py-3 font-bold text-navbar-color sm:text-2xl'>
        Conoce más
      </p>
      <span className='mb-8'>
        <RiArrowDownSLine style={{ color: 'white', fontSize: '3rem' }} />
      </span>
    </div>
  )
}

export default Home
