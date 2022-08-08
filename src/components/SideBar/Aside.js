import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { BiChevronRight } from "react-icons/bi";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { MdSlowMotionVideo } from "react-icons/md";
import { BsCartPlus } from "react-icons/bs";
import { RiBillLine } from "react-icons/ri";
import { TbChecklist } from "react-icons/tb";
import { BsGraphUp } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const Aside = () => {
  return (
    <div className=" w-[20vw] h-[100vh] bg-gray-900">
      <div className="border-2 w-[25vw] h-[100vh] border-gray-800">
        <button className=" h-[7vh] w-[18vw] bg-orange-300 rounded-xl mt-20 ml-2 flex">
          <AiOutlineHome size={25} color="white" className="mt-2.5 ml-8" />{" "}
          <span className="text-white font-semibold text-xl mt-2 ml-5 ">
            Home
          </span>
        </button>

        <div className="flex ">
          <GiTeacher color="gray" size="20" className=" mt-8 ml-9" />{" "}
          <span className="text-gray-500 font-semibold mt-8 ml-5 text-xl  hover:text-white">
            Live Lessons
          </span>{" "}
          <BiChevronRight size={20} color="gray" className="mt-10 ml-28" />
        </div>

        <div className="flex ">
          <RiQuestionAnswerLine color="gray" size="20" className=" mt-8 ml-9" />{" "}
          <span className="text-gray-600 font-semibold mt-7 ml-4 text-xl  hover:text-white">
            Homework Help
          </span>{" "}
          <BiChevronRight size={20} color="gray" className="mt-10 ml-20" />
        </div>

        <div className="flex ">
          <MdSlowMotionVideo color="gray" size="20" className=" mt-8 ml-9" />{" "}
          <span className="text-gray-600 font-semibold mt-8 ml-5 text-xl  hover:text-white">
            Video Library
          </span>{" "}
          <BiChevronRight size={20} color="gray" className="mt-10 ml-24" />
        </div>

        <div className="flex ">
          <BsCartPlus color="gray" size="20" className=" mt-8 ml-9" />{" "}
          <span className="text-gray-600 font-semibold mt-8 ml-5 text-xl  hover:text-white">
            Get A Learning Plan
          </span>
        </div>

        <div className="flex ">
          <RiBillLine color="gray" size="20" className="mt-8 ml-9" />{" "}
          <span className="text-gray-600 font-semibold mt-8 ml-5 text-xl  hover:text-white">
            Mock Exams
          </span>
        </div>

        <div className="flex ">
          <TbChecklist color="gray" size="20" className=" mt-8 ml-9" />{" "}
          <span className="text-gray-600 font-semibold mt-8 ml-5 text-xl  hover:text-white">
            Practice Exams
          </span>
        </div>

        <div className="flex ">
          <BsGraphUp color="gray" size="20" className=" mt-8 ml-9" />{" "}
          <span className="text-gray-600 font-semibold mt-8 ml-5 text-xl  hover:text-white">
            Learning Analysis
          </span>
        </div>

        <div className="flex ">
          <IoMdNotificationsOutline
            color="gray"
            size="20"
            className=" mt-8 ml-9 "
          />{" "}
          <span className="text-gray-600 font-semibold mt-8 ml-5 text-xl  hover:text-white ">
            Notifications
          </span>
        </div>
        <div className="border-1 mt-0 border-gray-900"></div>
        <div className="w-[20vw] h-[6vh] mt-6 ml-0 flex bg-blue-600 rounded">
          <FiChevronLeft color="white" size={20} className="ml-3 mt-3 " />{" "}
          <FiChevronRight color="white" size={20} className="mt-3" />{" "}
          <span className="text-white font-lg mt-2 ml-3">
            Switch to Coding School
          </span>
        </div>
      </div>
    </div>
  );
};

export default Aside;
