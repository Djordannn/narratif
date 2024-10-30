"use client";
import { RxInstagramLogo } from "react-icons/rx";

const Review = () => {
  return (
    <div className="pb-24">
      <div className="text-center">
        <h2 className="text-3xl">what people say</h2>
        <hr className="h-1 w-[10%] mx-auto bg-[#2d2d2d] mt-3" />
        <p className="mt-4">
          what other people say is the result of our hard work
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-12">
        <div className="p-3 bg-[#eeee]">
          <div className="flex items-center gap-1 text-xl">
            <RxInstagramLogo />
            <h3>lanang_brlln4</h3>
          </div>
          <p className="mt-1">
            I really like the products from @narratif.apparel because the models
            are very good, contemporary and the material is of very good quality
            for anyone to wear.
          </p>
        </div>
        <div className="p-3 bg-[#eeee]">
          <div className="flex items-center gap-1 text-xl">
            <RxInstagramLogo />
            <h3>heru031</h3>
          </div>
          <p className="mt-1">
            Because I like the design of the product which is very attractive
            and has very cool colors, making this product attractive to various
            groups.
          </p>
        </div>
        <div className="p-3 bg-[#eeee]">
          <div className="flex items-center gap-1 text-xl">
            <RxInstagramLogo />
            <h3>d_nish127</h3>
          </div>
          <p className="mt-1">
            Because I saw the first impressions of the narrative product which
            were very interesting, I can use it for my daily activities and it
            will also be my vendor of choice when I want to make a new t-shirt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
