import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

const Home = () => {
  return ( 
    <div className="justify-center mt-12 items-center flex med>flex-row">


      <h2 className='text-white text-lg sm:text-3xl  md:text-5xl lg:text-8xl flex flex-col m-auto items-center 
      font-bold my-12 mr-5 ml-5' >
       ¿QUIÉNES SOMOS?
      </h2>
      
      <h2 className='text-white text-MD sm:text-LG  md:text-3xl lg:text-5xl flex flex-col
       m-auto items-center 
      font-bold my-12  w-[600px] sm:w-[800px] pl-8' >
       SwiftTec es un grupo estudiantil en el que buscamos compartir nuestros conocimientos y experiencias de Swift. 
      </h2>
      
    </div>
  );
}

export default Home;
