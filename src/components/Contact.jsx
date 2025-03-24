import Button from "./ui/Button";

const ImageClipBox = ({ src, clipClass, alt }) => {
   return (
      <div className={clipClass}>
         <img src={src} alt={alt} />
      </div>
   );
};
const Contact = () => {
   return (
      <div id='contact' className='w-screen px-10 my-20 min-h-96'>
         <div className='relative py-24 bg-black rounded-lg text-blue-50 sm:overflow-hidden'>
            <div className='absolute top-0 hidden h-full overflow-hidden -left-20 w-72 sm:block lg:left-20 lg:w-96'>
               <ImageClipBox
                  src='img/contact-1.webp'
                  clipClass='contact-clip-path-1'
                  alt='contact-1'
               />

               <ImageClipBox
                  src='img/contact-2.webp'
                  clipClass='contact-clip-path-2 lg:translate-y-40 translate-y-60'
                  alt='contact-2'
               />
            </div>

            <div className='absolute left-20 -top-40 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80'>
               <ImageClipBox
                  src='img/swordman-partial.webp'
                  clipClass='absolute md:scale-125'
                  alt='swordman-partial'
               />
               <ImageClipBox
                  src='img/swordman.webp'
                  clipClass='sword-man-clip-path md:scale-125'
                  alt='swordman'
               />
            </div>

            <div className='flex flex-col items-center text-center'>
               <p className='font-general text-[10px] uppercase'>
                  {" "}
                  Join Zentry
               </p>
               <p className='special-font text-5xl mt-10 w-full font-zentry leading-[0-9] md:text-[6rem] '>
                  Let's b<b>u</b>ild the <br />
                  new era of <br /> g<b>a</b>ming t<b>o</b>gether
               </p>

               <Button
                  title='Contact Us'
                  containerClass={"mt-10 cursor-pointer"}
               />
            </div>
         </div>
      </div>
   );
};

export default Contact;
