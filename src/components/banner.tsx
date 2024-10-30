"use client";

import Image from "../../node_modules/next/image";
import banner from "@/image/banner.webp";

const Banner = () => {
  return (
    <div className="py-14">
      <div>
        <Image
          src={banner}
          alt="img"
          className="w-full h-[300px] object-cover object-top"
        />
      </div>
    </div>
  );
};

export default Banner;
