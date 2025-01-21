import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Story from "./components/Story.jsx";

const App = () => {
   return (
      <main className='relative min-h-screen w-screen overflow-x-hidden overflow-hidden '>
         <Navbar />
         <Hero />
         <About />
         <Features />
         <Story />
         <Contact />
         <Footer />

         {/* <section className='min-h-screen bg-blue-75 z-0' /> */}
      </main>
   );
};
export default App;
