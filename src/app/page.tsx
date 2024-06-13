import Image from 'next/image'
import Navbar from './components/Navbar/Navbar'
import Home from './components/landing/Home'

export default function Landing() {
  return (
    <main className='flex h-screen flex-col overflow-auto border-[20px] border-navbar-background bg-navbar-background'>
      <Navbar />
      <div className='mt-[85px] rounded-2xl bg-navbar-color'>
        <Home />
      </div>
    </main>
  )
}
