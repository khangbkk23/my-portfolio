// app/page.tsx
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNavBar } from "@/components/ui/FloatingNavBar";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 transition-colors duration-300">
      <div className="max-w-7xl w-full">
        <FloatingNavBar navItems={[
          { name: 'Home', link: '/', icon: <FaHome /> }
        ]} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}