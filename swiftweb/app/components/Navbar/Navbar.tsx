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
          <div className="  flex items-center  md:justify-between justify-center  md:gap-3 ">
            <div className="flex flex-row font-notosans justify-center  ">
              <Image src="/LogoSwift.svg" alt="Imagen 2" width={45} height={45} />
              <Image src="/Swift.svg" alt="Imagen 2" width={68} height={68} />
            </div>
            <div className="flex  gap-8 font-notosans">
              <span className='hidden  md:flex sm:flex gap-8'>
                <NavItem  className="mt-2" color="text-navbar-color" title="Evento" href="#Home_Page"/>
                <NavItem color="text-navbar-color" title="Comunidad" href="#About_Page" />
                {/* <NavItem color="text-navbar-color" title="Es" href="#Unete_Page" /> Comentado hasta implentar el idioma */}
              </span>
              <NavItem color="text-navbar-color" title="Regístrarse" href="/signup"/>
              <NavItem color="bg-navbar-color py-2 px-5 rounded-full" title="Iniciar Sesión" href="/login"  />
              
            </div>
              
          </div>
        </Container>
      </div>
   
    </div>
    );
  }
  
  
  export default Navbar;