import React, { useState } from "react";
import Container from "../../layer/Container";
import Flex from "../../layer/Flex";
import { Link } from "react-router-dom";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import OpenTime from "./OpenTime";

const Header = () => {

  let [show, setShow]= useState(false)

  return (
    <>
      <header className="bg-[#020202] font-semibold text-xs">
        <Container className='py-2'>
          <Flex className="items-center justify-between text-white">
            <div className="flex items-center justify-center relative" >
              <span className="text-[#A2A6B0]">Mon-Thu:</span> &nbsp; <span onClick={()=>setShow(!show)} className="flex items-center justify-center cursor-pointer">9:00 AM -5:30 PM &nbsp; <FaAngleDown className=" text-md select-none" /></span>

              <OpenTime className={`${show ? "opacity-100 visible":"opacity-0 invisible"} absolute top-[150%] left-0 transition-opacity duration-400`}/>

            </div>
            <p className="text-[#acacac]">
              Visit our showroom in 1234 Street Adress City Address, 1234 &nbsp;
              <Link className='relative text-[#ffffff] after:content-[""] after:absolute after:w-[73px] after:h-[2px] after:-bottom-1 after:left-1/2 after:-translate-1/2 after:bg-[#ffffff] after:rounded-[1px]' to="/contact" >Contact Us</Link>
            </p>
            <Flex className="gap-[14px] items-center">
              <p>
                Call Us: <Link to="tel:(00) 1234 5678">(00) 1234 5678</Link>
              </p>
              <Flex className="gap-2 items-center text-xl">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoFacebook />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
                {/* <Link to='https://www.facebook.com/'><IoLogoFacebook /></Link> 
                        <Link to='https://www.instagram.com/'><AiFillInstagram /></Link>*/}
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </header>
    </>
  );
};

export default Header;
