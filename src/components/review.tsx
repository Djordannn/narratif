"use client";
import React from "react";
import { RxInstagramLogo } from "react-icons/rx";
import { FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <div className="py-16 mb-6 md:py-24 mx-[5%] md:mx-0 md:pl-[5%]">
      <div className="text-center animation md:pr-[5%]">
        <h2 className="text-3xl">what people say</h2>
        <hr className="h-1 w-[10%] mx-auto bg-[#2d2d2d] mt-3" />
        <p className="mt-4">
          what other people say is the result of our hard work
        </p>
      </div>
      <div>
        <div className="mt-[4rem] grid grid-flow-col auto-cols-[60%] md:auto-cols-[40%] gap-4 overflow-auto pr-0">
          <div className="bg-[#eeee] p-4 flex flex-col justify-between">
            <div className=" ">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-2xl">
                  <RxInstagramLogo />
                </p>
                <div className="font-semibold">@name</div>
              </div>
              {/* <div className="flex text-yellow-500 gap-2">
                {Array(3)
                  .fill(null)
                  .map((value, index) => (
                    <FaStar key={index} />
                  ))}
              </div> */}
              <p className="py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                maiores corporis laborum, expedita odio repudiandae.
              </p>
            </div>
          </div>
          <div className=" bg-[#eeee] p-4 flex flex-col justify-between">
            <div className="md:h-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-2xl">
                  <RxInstagramLogo />
                </p>
                <div className="font-semibold">@name</div>
              </div>
              {/* <div className="flex text-yellow-500 gap-2">
                {Array(3)
                  .fill(null)
                  .map((value, index) => (
                    <FaStar key={index} />
                  ))}
              </div> */}
              <p className="py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                maiores corporis laborum, expedita odio repudiandae.
              </p>
            </div>
          </div>
          <div className=" bg-[#eeee] p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-2xl">
                  <RxInstagramLogo />
                </p>
                <div className="font-semibold">@name</div>
              </div>
              {/* <div className="flex text-yellow-500 gap-2">
                {Array(3)
                  .fill(null)
                  .map((value, index) => (
                    <FaStar key={index} />
                  ))}
              </div> */}
              <p className="py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                maiores corporis laborum, expedita odio repudiandae.
              </p>
            </div>
          </div>
          <div className=" bg-[#eeee] p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-2xl">
                  <RxInstagramLogo />
                </p>
                <div className="font-semibold">@name</div>
              </div>
              {/* <div className="flex text-yellow-500 gap-2">
                {Array(3)
                  .fill(null)
                  .map((value, index) => (
                    <FaStar key={index} />
                  ))}
              </div> */}
              <p className="py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                maiores corporis laborum, expedita odio repudiandae.
              </p>
            </div>
          </div>
          <div className="bg-[#eeee] p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-2xl">
                  <RxInstagramLogo />
                </p>
                <div className="font-semibold">@name</div>
              </div>
              {/* <div className="flex text-yellow-500 gap-2">
                {Array(3)
                  .fill(null)
                  .map((value, index) => (
                    <FaStar key={index} />
                  ))}
              </div> */}
              <p className="py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                maiores corporis laborum, expedita odio repudiandae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
