import Image from "next/image";
import { FaHome } from "react-icons/fa"
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNavBar } from "@/components/ui/FloatingNavBar";
export default function Home() {
    
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
            <FloatingNavBar navItems={[
                {name: 'Home', link: '/', icon: <FaHome/>}
            ]} />
            <Hero />
            <Grid />
        </div>
    </main>
  );
}
