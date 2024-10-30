"use client";

import Image from "../../node_modules/next/image";
import img from "@/image/imgCard.jpg";
import img2 from "@/image/imgCard2.jpg";
import img3 from "@/image/imgCard3.jpg";
import img4 from "@/image/imgCard4.jpg";

const CardProduct = () => {
  return (
    <div className=" py-24">
      <div className="text-center">
        <h2 className="text-3xl">popular products</h2>
        <hr className="h-1 w-[10%] mx-auto bg-[#2d2d2d] mt-3" />
        <p className="mt-4">we present products with the best quality</p>
      </div>
      <div className="grid grid-cols-4 row-auto gap-4 py-12">
        <div className="card">
          <Image src={img4} alt="img" className="w-[100%] h-[300px]" />
          <div className="mt-2">
            <h3 className="text-lg">name product</h3>
            <p className="text-2xl">$99.00</p>
          </div>
        </div>
        <div className="card">
          <Image src={img3} alt="img" className="w-[100%] h-[300px]" />
          <div className="mt-2">
            <h3 className="text-lg">name product</h3>
            <p className="text-2xl">$99.00</p>
          </div>
        </div>
        <div className="card">
          <Image src={img4} alt="img" className="w-[100%] h-[300px]" />
          <div className="mt-2">
            <h3 className="text-lg">name product</h3>
            <p className="text-2xl">$99.00</p>
          </div>
        </div>
        <div className="card">
          <Image src={img3} alt="img" className="w-[100%] h-[300px]" />
          <div className="mt-2">
            <h3 className="text-lg">name product</h3>
            <p className="text-2xl">$99.00</p>
          </div>
        </div>
      </div>
      <div>
        <a href="#" className="py-4 px-7 bg-[#2d2d2d] text-white">
          more products
        </a>
      </div>
    </div>
  );
};

export default CardProduct;
