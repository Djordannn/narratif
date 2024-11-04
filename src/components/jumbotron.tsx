"use client";

import Image from "../../node_modules/next/image";
import img from "@/image/imgMain.jpg";
import Sectionabout from "./SectionAbout";

export default function Jumbotron() {
  return (
    <div
      id="jumbotron"
      className="bg-[url('/image/imgMain.jpg')] bg-no-repeat bg-center bg-cover mx-[5%]"
    >
      <div className="main-jumbotron h-[600px] relative xl:h-[650px] 2xl:h-[900px] md:bg-gradient-to-r from-slate-900 to-transparent bg-gradient-to-t">
        <div className="w-[100%] text-center pt-20 lg:w-[50%] lg:pt-28 lg:px-16 lg:text-left xl:pt-40 text-white 2xl:pt-64 md:pt-[6rem] md:text-center md:w-[100%]">
          <h1 className="text-5xl font-thin 2xl:text-6xl">
            narratif
            <br />
            <span>apparel</span>
          </h1>
          <h2 className="text-2xl lg:text-xl font-thin my-4 2xl:text-4xl">
            made to be your <u>story</u>
          </h2>
          <p className="w-[90%] mx-auto text-sm md:w-[80%] lg:text-md lg:w-[100%] text-md 2xl:text-lg">
            We will present long and short stories from several parts of the
            customers who chose us to be part of the story.
          </p>
          <div className="flex flex-col w-[80%] mx-auto md:flex-row md:gap-4 md:w-[100%] md:mx-0 py-9 justify-center lg:justify-start md:justify-center">
            <a
              href="#sectionAbout"
              className="text-lg block mt-5 border-2 border-white py-2 px-9 bg-white text-[#2d2d2d] 2xl:text-2xl 2xl:py-4"
            >
              more
            </a>
            <a
              href="#"
              className="text-lg block mt-5 border-2 border-white py-2 px-9 hover:bg-white hover:text-[#2d2d2d] 2xl:text-2xl 2xl:py-4"
            >
              collections
            </a>
          </div>
          <div className="flex right-[7.5rem] gap-4 text-3xl font-thin absolute bottom-10 sm:right-[16rem] lg:right-20 md:right-[18rem]">
            <a href="https://www.instagram.com/narratif.apparel?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <i className="ri-instagram-line"></i>
            </a>
            <i className="ri-twitter-line"></i>
            <i className="ri-facebook-box-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
