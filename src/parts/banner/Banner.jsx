import React from "react";
import { BannerButton } from "../../components";

function Banner() {
  return (
    <div className="relative flex flex-col w-full gap-6 px-8 py-6 overflow-hidden text-white md:py-14 rounded-xl bg-gradient-to-r from-purple-banner-1 to-purple-banner-2">
      <h1>One Stop NFT Marketplace</h1>
      <h4 className="font-normal">
        Discover limited-edition digital artwork
        <br />
        Create, Sell, and Collect yours now!
      </h4>
      <div className="flex gap-4">
        <BannerButton text="Start Create" />
        <BannerButton text="How it works" />
      </div>
      <img
        className="absolute bottom-0 right-0 "
        src="/assets/images/banner.png"
        alt="Banner Image"
      />
    </div>
  );
}

export default Banner;
