import ApproachProcess from "@/components/ApproachProcess";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
export default function Home() {
  return (
    <main className="absolute bg-black-100 justify-center items-center
    flex-col mx-auto sm:px-10 px-5 overflow-x-clip ">
      <div className="max-w-7xl">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <ApproachProcess />
        <Footer />
      </div>
    </main>
  );
}






