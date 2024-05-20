"use client";

import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Block = () => {
  const [auth, setAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const key = Cookies.get("user");
    if (key) {
      setAuth(true);
      return;
    }
  }, [auth]);

  const handleLogout = () => {
    Cookies.remove("user");
    setAuth(false);
    router.push("/");
  };
  const blocks = [
    {
      img: "/demo.svg",
      tittle: "Become a Member",
      dis: "Additional 10% off an Stay",
    },
    {
      img: "/demo.svg",
      tittle: "OYO for Business",
      dis: "Trusted by 5000 Corporates",
    },
    {
      img: "/demo.svg",
      tittle: "List your Property",
      dis: "Start earning in 30 mins",
    },
    {
      img: "/demo.svg",
      tittle: "965-56464",
      dis: "Call us to Book now",
    },
  ];

  return (
    <div className=" h-full flex md:space-x-1 lg:w-[63%]">
      {blocks.map((block, ind) => {
        return (
          <div
            className=" lg:flex items-center border-r border-y-gray-200  md:px-2  hidden"
            key={ind}
          >
            <Image
              alt="img"
              src={block.img}
              width={100}
              height={50}
              className=" w-8 h-8"
            />
            <div className=" lg:px-2">
              <p className=" font-bold text-sm">{block.tittle}</p>
              <p className=" font-thin text-xs line-clamp-1">{block.dis}</p>
            </div>
          </div>
        );
      })}
      <div className="  h-full flex items-center justify-center lg:w-[180px] lg:px-1 px-5 ">
        {auth ? (
          <p className=" font-bold cursor-pointer" onClick={handleLogout}>
            Logout
          </p>
        ) : (
          <Link className=" font-bold" href={"/login"}>
            SignUp
          </Link>
        )}
      </div>
    </div>
  );
};

export default Block;
