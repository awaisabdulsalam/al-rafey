import { CgProfile } from "react-icons/cg";
import { IoPowerSharp } from "react-icons/io5";
import bgImage from "../assets/bgImage.png";
import profileImage from "../assets/profile.png";
import Pagination from "./Pagination";
import Profile from "./Profile";
const OrderHistory = () => {
  return (
    <>
      {/* <section
        className="flex justify-between py-5 px-20"
        style={{ backgroundImage: `url("${bgImage}")` }}
      >
        <div className="flex items-center">
          <div className="mb-[-70px]">
            <img src={profileImage} className="h-[207px]" alt="" />
          </div>
          <div>
            <h1 className="text-[#303030] text-4xl my-2 font-semibold">
              Shah Zaman
            </h1>
            <p>shahzaman@gmail.com</p>
            <button className="px-3 py-1 text-[14px] rounded-md text-white bg-[#262261]">
              Edit Profile
            </button>
          </div>
        </div>
        <div className="flex items-end">
          <div className="border-r-[1px] border-[#cccccc] px-6">
            <h1 className="text-2xl font-semibold text-[#303030]">47</h1>
            <p className="text-[#303030] font-normal">Orders</p>
          </div>
          <div className="border-r-[1px] border-l-[1px] border-[#cccccc] px-6">
            <h1 className="text-2xl font-semibold text-[#303030]">$7747</h1>
            <p className="text-[#303030] font-normal">Spent</p>
          </div>
          <div className="border-l-[1px] border-[#cccccc] px-6">
            <h1 className="text-2xl font-semibold text-[#303030]">47</h1>
            <p className="text-[#303030] font-normal">Points</p>
          </div>
        </div>
      </section> */}
    <Profile />
      <div className="flex flex-col md:flex-row justify-between gap-5 rounded px-10 py-10">
        {/*  */}
        <div className="w-[30%]">
          <div className="p-1 border-2 border-[#f0f2f6] rounded-lg">
            <button className="w-full flex items-center justify-between gap-2 p-2 my-2 text-[#fff] bg-[#262261] rounded-lg border-2 border-[#262261]">
              <span>User Profile Settings</span>
              <CgProfile />
            </button>
            <button className="w-full flex items-center justify-between gap-2 p-2 my-2 text-[#939393] bg-[#f0f2f6] rounded-lg border-2 border-[#f0f2f6]">
              <span>Orders History</span>
              <CgProfile />
            </button>
            <button className="w-full flex items-center justify-between gap-2 p-2 my-2 text-[#939393] bg-[#f0f2f6] rounded-lg border-2 border-[#f0f2f6]">
              <span>Addresses</span>
              <CgProfile />
            </button>
            <button className="w-full flex items-center justify-between gap-2 p-2 my-2 text-[#939393] bg-[#f0f2f6] rounded-lg border-2 border-[#f0f2f6]">
              <span>Payment Methods</span>
              <CgProfile />
            </button>
            <button className="w-full flex items-center justify-between gap-2 p-2 my-2 text-[#939393] bg-[#f0f2f6] rounded-lg border-2 border-[#f0f2f6]">
              <span>Order Tracking</span>
              <CgProfile />
            </button>
          </div>
          <div className="p-1 mt-4 border-2 border-[#faaf40] rounded-lg">
            <button className="w-full flex items-center justify-between gap-2 p-2 text-[#fff] bg-[#faaf40] rounded-lg border-2 border-[#faaf40]">
              <span>Order Tracking</span>
              <IoPowerSharp />
            </button>
          </div>
        </div>

        {/*  */}

        <div
          className="h-auto w-full mt-2  px-6 py-10 rounded-lg border-2"
          // style={{
          //   boxShadow:
          //     "5px 5px 10px rgba(0, 0, 0, 0.01), 5px 5px 10px rgba(0, 0, 0, 0.01), 5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(0, 0, 0, 0.1)",
          // }}
        >
          <h1 className="text-xl  font-semibold my-4">Orders History</h1>
          <div className="rounded-lg flex justify-between items-center px-4 py-4 bg-[#f6f9f8]">
              <h1 className="text-[#a8a8a8] text-lg">Order ID</h1>
              <h1 className="text-[#a8a8a8] text-lg">Amount</h1>
              <h1 className="text-[#a8a8a8] text-lg">Date</h1>
              <h1 className="text-[#a8a8a8] text-lg">Action</h1>
            </div>
            <div className="rounded-lg flex justify-between items-center px-4 py-4">
              <h1 className="text-[#262261] text-lg">#123123</h1>
              <h1 className="text-[#a8a8a8] text-lg ml-6">$2499</h1>
              <h1 className="text-[#a8a8a8] text-lg ">13/05/24</h1>
              <h1 className="text-[#a8a8a8] text-lg">Details</h1>
            </div>
            <div className="rounded-lg flex justify-between items-center px-4 py-4">
              <h1 className="text-[#262261] text-lg">#123123</h1>
              <h1 className="text-[#a8a8a8] text-lg ml-6">$2499</h1>
              <h1 className="text-[#a8a8a8] text-lg ">13/05/24</h1>
              <h1 className="text-[#a8a8a8] text-lg">Details</h1>
            </div>
            <div className="rounded-lg flex justify-between items-center px-4 py-4">
              <h1 className="text-[#262261] text-lg">#123123</h1>
              <h1 className="text-[#a8a8a8] text-lg ml-6">$2499</h1>
              <h1 className="text-[#a8a8a8] text-lg ">13/05/24</h1>
              <h1 className="text-[#a8a8a8] text-lg">Details</h1>
            </div>



            <hr />

            <div className="flex justify-end my-2">
              <div>
                <Pagination />
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
