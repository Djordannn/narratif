"use client";

import Cardshirt from "@/components/cardShirt";
import Jumbotron from "@/components/jumbotron";
import Sectionabout from "@/components/SectionAbout";
import Sectionprov from "@/components/sectionProvider";
import Banner from "@/components/banner";
import CardProduct from "@/components/cardProduct";
import Gallery from "@/components/gallery";
import Review from "@/components/review";

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <Sectionabout />
      <Cardshirt />
      <Sectionprov />
      <Banner />
      <CardProduct />
      <Gallery />
      <Review />
    </div>
  );
}
