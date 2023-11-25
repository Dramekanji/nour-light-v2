// import React, { useState } from "react";
// import {
//   FaBars,
//   FaTimes,
//   FaTiktok,
//   FaInstagram,
//   FaFacebookF,
// } from "react-icons/fa";
// import Link from "next/link";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const handleClick = () => setNav(!nav);

//   return (
//     <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-yellow-400 text-gray-300 z-20">
//       <div>
//         <img
//           src="/assets/images/nourlight.png"
//           alt="Logo Image"
//           style={{ width: "100px" }}
//         />
//       </div>

//       {/* menu */}
//       <ul className="hidden md:flex">
//         <li>
//           <Link href="/" smooth={true} duration={500}>
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link href="/#about" smooth={true} duration={500}>
//             About
//           </Link>
//         </li>
//         <li>
//           <Link href="/#locations" smooth={true} duration={500}>
//             Locations
//           </Link>
//         </li>
//         <li>
//           <Link href="/#contact" smooth={true} duration={500}>
//             Contact
//           </Link>
//         </li>
//         <li>
//           <Link href="order" smooth={true} duration={500}>
//             Order
//           </Link>
//         </li>
//       </ul>

//       {/* Hamburger */}
//       <div onClick={handleClick} className="md:hidden z-10">
//         {!nav ? <FaBars /> : <FaTimes />}
//       </div>

//       {/* Mobile menu */}
//       <ul
//         className={
//           !nav
//             ? "hidden"
//             : "absolute top-0 left-0 w-full h-screen bg-yellow-400 flex flex-col justify-center items-center"
//         }
//       >
//         <li className="py-6 text-4xl">
//           <Link onClick={handleClick} href="/" smooth={true} duration={500}>
//             Home
//           </Link>
//         </li>
//         <li className="py-6 text-4xl">
//           {" "}
//           <Link
//             onClick={handleClick}
//             href="#about"
//             smooth={true}
//             duration={500}
//           >
//             About
//           </Link>
//         </li>
//         <li className="py-6 text-4xl">
//           {" "}
//           <Link
//             onClick={handleClick}
//             href="#locations"
//             smooth={true}
//             duration={500}
//           >
//             Locations
//           </Link>
//         </li>
//         <li className="py-6 text-4xl">
//           {" "}
//           <Link
//             onClick={handleClick}
//             href="#contact"
//             smooth={true}
//             duration={500}
//           >
//             Contact
//           </Link>
//         </li>
//         <li className="py-6 text-4xl">
//           {" "}
//           <Link
//             onClick={handleClick}
//             href="contact"
//             smooth={true}
//             duration={500}
//           >
//             Order
//           </Link>
//         </li>
//       </ul>

//       {/* Social icons */}
//       <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
//         <ul>
//           <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
//             <a
//               className="flex justify-between items-center w-full text-gray-300"
//               href="/"
//             >
//               TikTok <FaTiktok size={30} />
//             </a>
//           </li>
//           <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
//             <a
//               className="flex justify-between items-center w-full text-gray-300"
//               href="/"
//             >
//               Instagram <FaInstagram size={30} />
//             </a>
//           </li>
//           <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
//             <a
//               className="flex justify-between items-center w-full text-gray-300"
//               href="/"
//             >
//               Facebook <FaFacebookF size={30} />
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {
  FaBars,
  FaTimes,
  FaTiktok,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
// import { useRouter } from 'next/router';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#FFD700");
  const [linkColor, setLinkColor] = useState("#1f2937");
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/" legacyBehavior>
          <a>
            <Image
              src="/assets/images/nourlight.png"
              alt="/"
              width="100"
              height="100"
              className="cursor-pointer"
            />
          </a>
        </Link>
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b border-[#CD5C5C]">
              <Link href="/" legacyBehavior>
                Home
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b border-[#CD5C5C]">
              <Link href="/#about" legacyBehavior>
                About
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b border-[#CD5C5C]">
              <Link href="/#locations" legacyBehavior>
                Locations
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b border-[#CD5C5C]">
              <Link href="/#contact" legacyBehavior>
                Contact
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b border-[#CD5C5C]">
              <Link href="/resume" legacyBehavior>
                Order
              </Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: "#CD5C5C" }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#FFD700] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/" legacyBehavior>
                <a>
                  <Image
                    src="/assets/images/nourlight.png"
                    width="87"
                    height="35"
                    alt="/"
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 text-[#FFD700] cursor-pointer hover:scale-125 transition duration-300 bg-[#CD5C5C]"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-[#CD5C5C] my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/" legacyBehavior>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about" legacyBehavior>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#locations" legacyBehavior>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Locations
                </li>
              </Link>
              <Link href="/#contact" legacyBehavior>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
              <Link href="/" legacyBehavior>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Order
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#CD5C5C]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a href="/" target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg text-[#CD5C5C] shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaTiktok />
                  </div>
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg text-[#CD5C5C] shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaInstagram />
                  </div>
                </a>
                <Link href="/">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg text-[#CD5C5C] shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <FaFacebookF />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* Social icons */}{" "}
          <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            {" "}
            <ul>
              {" "}
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 tiktok-bg">
                {" "}
                <a
                  className="flex justify-between items-center w-full text-white"
                  href="/"
                >
                  TikTok <FaTiktok size={30} />
                </a>
              </li>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 gradient-bg">
                <a
                  className="flex justify-between items-center w-full text-white"
                  href="/"
                >
                  Instagram <FaInstagram size={30} />
                </a>
              </li>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1877F2]">
                <a
                  className="flex justify-between items-center w-full text-white"
                  href="/"
                >
                  Facebook <FaFacebookF size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
