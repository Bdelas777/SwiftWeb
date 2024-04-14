import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

const Home = () => {
  return ( 
    <div className="justify-center mt-12 items-center flex flex-col">
      <h1 className='text-white  text-4xl sm:text-7xl flex flex-col m-auto items-center'>Aprende  
      <span className=' text-[5rem] mt-2 sm:text-[11rem]'>Swift</span>
      </h1>

      <h2 className='text-white text-lg sm:text-2xl  md:text-3xl lg:text-4xl flex flex-col m-auto items-center 
      font-bold mt-12' >
        Tutoriales. Conferencias. Eventos.
        <span className='font-normal justify-center w-[300px] sm:w-[400px] md:w-[500px] lg:w-[1000px]'>
            ¡Forma parte de la familia SwiftTec y aprende con nosotros
        </span>
      </h2>
      <p className=' font-bold rounded-full  text-md sm:text-2xl py-3 px-6 bg-navbar-background text-navbar-color
       flex flex-col m-auto mt-8 mb-2'>
            Conoce más
             
      </p>
      <span className='mb-8'>
      <RiArrowDownSLine style={{ color: 'white', fontSize: '3rem' }} /> 
      </span>
      
    </div>
  );
}

export default Home;
