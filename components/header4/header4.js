"use client";

import Image from "next/image";

const Header4 = () => {
  return (
    <div>
      <Image
        src={"/banner1.avif"}
        alt="banner"
        width={300}
        height={300}
        priority={true} // {false} | {true}
        className=" md:w-[95vw] w-full h-[250px] mt-5 md:m-auto"
      />
      <Image
        src={"/banner2.avif"}
        alt="img"
        width={300}
        height={300}
        className=" md:w-[95vw] w-full h-[170px] my-10 md:m-auto"
      />
      <div className="flex justify-between items-center my-12 border-2 rounded-lg border-gray-300 lg:px-5 lg:w-[90vw] w-full  m-auto h-[100px]">
        <div className="md:flex items-center hidden ">
          <Image
            src={"/fire.jpg"}
            alt="fire"
            width={50}
            height={50}
            className=" w-20 h-20 rounded-full mr-5"
          />
          <div className=" text-[17px] hidden md:block ">
            <p className=" font-bold">Get access to exclusive deals</p>
            <p className=" md:line-clamp-1 lg:line-clamp-2">
              Only the best deals reach your inbox
            </p>
          </div>
        </div>
        <div className="flex px-2">
          <input
            type="email"
            className="px-6 py-3 rounded-lg mr-5 md:w-80 w-[200px] h-12 outline-none border border-gray-300"
            placeholder="e.g. john@gmail.com"
          />
          <button
            type="submit"
            className=" lg:w-48 w-[100px] rounded-lg h-12 bg-red-500 md:text-xl text-sm text-white 
             font-bold cursor-pointer "
          >
            Notify
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header4;
