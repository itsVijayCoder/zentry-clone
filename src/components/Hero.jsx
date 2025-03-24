import { useEffect, useRef, useState } from "react";
import Button from "./ui/Button.jsx";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
   const [currentIndex, setCurrentIndex] = useState(1);
   const [hasClicked, setHasClicked] = useState(false);
   const [isLoading, setIsLoading] = useState(true);
   const [loadedVideo, setLoadedVideo] = useState(0);

   const totalVideos = 4;
   const nextVideoRef = useRef(null);

   // 0 % 4 => 0 + 1 = 1
   // 1 % 4 => 1 + 1 = 2
   // 2 % 4 => 2 + 1 = 3
   // 3 % 4 => 3 + 1 = 4
   // 4 % 4 => 0 + 1 = 1
   const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
   const handleMiniVideoClick = () => {
      setHasClicked(true);

      setCurrentIndex(upcomingVideoIndex);
   };

   const handleVideoLoad = () => {
      setLoadedVideo((prev) => prev + 1);
   };

   useEffect(() => {
      if (loadedVideo === totalVideos - 1) {
         setIsLoading(false);
      }
   }, [loadedVideo]);

   useGSAP(
      () => {
         if (hasClicked) {
            gsap.set("#next-video", { visibility: "visible" });

            gsap.to("#next-video", {
               transformOrigin: "center center",
               scale: 1,
               width: "100%",
               height: "100%",
               duration: 1,
               ease: "power1.inOut",
               onStart: () => nextVideoRef.current?.play(),
            });

            gsap.from("#current-video", {
               transformOrigin: "center center",
               scale: 0,
               duration: 1.5,
               ease: "power1.inOut",
            });
         }
      },
      { dependencies: [currentIndex], revertOnUpdate: true }
   );

   useGSAP(() => {
      gsap.set("#video-frame", {
         // clipPath: "polygon(14% 2%, 80% 0, 92% 93%, 5% 84%)",
         // borderRadius: "0 0 20% 35%",

         clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
         borderRadius: "0% 0% 40% 10%",
      });

      gsap.from("#video-frame", {
         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
         borderRadius: "0 0 0 0",
         ease: "power1.inOut",
         scrollTrigger: {
            trigger: "#video-frame",
            start: "center center",
            end: "bottom center",
            scrub: true,
         },
      });

      gsap.to("#video-frame", {
         // clipPath: "polygon(14% 2%, 80% 0, 92% 93%, 5% 84%)",
         clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
         ease: "power1.inOut",
         scrollTrigger: {
            trigger: "#video-frame",
            start: "center center",
            end: "bottom center",
            scrub: true,
         },
      });
   });
   const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

   return (
      <div className='relative w-screen overflow-x-hidden h-dvh'>
         {isLoading && (
            <div className='flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50'>
               <div className='three-body'>
                  <div className='three-body__dot' />
                  <div className='three-body__dot' />
                  <div className='three-body__dot' />
               </div>
            </div>
         )}
         <div
            id='video-frame'
            className='relative z-10 w-screen overflow-hidden rounded-lg h-dvh bg-blue-75 '
         >
            <div className=''>
               <div className='absolute z-50 overflow-hidden rounded-lg cursor-pointer mask-clip-path absolute-center size-64'>
                  <div
                     onClick={handleMiniVideoClick}
                     className='transition-all duration-500 ease-in origin-center scale-50 opacity-0 hover:scale-150 hover:opacity-100'
                  >
                     <video
                        ref={nextVideoRef}
                        src={getVideoSrc(upcomingVideoIndex)}
                        loop
                        muted
                        id='current-video'
                        className='object-cover object-center origin-center scale-150 size-64'
                        onLoadedData={handleVideoLoad}
                     />
                  </div>
               </div>
               <video
                  ref={nextVideoRef}
                  src={getVideoSrc(currentIndex)}
                  loop
                  muted
                  id='next-video'
                  className='absolute z-20 invisible object-cover object-center border-4 size-64 absolute-center'
                  onLoadedData={handleVideoLoad}
               />
               <video
                  src={getVideoSrc(
                     currentIndex === totalVideos - 1 ? 1 : currentIndex
                  )}
                  autoPlay
                  loop
                  muted
                  className='absolute top-0 left-0 object-cover object-center size-full'
                  onLoadedData={handleVideoLoad}
               />
            </div>

            <h1 className='absolute z-50 special-font hero-heading bottom-16 md:bottom-5 right-5 text-blue-75'>
               G<b>a</b>ming
            </h1>

            <div className='absolute top-0 left-0 z-40 size-full '>
               <div className='px-5 mt-24 sm:px-10'>
                  <h1 className='text-blue-100 special-font hero-heading'>
                     redefi<b>n</b>e
                  </h1>
                  <p className='mb-5 text-blue-100 max-w-64 font-robert-regular'>
                     Enter the Metagame Layer <br /> Unleash the Play Economy
                  </p>

                  <Button
                     id={"watch-trailer"}
                     title='Watch Trailer'
                     leftIcon={<TiLocationArrow />}
                     containerClass='!bg-yellow-300 flex-center gap-1'
                  />
               </div>
            </div>
         </div>

         <div className='absolute top-0 left-0 text-black size-full'>
            <div className='px-5 mt-24 sm:px-10'>
               <h1 className='special-font hero-heading'>
                  redefi<b>n</b>e
               </h1>
               <p className='mb-5 max-w-64 font-robert-regular'>
                  Enter the Metagame Layer <br /> Unleash the Play Economy
               </p>
            </div>
         </div>

         <h1 className='absolute text-black special-font hero-heading bottom-16 md:bottom-5 right-5'>
            G<b>a</b>ming
         </h1>
      </div>
   );
};
export default Hero;
