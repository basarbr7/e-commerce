import React from 'react';
import Container from '../../layer/Container';
import { Link } from 'react-router-dom';
import { RiFacebookBoxFill } from 'react-icons/ri';
import { FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-4">
     <Container>
       {/* Newsletter Section */}
        <div className="pb-10 mb-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            {/* Left Content */}
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                Sign Up To Our Newsletter.
              </h2>
              <p className="text-gray-400">
                Be the first to hear about the latest offers.
              </p>
            </div>

            {/* Right Form */}
            <form className="w-full max-w-md flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-3 rounded-md text-white outline-none border border-white bg-transparent placeholder:text-gray-300"
              />
              <button
                type="submit"
                className="bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-700 transition whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-sm text-gray-400">
          {/* Column 1: Information */}
          <div>
            <h3 className="text-white font-semibold mb-2">Information</h3>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>About Zip</li>
              <li>Privacy Policy</li>
              <li>Search</li>
              <li>Terms</li>
              <li>Orders and Returns</li>
              <li>Contact Us</li>
              <li>Advanced Search</li>
              <li>Newsletter Subscription</li>
            </ul>
          </div>

          {/* Column 2: PC Parts */}
          <div>
            <h3 className="text-white font-semibold mb-2">PC Parts</h3>
            <ul className="space-y-1">
              <li>CPUs</li>
              <li>Add On Cards</li>
              <li>Hard Drives (internal)</li>
              <li>Graphic Cards</li>
              <li>Keyboard / Mouse</li>
              <li>Cases / Power Supplies / Cooling</li>
              <li>RAM (Memory)</li>
              <li>Software</li>
              <li>Speakers / Headsets</li>
              <li>Motherboards</li>
            </ul>
          </div>

          {/* Column 3: Desktop PCs */}
          <div>
            <h3 className="text-white font-semibold mb-2">Desktop PCs</h3>
            <ul className="space-y-1">
              <li>Custom PCs</li>
              <li>Servers</li>
              <li>MSI All-in-One PCs</li>
              <li>HP/Compaq PCs</li>
              <li>ASUS PCs</li>
              <li>Teac PCs</li>
            </ul>
          </div>

          {/* Column 4: Laptops */}
          <div>
            <h3 className="text-white font-semibold mb-2">Laptops</h3>
            <ul className="space-y-1">
              <li>Everyday Use Notebooks</li>
              <li>MSI Workstation Series</li>
              <li>MSI Prestige Series</li>
              <li>Tablets and Pads</li>
              <li>Notebooks</li>
              <li>Infinity Gaming Notebooks</li>
            </ul>
          </div>

          {/* Column 5: Address */}
          <div>
            <h3 className="text-white font-semibold mb-2">Address</h3>
            <p>Address: 1234 Street Address City Address, 1234</p>
            <p>Phones: <a className="text-blue-400" href="tel:0012345678">(00) 1234 5678</a></p>
            <p>We are open: Monday - Thursday: 9:00 AM - 5:30 PM</p>
            <p>Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 11:00 AM - 5:00 PM</p>
            <p>Email: <a className="text-blue-400" href="mailto:shop@email.com">shop@email.com</a></p>
          </div>
        </div>

        <hr className='mt-9 h-[1px] bg-[#2e2e2e] border-none'/>
        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-5 text-sm text-gray-500">
          <div className="flex gap-4 mb-4 sm:mb-0">
            <Link to="/"> <RiFacebookBoxFill /></Link>
            <Link to="/"> <FiInstagram /></Link>
          </div>
          <div className="flex gap-3">
            <img src="/icons/paypal.png" alt="PayPal" className="h-5" />
            <img src="/icons/visa.png" alt="Visa" className="h-5" />
            <img src="/icons/mastercard.png" alt="MasterCard" className="h-5" />
            <img src="/icons/amex.png" alt="Amex" className="h-5" />
          </div>
          <p className="mt-4 sm:mt-0">Copyright © 2025 Shop Pty. Ltd.</p>
        </div>
     </Container>
    </footer>
  );
};

export default Footer;
