'use client'

import React from 'react'
import Image from 'next/image'

import Container from '../Container'
import NavItem from './NavItem'

const Navbar = ({}) => {
  return (
    <div className='fixed z-10 w-screen bg-navbar-background'>
      <div className='py-4'>
        <Container>
          <div className='flex justify-between md:gap-3'>
            <div className='font-notosan hidden flex-row justify-end md:flex md:justify-start lg:flex'>
              <Image
                src='/LogoSwift.svg'
                alt='Imagen 2'
                width={45}
                height={45}
              />
              <Image src='/Swift.svg' alt='Imagen 2' width={68} height={68} />
            </div>

            <div className='mr-6 flex justify-between gap-8'>
              <span className='hidden gap-8 md:flex'>
                <NavItem
                  color='text-navbar-color'
                  title='Eventos'
                  href='#Home_Page'
                />
                <NavItem
                  color='text-navbar-color'
                  title='Comunidad'
                  href='#About_Page'
                />
                {/* <NavItem color="text-navbar-color" title="Es" href="#Unete_Page" /> Comentado hasta implentar el idioma */}
              </span>
              <NavItem
                color='text-navbar-color'
                title='Regístrarse'
                href='/signup'
              />
              <NavItem
                color='bg-navbar-color  px-2 sm:px-5 rounded-full'
                title='Iniciar Sesión'
                href='/login'
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
