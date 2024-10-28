import React from "react";
import { Button } from "./ui/button";
import Table from "./Table";
const Candidates = () => {
  const candidateNav = [
    {
      label: "All Applicants",
      quantity: 4,
      isActive: true,
    },
    {
      label: "Shortlisted",
      quantity: 2,
      isActive: false,
    },
    {
      label: "Interview Result",
      quantity: 1,
      isActive: false,
    },
  ];
 

  return (
    <div className="relative pt-4">
      <div className="text-2xl font-bold tracking-wide">Candidates</div>
      <div className="flex space-x-4">
        {candidateNav.map((nav) => (
          <Button
            key={nav.label}
            variant={"ghost"}
            className={`text-muted-foreground ${
              nav.isActive && "text-black font-bold"
            }`}
          >
            <span>
              {nav.label} ({nav.quantity})
            </span>
          </Button>
        ))}
        <div className="flex w-full items-center justify-end">
        <input 
        placeholder="Search"
        />
        </div>
      </div>
      <div className="pt-4">
        <Table />
      </div>
    </div>
  );
};

export default Candidates;
