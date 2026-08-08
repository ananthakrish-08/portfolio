"use client"
import Image from "next/image";
import nav from "./nav/navbar";
import { Poppins } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div className="flex flex-col gap-35 p-10 ">
      <div>
        {nav()}
      </div>
      <div className="flex flex-col items-center font-semibold lg:items-baseline text-2xl  lg:text-7xl">
        <h1 className={poppins.className}>Anantha Krishnan</h1>
        <h2 className="text-gray-500 lg:text-3xl text-xl">Creative Developer</h2>
      </div>
      <div className="text-gray-400 flex flex-col gap-10 text-xl">
        <p>Base : India</p>
        <p>Status : Undergraduate</p>
      </div>
      <div>
        <a className="p-3 bg-black text-white cursor-pointer rounded-lg shadow-black shadow-lg" href="/work">Projects &#8599;</a>
      </div>
    </div>
  );
}
