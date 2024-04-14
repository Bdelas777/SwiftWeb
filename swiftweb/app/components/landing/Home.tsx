import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

const Home = () => {
  return ( 
    <div className="justify-center mt-12 items-center flex flex-col">
      <h1 className='text-white text-7xl flex flex-col m-auto items-center'>Aprende  
      <span className='text-[11rem]'>Swift</span>
      </h1>

      <h2 className='text-white text-5xl flex flex-col m-auto items-center font-bold mt-12'>
        Tutoriales. Conferencias. Eventos.
        <span className='font-normal'>
            ¡Forma parte de la familia SwiftTec y aprende con nosotros
        </span>
      </h2>
      <p className=' font-bold rounded-full text-2xl py-3 px-6 bg-navbar-background text-navbar-color
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
