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
         //  clipPath: "polygon(14% 20%, 72% 20%, 88% 90%, 0% 95%)",
         clipPath: "polygon(20% 0, 80% 0, 90% 94%, 3% 84%)",

         borderRadius: "0 0 30% 30%",
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
         clipPath: "polygon(20% 0, 80% 0, 90% 94%, 3% 84%)",
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
      <div className='relative h-dvh w-screen overflow-x-hidden'>
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
            className='relative h-dvh overflow-hidden w-screen z-10 rounded-lg bg-blue-75  '
         >
            <div className=''>
               <div className='mask-clip-path absolute-center absolute z-50 size-64 overflow-hidden rounded-lg cursor-pointer'>
                  <div
                     onClick={handleMiniVideoClick}
                     className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-150 hover:opacity-100'
                  >
                     <video
                        ref={nextVideoRef}
                        src={getVideoSrc(upcomingVideoIndex)}
                        loop
                        muted
                        id='current-video'
                        className='size-64 origin-center scale-150 object-cover object-center'
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
                  className='size-64 invisible absolute-center absolute z-20 object-cover object-center border-4'
                  onLoadedData={handleVideoLoad}
               />
               <video
                  src={getVideoSrc(
                     currentIndex === totalVideos - 1 ? 1 : currentIndex
                  )}
                  autoPlay
                  loop
                  className='absolute top-0 left-0 size-full object-cover object-center'
                  onLoadedData={handleVideoLoad}
                  s
               />
            </div>

            <h1 className='special-font hero-heading absolute bottom-5 right-5 z-50 text-blue-75'>
               G<b>a</b>ming
            </h1>

            <div className='absolute left-0 top-0 z-40 size-full'>
               <div className='mt-24 px-5 sm:px-10'>
                  <h1 className='special-font hero-heading text-blue-100'>
                     redefi<b>n</b>e
                  </h1>
                  <p className='mb-5 max-w-64 font-robert-regular text-blue-100'>
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
         <h1 className='special-font hero-heading absolute bottom-5 right-5  text-black'>
            G<b>a</b>ming
         </h1>
      </div>
   );
};
export default Hero;
