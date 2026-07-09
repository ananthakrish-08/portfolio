import Image from "next/image";
import nav from "./nav/navbar";

export default function Home() {
  return (
    <div className="">
      {nav()}
      <br />
      <div className="flex flex-row justify-center gap-30 pt-30">
        <div className="">
          <Image className="rounded-l-md" src="/images/image.jpeg" alt="profile" width={150} height={50}/>
        </div>
        <div className="flex flex-col gap-5  ">
          <h1 className="font-bold text-5xl">About Me</h1>
          <p className="text-md font-medium">
            I am a 17 year old ,male ,first year student of<br /> 
            Computer science and Engineering at Mar Baselios<br /> 
            College of Engineering and Technology.I am a web developer<br />
            and I have a good knowledge of react framework,<br />
            HTML, CSS and Javascript/typescript 
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center pt-30 gap-4">
        <h2 className="text-4xl  font-extrabold">Skills</h2>
        <ul className="text-xl">
          <li>Web Designing</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li> 
        </ul>
      </div>
    </div>
  );
}
