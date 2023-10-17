import Image from 'next/image'
import NavigationBar from "./components/NavigationBar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import TopicSection from "./components/TopicSection.jsx";


export default function Home() {
  return (
    <main>
      <NavigationBar />
      <HeroSection />
      <TopicSection />
    </main>
    
  )
}
