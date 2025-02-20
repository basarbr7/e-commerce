import React from "react";
import { IoLocationOutline, IoTimeOutline,  } from "react-icons/io5";
import { Link } from "react-router-dom";

const OpenTime = ({ className }) => {
  return (
    <div className={`w-[262px] bg-[#ffffff] shadow-md ${className}`}>
      <div className="absolute -top-[6px] left-8 w-4 h-4 bg-[#ffffff] rounded-[2px] rotate-45">
      </div>
      <div className='time border-b border-6 px-4 py-4 text-7'>
        <div className="flex items-start gap-3">
          <IoTimeOutline  className=" text-[#0156FF] text-2xl" />
          <div className="text-[13px] font-semibold">
            <p className=" text-xs font-normal mb-1">We are open:</p>
            <ul className="flex flex-col gap-2">
              <li><span className="text-5 ">Mon-Thu:</span> 9:00 AM - 5:30 PM</li>
              <li><span className="text-5 ">Fr:</span> 9:00 AM - 6:00 PM</li>
              <li><span className="text-5 ">Sat:</span> 11:00 AM - 5:00 PM</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='address border-b border-6 px-4 py-4 text-7'>
        <div className="flex items-start gap-3">
          <div><IoLocationOutline  className=" text-[#0156FF] text-2xl" /></div>
          <div className="text-[13px]">
            <p className="font-normal">Address: 1234 Street Adress, City Address, 1234</p>
          </div>
        </div>
      </div>
      <div className='phnMail px-4 py-4 text-7 ml-10'>
        <div className="flex items-start gap-3">
          <div className="text-[13px]">
            <p className="font-normal mb-1"> Phones: <Link to='tel:(00) 1234 5678' className="text-3">(00) 1234 5678</Link></p>
            <p className="font-normal"> E-mail: <Link to='mailto:shop@email.com' className="text-3"> shop@email.com</Link></p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default OpenTime;
