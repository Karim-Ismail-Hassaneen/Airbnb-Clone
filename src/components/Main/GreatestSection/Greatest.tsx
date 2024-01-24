import Image from "next/image";
import Link from "next/link";
import React from "react";

const Greatest = () => {
  return (
    <section>
      <div className="container relative cursor-pointer pt-6 hoverTransform">
        <div className="relative h-96 min-w-[300px] ">
          <Image
            src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            className="rounded-xl -z-10 object-cover"
            alt="GreatestOutdoors-Img"
          />
        </div>
        <div className="absolute top-32 left-12 text-white">
          <h3 className="text-4xl mb-3 w-64 ">The Greatest Outdoors</h3>
          <p>Wishlists curated by Airbnb</p>
          <div className="text-sm px-4 py-2 rounded-lg mt-5 block text-white bg-gray-900">
            <Link href="/">Get Inspired </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Greatest;
