const Button = ({ title, id, leftIcon, rightIcon, containerClass }) => {
   return (
      <button
         id={id}
         className={`group w-fit relative z-10 cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
      >
         {leftIcon}
         <span
            className={
               "relative inline-flex overflow-hidden font-general text-xs uppercase font-semibold"
            }
         >
            <div>{title}</div>
         </span>

         {rightIcon}
      </button>
   );
};
export default Button;
