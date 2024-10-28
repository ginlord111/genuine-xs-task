import { CandidateDataProps } from "@/candidates/candidates";

export const searchData = (datas:CandidateDataProps[],searchValue:string) =>{
return datas.filter((data)=>JSON.stringify(data).toLowerCase().includes(searchValue.toLowerCase()))
}