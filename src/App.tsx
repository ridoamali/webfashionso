import React, { useEffect } from "react";
import Navbar from "./components/ui/Navbar";
import Jumbotron from "./components/ui/Jumbotron";
import Reviews from "./components/ui/Reviews";
import Category from "./components/ui/Category";
import Women from "./components/ui/Women";
import Men from "./components/ui/Men";
import Jumbotron2 from "./components/ui/Jumbotron2";
import Obs from "./components/ui/Obs";
import Collection from "./components/ui/Collection";
import Shipping from "./components/ui/Shipping";
import Slider from "./components/ui/Slider";
import Footer from "./components/ui/Footer";



const App: React.FC = () => {
  useEffect(() => {
    // Fungsi untuk mengupdate class dark berdasarkan preferensi sistem
    const handleDarkModeChange = (e: MediaQueryListEvent) => {
      document.documentElement.classList.toggle("dark", e.matches);
    };

    // Deteksi dark mode saat pertama kali load
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    document.documentElement.classList.toggle("dark", mediaQuery.matches);

    // Dengarkan perubahan preferensi sistem
    mediaQuery.addEventListener("change", handleDarkModeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Jumbotron />
      <Category />
      <Women />
      <Men />
      <Jumbotron2 />
      <Obs />
      <Collection />
      <Shipping />
      <Slider />
      <Reviews />
      <Footer />
      
    </>
  );
};

export default App;
