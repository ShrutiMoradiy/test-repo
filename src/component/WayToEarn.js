import React from 'react'
import {
    FaArrowUp,
    FaCheckDouble,
    FaCrown,
    FaBolt,
    Fa7Gift,
    FaPiggyBank,
    FaRocketchat,
    FaCoins,
    FaGift,
  } from "react-icons/fa";
  import { CgClose } from "react-icons/cg";
  import { PiWarningCircleLight } from "react-icons/pi";
  import { HiOutlineBolt, HiBolt } from "react-icons/hi2";
  import { TbKey, TbCake } from "react-icons/tb";
  import { BiLike } from "react-icons/bi";
  import {
    BsArrowUpShort,
    BsArrowRight,
    BsArrowLeft,
    BsBoxSeam,
  } from "react-icons/bs";
  import { RiCouponLine, RiCheckDoubleFill } from "react-icons/ri";
  import {
    IoChatbubbleOutline,
    IoCopyOutline,
    IoChevronBack,
  } from "react-icons/io5";
  import { LuTwitter } from "react-icons/lu";
  import { FiFacebook } from "react-icons/fi";
  import { MdOutlineMailOutline } from "react-icons/md";

  
function WayToEarn({ WayToEarn }) {
    const wayToEarnData = [
        {
          id: 1,
          name: "Place an order",
          points: "5 Points for every ₹1 spent",
          img: <BsBoxSeam />,
        },
        { id: 2, name: "Sign Up", points: "200 Points", img: <TbKey /> },
        { id: 3, name: "Like on Facebook", points: "200 Points", img: <BiLike /> },
        {
          id: 4,
          name: "Celebrate a birthday",
          points: "200 Points",
          img: <TbCake />,
        },
      ];
  return (
    <>
      <h1>Way To Earn</h1>
      <section className="grid place-content-center">
          <div className="container flex items-center mt-10">
            <div className="bg-[#364BFF] w-[475px] h-[88px] inline-grid items-center rounded-t-3xl p-4">
              <div class="flex justify-between items-center">
                <h4 className="text-lg text-white font-medium flex">
                  <span className="text-white p-1.5" onClick={WayToEarn}>
                    <BsArrowLeft />
                  </span>
                  Ways to earn
                </h4>
                <span
                  className="text-white font-semibold text-xl"
                  onClick={WayToEarn}
                >
                  <CgClose />
                </span>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="bg-[#F0F0F0] w-[475px] h-auto p-[35px] rounded-b-3xl">
              <h3 className="text-2xl font-semibold">Ways to earn points</h3>
              <p className="text-[#647381] text-base font-medium">
                You get rewarded for performing actions on our store
              </p>
              <div className="bg-white w-[411px] h-[360px] mt-4 rounded-2xl p-[25px]">
                {wayToEarnData.map((item, a) => (
                  <div key={item.id}>
                    <div className="flex">
                      <div className="flex w-8 h-8 items-center">
                        <span className="text-[#5E51FA] text-xl font-semibold pt-3.5">
                          {item.img}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-base font-medium">{item.name}</h4>
                        <p className="text-sm font-normal opacity-[50%]">
                          {item.points}
                        </p>
                      </div>
                    </div>
                    {a !== wayToEarnData.length - 1 && (
                      <div className="border-gray-400 opacity-[70%] w-[360px] h-[2px] my-[20px]">
                        <hr />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="bg-[#E2E2E2] w-[411px] h-[94px] p-3 mt-3 rounded-2xl flex items-center">
                <p className="text-[#808080] text-lg font-mideum m-1">
                  
                  Let’s get started collecting these points
                </p>
                <button
                  type="button"
                  className="bg-[#364BFF] text-white m-2 w-[119px] h-[45px] p-2 rounded-lg"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default WayToEarn
