import { FaStar, FaShoppingCart } from "react-icons/fa";
import { TbHeart } from "react-icons/tb";
import { LuShoppingCart } from "react-icons/lu";
import men from "../assets/men.jpg";

const MensProduct = () => {
  return (
    <section className="px-20 my-10">
      <div className="flex justify-between border-b-[1px] border-[#d5e1e1]">
        <h1 className="py-2 text-3xl border-b-[3px] border-[#4cd0e0]">
          Mens Fashion
        </h1>
        <button className="text-xl py-2 px-4 rounded-lg border-[1px] border-[#d5e1e1]">
          Show More
        </button>
      </div>

      {/************    Product Cart   **************/}
      <div className="flex gap-4 py-10">
        <div className="flex-1 py-3 px-4 shadow-lg shadow-[#cccece] mx-auto rounded-md overflow-hidden">
          <div className="relative">
            <div className="cursor-pointer">
            <TbHeart className="absolute top-0 right-0 m-2 p-1 rounded-full text-3xl text-gray-400 bg-white border-2" />
            </div>
            <img src={men} alt="Product" className="rounded-md h-[200px] w-full" />
          </div>
          <div className="py-4">
            <h2 className="text-xl mb-2">Product Name</h2>
            <div className="text-gray-400 text-xl mb-2">$19.99</div>
            <div className="flex gap-1 mb-2">
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
            </div>
                <p className="text-gray-400 text-sm">(234 Reviews)</p>

          </div>
            <button className="flex justify-center items-center bg-[#262261] text-white w-full px-2 py-1 rounded-md">
              <LuShoppingCart className="" />
              <span className="mx-2">|</span> Add to Cart
            </button>
        </div>
        <div className="flex-1 py-3 px-4 shadow-lg shadow-[#cccece] mx-auto rounded-md overflow-hidden">
          <div className="relative">
            <div className="cursor-pointer">
            <TbHeart className="absolute top-0 right-0 m-2 p-1 rounded-full text-3xl text-gray-400 bg-white border-2" />
            </div>
            <img src={men} alt="Product" className="rounded-md h-[200px] w-full" />
          </div>
          <div className="py-4">
            <h2 className="text-xl mb-2">Product Name</h2>
            <div className="text-gray-400 text-xl mb-2">$19.99</div>
            <div className="flex gap-1 mb-2">
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
            </div>
                <p className="text-gray-400 text-sm">(234 Reviews)</p>

          </div>
            <button className="flex justify-center items-center bg-[#262261] text-white w-full px-2 py-1 rounded-md">
              <LuShoppingCart className="" />
              <span className="mx-2">|</span> Add to Cart
            </button>
        </div>
        <div className="flex-1 py-3 px-4 shadow-lg shadow-[#cccece] mx-auto rounded-md overflow-hidden">
          <div className="relative">
            <div className="cursor-pointer">
            <TbHeart className="absolute top-0 right-0 m-2 p-1 rounded-full text-3xl text-gray-400 bg-white border-2" />
            </div>
            <img src={men} alt="Product" className="rounded-md h-[200px] w-full" />
          </div>
          <div className="py-4">
            <h2 className="text-xl mb-2">Product Name</h2>
            <div className="text-gray-400 text-xl mb-2">$19.99</div>
            <div className="flex gap-1 mb-2">
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
            </div>
                <p className="text-gray-400 text-sm">(234 Reviews)</p>

          </div>
            <button className="flex justify-center items-center bg-[#262261] text-white w-full px-2 py-1 rounded-md">
              <LuShoppingCart className="" />
              <span className="mx-2">|</span> Add to Cart
            </button>
        </div>
        <div className="flex-1 py-3 px-4 shadow-lg shadow-[#cccece] mx-auto rounded-md overflow-hidden">
          <div className="relative">
            <div className="cursor-pointer">
            <TbHeart className="absolute top-0 right-0 m-2 p-1 rounded-full text-3xl text-gray-400 bg-white border-2" />
            </div>
            <img src={men} alt="Product" className="rounded-md h-[200px] w-full" />
          </div>
          <div className="py-4">
            <h2 className="text-xl mb-2">Product Name</h2>
            <div className="text-gray-400 text-xl mb-2">$19.99</div>
            <div className="flex gap-1 mb-2">
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
            </div>
                <p className="text-gray-400 text-sm">(234 Reviews)</p>

          </div>
            <button className="flex justify-center items-center bg-[#262261] text-white w-full px-2 py-1 rounded-md">
              <LuShoppingCart className="" />
              <span className="mx-2">|</span> Add to Cart
            </button>
        </div>
        <div className="flex-1 py-3 px-4 shadow-lg shadow-[#cccece] mx-auto rounded-md overflow-hidden">
          <div className="relative">
            <div className="cursor-pointer">
            <TbHeart className="absolute top-0 right-0 m-2 p-1 rounded-full text-3xl text-gray-400 bg-white border-2" />
            </div>
            <img src={men} alt="Product" className="rounded-md h-[200px] w-full" />
          </div>
          <div className="py-4">
            <h2 className="text-xl mb-2">Product Name</h2>
            <div className="text-gray-400 text-xl mb-2">$19.99</div>
            <div className="flex gap-1 mb-2">
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
                <FaStar className="text-yellow-500 text-sm" />
            </div>
                <p className="text-gray-400 text-sm">(234 Reviews)</p>

          </div>
            <button className="flex justify-center items-center bg-[#262261] text-white w-full px-2 py-1 rounded-md">
              <LuShoppingCart className="" />
              <span className="mx-2">|</span> Add to Cart
            </button>
        </div>
      </div>

      {/* </div> */}
      
    </section>
  );
};

export default MensProduct;