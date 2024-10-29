"use client";
import React, { Fragment, useState } from "react";
import { Button } from "./ui/button";
import Table from "./Table";
import { Divide, Search } from "lucide-react";
import { candidatesData } from "@/candidates/candidates";
import { searchData } from "@/action/action";
import DropDowmMenu from "./DropDowmMenu";
const Candidates = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const candidateNav = [
    {
      label: "All Applicants",
      quantity: 4,
      isActive: true,
      value:"all-applicants"
    },
    {
      label: "Shortlisted",
      quantity: 2,
      isActive: false,
      value:'short-listed'
    },
    {
      label: "Interview Result",
      quantity: 1,
      isActive: false,
      value:'interview-result'
    },
  ];

  const candidateFilter = searchData(candidatesData, searchValue);
  return (
    <div className="relative pt-4">
      <div className="text-2xl font-bold tracking-wide">Candidates</div>
      <div className="flex space-x-4 md:flex-row flex-col justify-center space-y-3">
        <div className="md:flex hidden">
          <Fragment>
            {candidateNav.map((nav) => (
              <Button
                key={nav.label}
                variant={"ghost"}
                className={`text-muted-foreground ${
                  nav.isActive && "text-black font-bold"
                }`}
              >
                <span>
                  {nav.label} ({candidateFilter.length ?? nav.quantity})
                </span>
              </Button>
            ))}
          </Fragment>
        </div>
        <div className='md:hidden flex'>
              <DropDowmMenu candidateNav={candidateNav} candidateFilterLength={candidateFilter.length}/>
        </div>
        <div className=" flex w-full overflow-hidden   md:justify-end  ">
          <div className="w-fit   flex  relative border rounded-full ">
            <div className="absolute top-1 left-1">
              <Search className=" text-[#000000CC] w-5 h-5 ml-1   " />
            </div>
            <input
              placeholder="Search"
              className=" focus:outline-none py-1 md:py-0 text-[#242424] placeholder-gray-400 font-normal rounded-full pl-8"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="pt-4">
        <Table candidatesData={candidateFilter} />
      </div>
    </div>
  );
};

export default Candidates;
