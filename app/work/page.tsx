"use client"
import Image from "next/image";
import nav from "../nav/navbar";
import { Poppins } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div className="flex flex-col gap-35 p-3">
      <div>
        <div className="">
          {nav()}
        </div>
      </div>
      <div className={poppins.className}>
        <h1 className="text-gray-400 text-2xl">Projects</h1>
        <br />
        <p className="text-5xl font-semibold">
          Projects that explore<br />
          interactive front-end<br />
          development .
        </p>
      </div>
      <div>
        <a href="https://counter-app-tau-ten.vercel.app/">
          <Image
           className="rounded-lg"
           src="/images/counter.png"
           alt="couner-app"
           width={300}
           height={300}
          />
        </a>
      </div>
    </div>
  );
}