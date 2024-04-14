import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col gap-2.5">
        <Navbar />
        <div id="Spacer" className=' h-20'></div>
        Papa
    </main>
  );
}
