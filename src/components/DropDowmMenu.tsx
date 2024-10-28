'use client'
import React, { useState } from 'react'

const DropDowmMenu = ({candidateNav,candidateFilterLength}:{candidateNav:any[],candidateFilterLength:number}) => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleChange = (event:any) => {
        setSelectedOption(event.target.value);
      };
    
    return (
            <div className="flex items-center justify-center  bg-gray-100">
              <select
                value={selectedOption}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {candidateNav.map((option) => (
                  <option key={option.label} value={option.value}>
                 
                  {option.label} ({candidateFilterLength ?? option.quantity})
              
                  </option>
                ))}
              </select>
            </div>
          );
        };
        



export default DropDowmMenu