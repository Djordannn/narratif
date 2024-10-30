"use client";
import Image from "../../node_modules/next/image";
import img from "@/image/img-card.png";
import ImgFutsal from "@/image/futsal.jpg";
import ImgRunner from "@/image/runner.jpg";
import ImgJersey from "@/image/jersey.jpg";
// 19A7CE primary color
export default function Cardshirt() {
  return (
    <div className="py-[38px]">
      {/* <h2 className="text-2xl font-semibold">collection</h2> */}
      <div className="card grid grid-cols-4 grid-rows-auto gap-4 mt-4">
        <div>
          <h2 className="text-4xl">our jersey products</h2>
          <p className="mt-2">we have several types of clothing products</p>
        </div>
        <div className="card-body relative">
          <div className="img-card">
            <Image
              src={ImgFutsal}
              alt="img-shirt"
              className="w-[100%] h-[300px] object-cover object-top"
            />
            <div className="absolute bottom-4 left-5">
              <h3 className="text-2xl text-white tracking-tight">futsal</h3>
            </div>
          </div>
        </div>
        <div className="card-body relative">
          <div className="img-card">
            <Image
              src={ImgRunner}
              alt="img-shirt"
              className="w-[100%] h-[300px] object-cover object-top"
            />
            <div className="absolute bottom-4 left-5">
              <h3 className="text-2xl text-white tracking-tight">runner</h3>
            </div>
          </div>
        </div>
        <div className="card-body relative">
          <div className="img-card">
            <Image
              src={ImgJersey}
              alt="img-shirt"
              className="w-[100%] h-[300px] object-cover object-center"
            />
            <div className="absolute bottom-4 left-5">
              <h3 className="text-2xl text-white tracking-tight">team</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
