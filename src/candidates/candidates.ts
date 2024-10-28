export interface CandidateDataProps{
  name:string;
  status:string;
  location:string;
  experience:string;
  dateApplied:string;
  roleFit:string;

}

export const candidatesData:CandidateDataProps[] = [
  {
    name: "Olivia Anderson",
    status: "In progress",
    location: "Philippines",
    experience: "10 years",
    dateApplied: "August 16, 2024",
    roleFit: "High",
  },
  {
    name: "Samantha Smith",
    status: "In progress",
    location: "Indonesia",
    experience: "4 years",
    dateApplied: "August 15, 2024",
    roleFit: "High",
  },
  {
    name: "Carl Jefferson",
    status: "In progress",
    location: "Philippines",
    experience: "2 years",
    dateApplied: "August 12, 2024",
    roleFit: "Medium",
  },
  {
    name: "Taylor Alison",
    status: "In progress",
    location: "United Kingdom",
    experience: "5 years",
    dateApplied: "August 10, 2024",
    roleFit: "Very Low",
  },
];
