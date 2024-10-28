import React from "react";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
const BackButton = () => {
  return (
    <div className="flex space-x-2 items-center">
      <ChevronLeft />
      <p className="font-bold">Back to the job list</p>
    </div>
  );
};
const Header = () => {
  return (
    <div className="w-full  h-fit bg-[#C0C0C0]">
      <div className="flex flex-col px-12 py-4 ">
        <BackButton />
        <div className="flex flex-col space-y-4">
          <Image
            src={"/meta-logo.png"}
            width={150}
            height={100}
            alt="META LOGO"
          />
          <div className="text-3xl font-bold tracking-wide">
            Cybersecurity Engineer
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
