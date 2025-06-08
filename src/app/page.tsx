import Header from "@/components/header/Header"
import Hero from "@/components/home/HeroSection";
import Recommended from "@/components/recommend/Recom"
import Heros from "@/components/heo2/Heros"
import AISec from "@/components/ai-section/AISec"
import VideoSec from "@/components/video/Video"
import Expert from "@/components/expert/Expert"
import Count from "@/components/count/Count"
import Footer from "@/components/footer/Footer"
export default function Home() {
  return (
    <div>
    <Header/>
    <Hero/>
    <Recommended/>
    <Heros/>
    <AISec/>
    <VideoSec/>
    <Expert/>
    <Count/>
    <Footer/>
        </div>
  );
}
