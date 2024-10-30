"use cient";
import Image from "../../node_modules/next/image";
import img from "../image/img-about.webp";

const Gallery = () => {
  return (
    <div className="pb-24">
      <div className="text-center">
        <h2 className="text-3xl">gallery</h2>
        <hr className="h-1 w-[10%] mx-auto bg-[#2d2d2d] mt-3" />
        <p className="mt-4">our gallery is full of stories</p>
      </div>
      <div className="grid grid-cols-3 row-auto gap-4 mt-12">
        <div className="col-span-2">
          <Image
            src={img}
            alt="img"
            className="w-[100%] h-[350px] object-cover object-top"
          />
        </div>
        <div className="">
          <Image
            src={img}
            alt="img"
            className="w-[100%] h-[350px] object-cover object-top"
          />
        </div>
        <div className="">
          <Image
            src={img}
            alt="img"
            className="w-[100%] h-[350px] object-cover object-top"
          />
        </div>
        <div className="col-span-2">
          <Image
            src={img}
            alt="img"
            className="w-[100%] h-[350px] object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
