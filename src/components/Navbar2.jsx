import { BiHeart, BiBell } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useContext, useState, useRef, useEffect } from "react";
import { userContext } from "../App.jsx";
import men from "../assets/men.jpg";
import logoImage from "../assets/logo.png";
import CategoryProduct from "./CategoryProduct.jsx";

const Navbar2 = ({ totalPrice, products, lessProducts, addToCart }) => {

  const [addCartNum, favourite] = useContext(userContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectCategory, setSelectCategory] = useState("categories");
  const [categoryText, setCategoryText] = useState(false);
  const [quantity, setQuantity] = useState(products.map(product => product.quantity));
  const [inputValue, setInputValue] = useState("") 
  const [showNav, setShowNav] = useState(false);


  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.addEventListener("mouseup", handleClickOutside);
    }
  }, [])

  const updateQuantity = (index, newQuantity) => {
    const newQuantities =  [...quantity];
    newQuantities[index] = newQuantity;
    setQuantity(newQuantities);
  }


  return (
    <>
      <nav 
        style={{
          boxShadow:
            "0 8px 12px rgba(0, 10, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
        }}
      className="sticky top-0 z-10 relative bg-[#262261] text-white flex justify-between items-center px-4 py-4">
        <div className="flex flex-1 items-center">
          <Link to="/al-rafey">
          <img
            src={logoImage}
            alt="Logo"
            className="md:h-[40px] sm:h-[20px] md:w-[202px] sm:w-[200px] mr-2 cursor-pointer"
          />
          </Link>
        </div>

        <div className="sm:flex sm:flex-[3] md:mx-10 sm:mx-5">
          <select value={selectCategory} onChange={(e) => {
            setSelectCategory(e.target.value)
            setCategoryText(true);
          }} className="sm:py-0 sm:px-5 sm:text-[10px] md:text-[16px] bg-[#FAAF40]  px-4 sm:rounded-tl-[4px] sm:rounded-bl-[4px] sm:flex-1">
            <option value="category" default>
              Category
            </option>
            <option value="men">Men</option>  
            <option value="women">Women</option>
            <option value="mobile">Mobile</option>
          </select>
          <div className="flex sm:rounded-tr-[4px]  sm:rounded-br-[4px] sm:w-full  relative border bg-white">
            <input
              value={inputValue}
              onChange={(e) => {setInputValue(e.target.value)}}
              type="text"
              placeholder="Search"
              className="sm:py-[5px] sm:px-[4px] sm:text-[10px] md:text-[16px] bg-white text-gray-500 py-2.5 px-5 sm:flex-2 sm:w-full"
            ></input>
            <IoSearch className="sm:h-[10px] md:h-[20px] sm:w-[10px] md:w-[15px] sm:-right-4 sm:-top-0 text-gray-700 mt-2 mr-5 absolute md:right-0 md:-top-[0px]  cursor-pointer" />
          </div>
        </div>

          <div>
          {showNav ? <RxCross1 className="md:hidden h-4 w-4 mr-4 cursor-pointer" onClick={() => setShowNav(!showNav)} /> : <GiHamburgerMenu onClick={() => setShowNav(!showNav)} className="md:hidden h-4 w-4 mr-4 cursor-pointer" />}
        </div>

        <div className="nav_show flex flex-1 justify-end items-center gap-4 relative">
          <Link to="/al-rafey/profile">
            <FaRegUser className="h-6 w-6 mr-4 cursor-pointer hover:text-[#807bd1]" />
          </Link>

          <div className="relative">
            <Link to="/al-rafey/favourites">
            <BiHeart className="h-6 w-6 mr-4 cursor-pointer hover:text-[#807bd1]" />
            <span className="absolute -top-1 right-2 bg-[#FAAF40] text-white text-xs rounded-full px-1">
              {favourite}
            </span>
            </Link>
          </div>
          <div className="relative">
            <BiBell className="h-6 w-6 mr-4 cursor-pointer relative hover:text-[#807bd1]"></BiBell>
            <span className="absolute -top-1 right-3 bg-[#FAAF40] text-white text-xs rounded-full px-1">
              9+
            </span>
          </div>
        <div ref={menuRef} className="h-auto relative right-[5px] p-[10px]">
          <div className="navbar-toggle">
            <Link to="/al-rafey/checkout">
            <LuShoppingCart className="h-6 w-6 cursor-pointer relative hover:text-[#807bd1]" />
            <span className="absolute top-1 left-6 bg-[#FAAF40] text-white text-xs rounded-full px-1">
              {addCartNum}
            </span>
          </Link>
          </div>
        </div>
          <span className="ml-2">{!totalPrice ? "00.0" : `$${totalPrice}`}</span>
        </div>

          {showNav && 
          <div className="nav_hide w-40 bg-[#fff] py-10 px-5 flex-col justify-center items-center absolute right-0 top-[58px]">
            <div className="flex justify-center my-2">
          <Link to="/al-rafey/profile">
            <FaRegUser className="h-6 w-6 mr-4 cursor-pointer text-[#333] hover:text-[#807bd1]" />
          </Link>
            </div>

          <div className="flex justify-center relative my-2">
            <BiHeart className="h-6 w-6 mr-4 cursor-pointer text-[#333] hover:text-[#807bd1]" />
            <span className="absolute -top-1 right-12 bg-[#FAAF40] text-white text-xs rounded-full px-1">
              {favourite}
            </span>
          </div>
          <div className="flex justify-center relative my-2">
            <BiBell className="h-6 w-6 mr-4 cursor-pointer text-[#333] relative hover:text-[#807bd1]"></BiBell>
            <span className="absolute -top-1 right-12 bg-[#FAAF40] text-white text-xs rounded-full px-1">
              9+
            </span>
          </div>
        <div ref={menuRef} className="h-auto relative right-[5px] p-[10px] my-2">
          <div className="flex justify-center cursor-pointer">
          <Link to="/al-rafey/cart">
            <LuShoppingCart className="h-6 w-6 cursor-pointer text-[#333] relative hover:text-[#807bd1]" />
            <span className="absolute top-1 right-10 bg-[#FAAF40] text-white text-xs rounded-full px-1">
              {addCartNum}
            </span>
          </Link>
          </div>
        </div>
        <div className="flex justify-center">

          <span className="ml-2 text-[#333]">{!totalPrice ? "00.0" : `$${totalPrice}`}</span>
        </div>
        </div>}
      </nav>

      {categoryText && <CategoryProduct selectCategory={selectCategory} products={products} lessProducts={lessProducts} inputValue={inputValue} />}
      

    </>
  );
};

export default Navbar2;

