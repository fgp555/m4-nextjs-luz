/* eslint-disable @next/next/no-img-element */

"use client"
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import { imgCarusel } from "@/helpers/img.helpers";
import { Pathroutes } from "@/helpers/PathRoutes";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
    slidesToSlide: 3
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 2
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const HomeCategory: React.FC = () => {
  return (
    <div className="container mx-auto p-4 mt-">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Browse by Category</h2>
      </div>
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
        {imgCarusel.map((item) => (
          <div key={item.id} className="text-center p-4">
            <Link href={`${Pathroutes.CATEGORY}/${item.id}`}>
              
                <img
                  src={item.URL}
                  alt={`Category ${item.id}`}
                  className="w-24 h-24 object-cover rounded-full mx-auto"
                />
                <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
              
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeCategory;
