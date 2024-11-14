import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <nav className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/" className='ml-5'>
          <div>
            <img src="../logo.png" alt="" />
          </div>
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div>
              <FaShoppingCart />
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
