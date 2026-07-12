import Image from "next/image";
import nav from "./nav/navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div className="flex flex-col gap-20 items-center p-3">
      <div>{nav()}</div>
      <div className="flex justify-between gap-10">
        <div>
          <Image className="rounded-full" src="/images/image.jpeg" alt="profile" width={50} height={50}/>
        </div>
        <div>
          <p className="text-lg font-bold">
            I'm <span className="text-red-700">Anantha Krishnan</span>,<br />
            A frontend developer and a web designer.
          </p>
        </div>
      </div>
      <div className={poppins.className}>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-bold">About Me</h1>
          <p className="text-lg">
            I'm a first year college student passionate<br />
            about web development and design. I have a strong<br />
            interest in creating visually appealing and user-friendly<br />
            websites.
          </p>
        </div>
      </div>
    </div>
  );
}
