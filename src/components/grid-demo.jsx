const GridDemo = () => {
   return (
      <section className='container mx-auto space-y-4 p-3'>
         <div className='flex flex-col gap-4 max-w-lg'>
            <h1 className='text-5xl font-bold'>
               Transforming Imagination into Reality
            </h1>
            <p className='text-xl'>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
               voluptas deserunt, corporis aut ad illo ipsam molestiae quam ut
               libero, nesciunt labore. Modi, consequatur accusamus.
            </p>
         </div>
         <div className='grid grid-cols-5 gap-4'>
            <div className='col-span-full lg:col-span-2 h-[300px] rounded-lg bg-black/20'>
               <div className='flex flex-col gap-4 justify-between h-full p-2'>
                  <div className='flex justify-between'>
                     <p className='text-base max-w-xs'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Laboriosam inventore cumque sit in necessitatibus
                        reiciendis, reprehenderit voluptatum .
                     </p>
                     <button className='text-sm font-semibold text-white p-2 bg-violet-300 rounded-full h-12'>
                        Read
                     </button>
                  </div>
                  <div className=''>Lorem ipsum dolor sit amet.</div>
               </div>
            </div>
            <div className='col-span-full lg:col-span-3 h-[300px] rounded-lg bg-black/20'>
               <div className='flex flex-col gap-4 justify-between h-full p-2'>
                  <div className='flex justify-between'>
                     <p className='text-base max-w-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Laboriosam inventore cumque sit in necessitatibus
                        reiciendis, reprehenderit voluptatum .
                     </p>
                     <button className='text-sm font-semibold text-white p-2 bg-violet-300 rounded-full h-12'>
                        Read
                     </button>
                  </div>
                  <div className=''>Lorem ipsum dolor sit amet.</div>
               </div>
            </div>
            <div className='col-span-full lg:col-span-3 h-[300px] rounded-lg bg-black/20'>
               <div className='flex flex-col gap-4 justify-between h-full p-2'>
                  <div className='flex justify-between'>
                     <p className='text-base max-w-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Laboriosam inventore cumque sit in necessitatibus
                        reiciendis, reprehenderit voluptatum .
                     </p>
                     <button className='text-sm font-semibold text-white p-2 bg-violet-300 rounded-full h-12'>
                        Read
                     </button>
                  </div>
                  <div className=''>Lorem ipsum dolor sit amet.</div>
               </div>
            </div>
            <div className='col-span-full lg:col-span-2 h-[300px] rounded-lg bg-black/20'>
               <div className='flex flex-col gap-4 justify-between h-full p-2'>
                  <div className='flex justify-between'>
                     <p className='text-base max-w-xs'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Laboriosam inventore cumque sit in necessitatibus
                        reiciendis, reprehenderit voluptatum .
                     </p>
                     <button className='text-sm font-semibold text-white p-2 bg-violet-300 rounded-full h-12'>
                        Read
                     </button>
                  </div>
                  <div className=''>Lorem ipsum dolor sit amet.</div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default GridDemo;
