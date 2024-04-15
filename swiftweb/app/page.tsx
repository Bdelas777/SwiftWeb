import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/landing/Home";
import Information from "./components/landing/Information";

export default function Landing() {
  return (
    <main className="flex flex-col   h-screen overflow-auto
     border-[20px] bg-navbar-background  border-navbar-background ">
      <Navbar />
      <div className="  rounded-2xl bg-navbar-color  mt-[85px]">
      <Home />
      </div>
      <div className="  rounded-2xl bg-navbar-color  mt-12">
      <Information />
      </div>
      
      
    </main>
  );
}
