import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from "react-icons/fa";

const Links = [
   {
      href: "https://www.discord.com",
      icon: <FaDiscord />,
   },
   {
      href: "https://www.twitter.com",
      icon: <FaTwitter />,
   },
   {
      href: "https://www.github.com",
      icon: <FaGithub />,
   },
   {
      href: "https://www.twitch.com",
      icon: <FaTwitch />,
   },
];

const Footer = () => {
   return (
      <footer className='w-screen py-4 text-black bg-violet-300'>
         <div className='container flex flex-col items-center justify-between gap-4 px-4 mx-auto md:flex-row'>
            <p className='text-sm text-center md:text-left'>
               &copy; Nova 2024. All rights reserved.
            </p>

            <div className='flex justify-center gap-4 md:justify-start'>
               {Links.map((link) => (
                  <a
                     key={link}
                     href='{link.href}'
                     target='_blank'
                     rel='noreferrer noopener'
                     className='text-black transition-colors duration-500 hover:text-white'
                  >
                     {link.icon}
                  </a>
               ))}
            </div>

            <a
               href='#privacy-policy'
               className='text-sm text-center hover:underline md:text-right'
            >
               Privacy Policy
            </a>
         </div>
      </footer>
   );
};

export default Footer;
