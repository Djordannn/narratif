"use clinet";
import React from "react";

interface IBlog {
  title: string;
  text: string;
  img: string;
}

const blogItem = [
  {
    title: "masukkan royco 😜",
    text: "Use these Tailwind CSS description list components to present detailed information in a structured and readable format. These components are designed and built by the Tailwind CSS team, and",
    img: "https://i.pinimg.com/564x/5d/19/3b/5d193bd932c23fd5619ef72b5eda3f48.jpg",
  },
  {
    title: "masukkan royco 😜",
    text: "Use these Tailwind CSS description list components to present detailed information in a structured and readable format. These components are designed and built by the Tailwind CSS team, and",
    img: "https://i.pinimg.com/564x/5d/19/3b/5d193bd932c23fd5619ef72b5eda3f48.jpg",
  },
  {
    title: "How to Make Money",
    text: "Learn I'll show you how with a blog AND without a blog. See how I make over $15,000 every month from home with Pinterest!",
    img: "https://i.pinimg.com/564x/5d/19/3b/5d193bd932c23fd5619ef72b5eda3f48.jpg",
  },
  {
    title: "masukkan royco 😜",
    text: "Use these Tailwind CSS description list components to present detailed information in a structured and readable format. These components are designed and built by the Tailwind CSS team, and",
    img: "https://i.pinimg.com/564x/5d/19/3b/5d193bd932c23fd5619ef72b5eda3f48.jpg",
  },
  {
    title: "Lakukan Hal Ini, Jangan Panik!",
    text: "A list of 20 Foundation - The Pros of Each Foundation and Who the Foundations Support Links to each Foundation to make it easier for you to APPLY PLUS - A Nonprofit Metric Checklist - Fill in the EXCEL file to track for your Nonprofit’s Success quarter by quarter PLUS - A Grant Tracking Excel File - log the grants and track your submissions PLUS - A list of The TOP Nonprofit Conferences so that you can continue to learn PLUS - Access to Easy Nonprofit an interactive Facebook group.",
    img: "https://i.pinimg.com/564x/5d/19/3b/5d193bd932c23fd5619ef72b5eda3f48.jpg",
  },
  {
    title: "masukkan royco 😜",
    text: "Use these Tailwind CSS description list components to present detailed information in a structured and readable format. These components are designed and built by the Tailwind CSS team, and",
    img: "https://i.pinimg.com/564x/5d/19/3b/5d193bd932c23fd5619ef72b5eda3f48.jpg",
  },
  {
    title: "masukkan royco 😜",
    text: "Use these Tailwind CSS description list components to present detailed information in a structured and readable format. These components are designed and built by the Tailwind CSS team, and",
    img: "https://i.pinimg.com/564x/5d/19/3b/5d193bd932c23fd5619ef72b5eda3f48.jpg",
  },
];

const Blog: React.FC<IBlog> = ({ title, text, img }) => {
  const newBlogItem = blogItem.map((value, index) => {
    return (
      <div key={`${value}-${index}`}>
        <div>
          <img
            src={value.img}
            alt=""
            className="w-full h-[250px] object-cover"
          />
          <div className="mt-4">
            <h2 className="font-semibold text-2xl mb-2">{value.title}</h2>
            <p>{value.text}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="mx-[5%] py-14">
      <div className="mb-[5rem] text-center">
        <h1 className="text-4xl uppercase font-bold">blog</h1>
        <hr className="h-1 w-[10%] mx-auto bg-[#2d2d2d] mt-3" />
        <p className="mt-4">discover our story</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-4 md:gap-6 ">
        {newBlogItem}
      </div>
    </div>
  );
};

export default Blog;
