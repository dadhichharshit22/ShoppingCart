import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
      <nav>
        <NavLink to="/" className='ml-5'>
          <div>
            <img src="../logo.png" alt="" className="h-14" />
          </div>
        </NavLink>
        <div className="flex flex-row items-center gap-x-6 mr-6 text-slate-100 -tracking-tighter font-medium">
          <NavLink to="/">
            <p className="hover:text-green-400 cursor-pointer duration-300 transition-all ease-in">Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl "/>
              {
              cart.length > 0 &&
              <span className="absolute -top-1 -right-2 bg-green-600 rounded-full text-sm w-5 h-5 grid justify-items-center animate-bounce text-white">{cart.length}</span>
            }
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
