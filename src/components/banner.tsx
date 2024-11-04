"use client";

import Image from "../../node_modules/next/image";
import banner from "/public/image/banner.webp";

const Banner = () => {
  return (
    <div className="py-14 md:py-20 px-[5%] bg-[#eeee]">
      <div>
        <Image
          src={banner}
          alt="img"
          className="w-full h-[150px] md:h-[250px] xl:h-[300px] lg:h-[250px] object-cover object-top"
        />
      </div>
    </div>
  );
};

export default Banner;
