import About from "./components/About.jsx";
import GridDemo from "./components/grid-demo.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
   return (
      <main className='relative min-h-screen w-screen overflow-x-hidden'>
         <Navbar />
         <Hero />
         <About />

         {/* <GridDemo /> */}
         {/* <section className='min-h-screen bg-blue-75 z-0' /> */}
      </main>
   );
};
export default App;
