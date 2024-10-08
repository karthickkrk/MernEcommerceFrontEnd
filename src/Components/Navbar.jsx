import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} alt="Logo" className="h-10" />
      <ul className="hidden sm:flex gap-5 text-sm text-[#243665] uppercase">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="hidden w-2/4 border-none h-[1.5px] bg-[#8bd8bd]" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="hidden w-2/4 border-none h-[1.5px] bg-[#8bd8bd]" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="hidden w-2/4 border-none h-[1.5px] bg-[#8bd8bd]" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="hidden w-2/4 border-none h-[1.5px] bg-[#8bd8bd]" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="search icon"
          className="w-5 cursor-pointer"
        />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt="profile icon"
            className="w-5 cursor-pointe"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36   bg-[#243665] text-[#8bd8bd] rounded">
              <p className="cursor-pointer px-5 py-2 hover:bg-[#8bd8bd] hover:text-[#243665]">
                My Profile
              </p>
              <p className="cursor-pointer px-5 py-2 hover:bg-[#8bd8bd] hover:text-[#243665]">
                Orders
              </p>
              <p className="cursor-pointer px-5 py-2 hover:bg-[#8bd8bd] hover:text-[#243665]">
                Logout
              </p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="cart icon" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            0
          </p>
        </Link>
        <img
          onClick={()=>setVisible(true)}
          src={assets.menu_icon}
          alt="mobile menu icon"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>
      {/* Side Menu for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col  text-[#243665]">
          <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="back icon" />
            <p className="text-sm">Back</p>
          </div>
          <div className="flex flex-col gap-4 px-3 py-6">
            <NavLink onClick={()=> setVisible(false)}  to="/" className="text-sm">
              Home
            </NavLink>
            <NavLink onClick={()=> setVisible(false)} to="/collection" className="text-sm">
              Collection
            </NavLink>
            <NavLink onClick={()=> setVisible(false)} to="/about" className="text-sm">
              About
            </NavLink>
            <NavLink onClick={()=> setVisible(false)} to="/contact" className="text-sm">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
          
 
};

export default Navbar;
