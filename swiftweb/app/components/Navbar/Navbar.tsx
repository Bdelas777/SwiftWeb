"use client"

import React from 'react';
import Image from 'next/image';

import Container from "../Container";
import NavItem from "./NavItem";

import Link from 'next/link';

const Navbar = ({
  
  }) => {
    return ( 
      <div className="fixed w-screen z-10  bg-navbar-background ">
        <div
          className="
            py-4 
          "
        >
        <Container>
          <div className="  flex   justify-between   md:gap-3 ">
        
            <div className=" hidden md:flex lg:flex flex-row font-notosan  justify-end md:justify-start  ">
              <Image src="/LogoSwift.svg" alt="Imagen 2" width={45} height={45} />
              <Image src="/Swift.svg" alt="Imagen 2" width={68} height={68} />
            </div>
           
            <div className="flex  gap-8  justify-between  mr-6">
              <span className='hidden md:flex   gap-8'>
                <NavItem   color="text-navbar-color" title="Eventos" href="#Home_Page"/>
                <NavItem color="text-navbar-color" title="Comunidad" href="#About_Page" />
                {/* <NavItem color="text-navbar-color" title="Es" href="#Unete_Page" /> Comentado hasta implentar el idioma */}
              </span>
              <NavItem color="text-navbar-color" title="Regístrarse" href="/signup"/>
              <NavItem color="bg-navbar-color  px-2 sm:px-5 rounded-full" title="Iniciar Sesión" href="/login"  />
              
            </div>
              
          </div>
        </Container>
      </div>
   
    </div>
    );
  }
  
  
  export default Navbar;