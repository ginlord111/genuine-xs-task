import { CandidateDataProps } from '@/candidates/candidates'
import React, { Fragment } from 'react'

const TableMobileView = ({candidatesData}:{candidatesData:CandidateDataProps[]}) => {
  return (
    <div>
        {candidatesData.map((data)=> {
            const roleFitColor: string =
            data.roleFit === "High"
              ? "text-yellow-500 bg-yellow-100"
              : data.roleFit === "Medium"
              ? "bg-blue-100 text-blue-500"
              : "bg-red-100 text-red-400";
            return (
                <div  key={data.name} className='border  grid grid-cols-2'> 
                <div className='font-bold border-b py-2 px-1'>
                    Name
                </div>
                <div className='border-b py-2 px-1'>
                    {data.name}
                </div>
                <div className='font-bold border-b py-2 px-1'>
                    Location
                </div>
                <div className='border-b py-2 px-1'>
                    {data.location}
                </div>
                <div className='font-bold border-b py-2 px-1'>
                    Experience
                </div>
                <div className='border-b py-2 px-1'>
                    {data.experience}
                </div>
                <div className='font-bold border-b py-2 px-1'>
                    Date applied
                </div>
                <div className='border-b py-2 px-1'>
                    {data.dateApplied}
                </div>
                <div className='font-bold border-b py-2 px-1'>
                    Role fit
                </div>
                <div className={`border-b py-2 px-1 flex text-center' ${roleFitColor}`}>
                    {data.roleFit}
                </div>
                </div>
                )
})
        }
    
    </div>
  )
}

export default TableMobileView