// import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";
import { GiZebraShield } from "react-icons/gi";
import { RiArrowDropDownFill } from "react-icons/ri";
import { AiOutlineComment } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiArrowRightSFill } from "react-icons/ri";
import { RiLock2Line } from "react-icons/ri";
// import { BsHourglass } from "react-icons/bs";
// import { BsPerson } from "react-icons/bs";
// import { BiMessageDetail } from "react-icons/bi";
// import { FiSettings } from "react-icons/fi";
// import { VscSymbolOperator } from "react-icons/vsc";

const Home = () => {
  return (
    <div className="bg-white w-[80vw] h-[100vh]">
      <div className="flex justify-between mx-auto  m-10 p-10">
        <div className="flex">
          <h1 className="mt-1 ml-3 font-semibold text-gray-800">Home</h1>
        </div>
        <div className="flex">
          <div className=" h-14 w-14 rounded-full">
            <IoMdNotificationsOutline size={30} className="m-4 color-white" />
          </div>
          <div className=" h-14 w-14 rounded-full">
            <RiSearch2Line size={30} className="m-4 color-white" />
          </div>
          <div className=" h-14 w-14 rounded-full">
            <GiZebraShield size={30} className="m-4 color-white" />
          </div>
          <div className=" h-14 w-14 rounded-full">
            <RiArrowDropDownFill size={30} className="m-4 color-white" />
          </div>
        </div>
      </div>
      <div className=" h-32 w-4/5 ml-16 mt-16 flex justify-between">
        <div className="flex">
          <button className=" h-14 w-14 bg-green-600 rounded-full">
            <AiOutlineComment color="white" size={30} className="mt-0.5 ml-3" />
          </button>
          <span className="mt-5 ml-3 font-semibold text-gray-800">
            Homework Help
          </span>
        </div>

        <div className="flex">
          <div className=" h-14 w-14 bg-yellow-400 rounded-full">
            <FaRegCalendarAlt color="white" size={30} className="m-4" />
          </div>
          <span className="mt-4 ml-3 font-semibold text-gray-800">
            My Lessons
          </span>
        </div>

        <div className="flex">
          <div className=" h-14 w-14 bg-red-400 rounded-full">
            <RiArrowRightSFill color="white" size={30} className="m-3" />
          </div>
          <span className="mt-4 ml-4 font-semibold text-gray-800">
            Videos Library
            <button className=" bg-red-600 ml-4 mr-4 rounded-md p-1">
              <span className="text-lg text-white">Free</span>
            </button>
          </span>
        </div>

        <div className="flex">
          <div className=" h-14 w-14 bg-purple-600 rounded-full">
            <RiLock2Line color="white" size={30} className="mt-4 ml-3" />
          </div>
          <span className="mt-5 ml-4 font-semibold text-gray-800">
            Get A Learning Plan
          </span>
        </div>
      </div>

      {/* <button className="h-6 w-4/5 ml-16 mt-5 flex justify-between">
        <span className="font-semibold"> Videos</span>
        <button className="bg-gray-800 rounded-md text-ms px-3 px-6 text-white">
          SEE ALL
        </button>
      </button> */}

      <div className=" ml-16 mt-5 flex flex-row">
        {/* <div className="rounded-xl bg-white flex flex-col  h-40 w-60">
          <video
            className="object-fill"
            src=""
            type="video/mp4"
            controls
          ></video>
          <span className="text-purple-600 text-sm p-1"> Videos</span>
          <span className="font-semibold text-lg p-1">Videos</span>

          <div className="flex flex-row p-1">
            <BsHourglass />
            <span className="text-gray-600 text-sm ml-1">Videos</span>
          </div>

          <div className="flex flex-row p-1">
            <BsPerson />
            <span className="text-gray-600 text-sm ml-1">Videos</span>
          </div>
        </div> */}

        {/* <div className="rounded-xl bg-white flex flex-col  h-70 w-60 ml-20">
          <video
            className="object-fill"
            src=""
            type="video/mp4"
            controls
          ></video>
          <span className="text-purple-600 text-sm p-1"> Videos</span>
          <span className="font-semibold text-lg p-1"> Videos</span>

          <div className="flex flex-row p-1">
            <BsHourglass />
            <span className="text-gray-600 text-sm ml-1">Videos</span>
          </div>

          <div className="flex flex-row p-1">
            <BsPerson />
            <span className="text-gray-600 text-sm ml-1"> Videos</span>
          </div>
        </div> */}

        <div className="rounded-xl bg-white flex flex-col  h-75 w-60 ml-20">
          {/* <video */}
          {/* // className="object-fill"
          // src=""
          // type="video/mp4"
          // controls */}
          {/* ></video> */}
          {/* <span className="text-purple-600 text-sm p-1"> Videos</span>
          <span className="font-semibold text-lg p-1">Videos</span> */}

          {/* <div className="flex flex-row p-1">
            <BsHourglass />
            <span className="text-gray-600 text-sm ml-1">Videos</span>
          </div> */}

          {/* <div className="flex flex-row p-1">
            <BsPerson />
            <span className="text-gray-600 text-sm ml-1">Maths</span>
          </div> */}
        </div>
      </div>

      {/* <div className="ml-16 mt-8">
        <span className="font-bold">Gallery</span>
        <button className=" bg-red-600 ml-1 rounded-md p-1">
          <span className="text-sm text-white">Hello</span>
        </button>
      </div> */}

      <div className=" ml-16 mt-5 flex flex-row">
        <button className="rounded-xl bg-blue-600 box-border h-25 w-60 ">
          {/* <BiMessageDetail
            className="ml-1 left-0 top-0 h-8 w-8 mt-2"
            color="white"
          /> */}
          <span className="ml-24 text-lg h-16 w-16 text-white">Videos</span>
        </button>

        <button className="rounded-xl bg-purple-600 box-border h-25 w-60 ml-20 ">
          {/* <FiSettings
            className="ml-1 left-0 top-0 h-8 w-8 mt-2"
            color="white"
          /> */}
          <span className="ml-16 text-lg h-16 w-16 text-white">Videos</span>
        </button>

        <button className="rounded-xl bg-red-500 box-border h-25 w-60 ml-20 ">
          {/* <VscSymbolOperator
            className="ml-1 left-0 top-0 h-8 w-8 mt-2"
            color="white"
          /> */}
          <span className="ml-12 text-lg h-16 w-16 text-white">Videos</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
