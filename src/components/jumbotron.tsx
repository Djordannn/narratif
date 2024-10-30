"use client";

import Image from "../../node_modules/next/image";
import img from "@/image/imgMain.jpg";

export default function Jumbotron() {
  return (
    <div
      id="jumbotron"
      className="bg-[url('../image/imgMain.jpg')] bg-no-repeat bg-cover bg-top"
    >
      <div className="main-jumbotron h-[600px] relative xl:h-[675px] 2xl:h-[800px] bg-gradient-to-r from-slate-900 to-transparent ">
        <div className="w-[50%] px-20 pt-40 text-white">
          <h1 className="text-5xl font-thin">
            narratif
            <br />
            <span>apparel</span>
          </h1>
          <h2 className="text-3xl font-thin my-4">
            made to be your <u>story</u>
          </h2>
          <p className="text-md">
            We will present long and short stories from several parts of the
            customers who chose us to be part of the story.
          </p>
          <div className="flex gap-4 py-9">
            <a
              href="#"
              className="text-lg block mt-5 border-2 border-white py-2 px-9 bg-white text-[#2d2d2d]"
            >
              more
            </a>
            <a
              href="#"
              className="text-lg block mt-5 border-2 border-white py-2 px-9 hover:bg-white hover:text-[#2d2d2d]"
            >
              collections
            </a>
          </div>
          <div className="flex gap-4 text-3xl font-thin absolute bottom-10 right-20">
            <i className="ri-instagram-line"></i>
            <i className="ri-twitter-line"></i>
            <i className="ri-facebook-box-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
