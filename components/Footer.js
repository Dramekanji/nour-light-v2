import React from "react";
import { FaTiktok, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="h-64 bg-[#CD5C5C] pt-10">
      <div className=" w-5/6 mx-auto">
        <div className="flex justify-center md:justify-start my-10 gap-7">
          <FaTiktok size={30} color="#F5F5DC" />
          <FaInstagram size={30} color="#F5F5DC" />
          <FaFacebookF size={30} color="#F5F5DC" />
        </div>
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-semibold text-4xl text-[#F5F5DC]">NourLight</p>
          <p className=" text-xl text-[#F5F5DC]">
            &copy;2023 NourLight. All Rights Reserved{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
