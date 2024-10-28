"use client";
import React, { useState } from "react";
import JobDesc from "./JobDesc";
import Candidates from "./Candidates";
import { Button } from "./ui/button";

type TabType = "job-desc" | "candidates";
const JobPage = () => {
  const [currentTab, setCurrentTab] = useState<TabType>("candidates");
  const tabs = [
    {
      name: "Job Description",
      isActive: currentTab === "job-desc",
      value: "job-desc",
    },
    {
      name: "Candidates",
      isActive: currentTab === "candidates",
      value: "candidates",
    },
  ];
  const handleClick = (value: TabType) => {
    setCurrentTab(value);
  };
  return (
    <div className="px-12 py-4 ">
        <div className="flex space-x-4"> 
      {tabs.map((tab) => (
        <Button
          key={tab.value}
          onClick={() => handleClick(tab.value as TabType)}
          variant={"ghost"}
          className={`bg-transparent transition font-medium text-blue-700 py-2 lg:px-4 px-1 rounded-sm ${
            tab.isActive && "text-gray-900 border-b-4 border-gray-900"
          }`}
        >
          {tab.name}
        </Button>
      ))}
        </div>
      {currentTab === "job-desc" ? <JobDesc /> : <Candidates />}
    </div>
  );
};

export default JobPage;
