import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {add,remove} from "../redux/Slices/CartSlice"

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
  dispatch(remove(post.id));
  toast.error("Item removed from Cart");
  }

  return (
    <div className="flex flex-col items-center justify-between bg-white hover:scale-110 transition-all duration-300  ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] ">
      <div>
        <h1 className="text-gray-700 font-semibold text-lg text-left truncate mt-1 w-40">{post.title}</h1>
      </div>
      <div className="w-40 text-gray-400 font-normal text-[10px] text-left">
        <p>{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} alt=""  className="h-full w-full" />
      </div>
      <div className="flex justify-between items-center w-full mt-5">
        <p className="text-green-600 font-semibold">{post.price}</p>
      </div>

      {cart.some((p) => p.id === post.id) ? (
        <button className="border-2 border-gray-700 text-gray-700 uppercase font-semibold px-3 py-1 rounded-full text-[12px] transition-all duration-300 ease-in hover:text-white hover:bg-gray-700" onClick={removeFromCart}>Remove Item</button>
      ) : (
        <button onClick={addToCart} className="border-2 border-gray-700 text-gray-700 uppercase font-semibold px-3 py-1 rounded-full text-[12px] transition-all duration-300 ease-in hover:text-white hover:bg-gray-700">Add to cart</button>
      )}
    </div>
  );
};

export default Product;
