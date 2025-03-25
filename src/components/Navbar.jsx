import { useEffect, useRef, useState } from "react";
import Button from "./ui/Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const navItems = ["Nexus", "Valut", "Prologue", "About", "Contact"];
const Navbar = () => {
   const [isAudioPlaying, setIsAudioPlaying] = useState(false);
   const [isIndicatorActive, setIsIndicatorActive] = useState(false);
   const [lastScrollY, setLastScrollY] = useState(0);
   const [isNavVisible, setIsNavVisible] = useState(true);
   const [showAudioPrompt, setShowAudioPrompt] = useState(true);

   const navContainerRef = useRef(null);
   const audioElementRef = useRef(null);

   const { y: currentScrollY } = useWindowScroll();

   useEffect(() => {
      if (currentScrollY === 0) {
         setIsNavVisible(true);
         // navContainerRef.current.classList.add("floating-nav");
         navContainerRef.current.classList.remove("floating-nav");
      } else if (currentScrollY > lastScrollY) {
         setIsNavVisible(false);
         navContainerRef.current.classList.add("floating-nav");
      } else if (currentScrollY < lastScrollY) {
         setIsNavVisible(true);
         navContainerRef.current.classList.add("floating-nav");
      }

      setLastScrollY(currentScrollY);
   }, [currentScrollY, lastScrollY]);

   useEffect(() => {
      gsap.to(navContainerRef.current, {
         y: isNavVisible ? 0 : -100,
         opacity: isNavVisible ? 1 : 0,
         duration: 0.2,
      });
   }, [isNavVisible]);

   const toggleAudioIndicator = () => {
      setIsAudioPlaying((prev) => !prev);

      setIsIndicatorActive((prev) => !prev);

      setShowAudioPrompt(false);
   };

   useEffect(() => {
      if (isAudioPlaying) {
         audioElementRef.current.play();
      } else {
         audioElementRef.current.pause();
      }
   }, [isAudioPlaying]);
   return (
      <div
         ref={navContainerRef}
         className='fixed inset-x-0 z-50 h-16 transition-all duration-700 border-none top-4 sm:inset-x-6'
      >
         <header className='absolute w-full -translate-y-1/2 top-1/2'>
            <nav className='flex items-center justify-between p-4 size-full'>
               <div className='flex items-center gap-7'>
                  <a href='#'>
                     <img src='/img/logo.png' alt='logo' className='w-10' />
                  </a>

                  <Button
                     id='product-button'
                     title='Products'
                     rightIcon={<TiLocationArrow />}
                     containerClass={
                        "bg-blue-50 md:flex hidden items-center gap-1 justify-center"
                     }
                  />
               </div>

               <div className='flex items-center h-full'>
                  <div className='hidden md:block'>
                     {navItems.map((item) => (
                        <a
                           href={`#${item.toLowerCase()}`}
                           className='nav-hover-btn'
                           key={item}
                        >
                           {item}
                        </a>
                     ))}
                  </div>

                  <div className='relative'>
                     <button
                        className='ml-10 flex items-center space-x-0.5 relative'
                        onClick={toggleAudioIndicator}
                     >
                        <audio
                           ref={audioElementRef}
                           src='/audio/loop.mp3'
                           loop
                           className='hidden'
                        />
                        {[1, 2, 3, 4, 5, 6].map((bar) => (
                           <div
                              key={bar}
                              className={`indicator-line ${
                                 isIndicatorActive ? "active" : ""
                              }`}
                              style={{ animationDelay: `${bar * 0.1}s` }}
                           />
                        ))}
                     </button>

                     {/* Audio prompt tooltip */}
                     {showAudioPrompt && (
                        <div className='absolute right-0 w-48 p-2 mt-2 text-xs text-black bg-white rounded shadow-lg top-full'>
                           Click to enable sound
                           <div className='absolute w-3 h-3 transform rotate-45 bg-white -top-1 right-1'></div>
                        </div>
                     )}
                  </div>
               </div>
            </nav>
         </header>
      </div>
   );
};

export default Navbar;
