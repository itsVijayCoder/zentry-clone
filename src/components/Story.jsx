import React, { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
import Button from "./ui/Button";

const Story = () => {
   const frameRef = useRef(null);

   const handleMouseLeave = () => {
      const element = frameRef.current;

      gsap.to(element, {
         duration: 0.3,
         rotateX: 0,
         rotateY: 0,
         ease: "power1.inOut",
      });
   };

   const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      const element = frameRef.current;

      if (!element) return;

      const { left, top, width, height } = element.getBoundingClientRect();

      const x = clientX - left;
      const y = clientY - top;

      const centerX = width / 2;
      const centerY = height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      gsap.to(element, {
         duration: 0.3,
         rotateX,
         rotateY,
         ease: "power1.inOut",
         transformPerspective: 500,
      });
   };
   return (
      <section id='story' className='min-h-dvh w-screen bg-black text-blue-50'>
         <div className='flex flex-col size-full items-center py-10 pb-24'>
            <p className='section-legend'>The Multiversal Ip World</p>

            <div className='relative size-full'>
               <AnimatedTitle
                  title={"The St<b>o</b>ry of <br /> a hidden real<b>m</b>"}
                  containerClass={
                     "mt-5 pointer-events-none mix-blend-difference relative z-10"
                  }
                  sectionId='#story'
               />

               <div className='story-img-container'>
                  <div className='story-img-mask'>
                     <div className='story-img-content'>
                        <img
                           ref={frameRef}
                           onMouseMove={handleMouseMove}
                           onMouseLeave={handleMouseLeave}
                           onMouseUp={handleMouseLeave}
                           onMouseEnter={handleMouseLeave}
                           src='/img/entrance.webp'
                           alt='entrance'
                           className='object-contain'
                        />
                     </div>
                  </div>

                  <RoundedCorners />
               </div>
            </div>

            <div className='-mt-80 w-full flex justify-center md:-mt-64 md:me-44 md:justify-end'>
               <div className='w-fit h-full flex flex-col items-center md:items-start'>
                  <p className='mt-3 max-w-sm text-center md:text-start text-violet-50 font-circular-web'>
                     Where realms converge, lies Zentry and the boundless
                     pillar. Discover its secrets and shape your fate amidst
                     infinite opportunities.
                  </p>

                  <Button
                     id='realm-button'
                     title='Discover Prologue'
                     containerClass='mt-5'
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Story;
