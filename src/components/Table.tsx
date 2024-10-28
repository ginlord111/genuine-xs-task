import { candidatesData } from '@/candidates/candidates';
import React from 'react'

const Table = () => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-md">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border-b border-gray-200">
                <input type="checkbox" className="flex items-start" />
              </th>
              <th className="px-4 py-2 border-b border-gray-200 text-left">
                Name
              </th>
              <th className="px-4 py-2 border-b border-gray-200 text-left">
                Location
              </th>
              <th className="px-4 py-2 border-b border-gray-200 text-left">
                Experience
              </th>
              <th className="px-4 py-2 border-b border-gray-200 text-left">
                Date Applied
              </th>
              <th className="px-4 py-2 border-b border-gray-200 text-left">
                Role Fit
              </th>
              <th className="px-4 py-2 border-b border-gray-200"></th>
            </tr>
          </thead>
          <tbody>
            {candidatesData.map((applicant, index) => {
              const roleFitColor: string =
                applicant.roleFit === "High"
                  ? "text-yellow-500 bg-yellow-100"
                  : applicant.roleFit === "Medium"
                  ? "bg-blue-100 text-blue-500"
                  : "bg-red-100 text-red-400";
              return (
                <tr key={index} className="border-b border-gray-200">
                  <td className="px-4 py-3">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-semibold text-gray-900">
                      {applicant.name}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {applicant.status}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    {applicant.location}
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    {applicant.experience}
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    {applicant.dateApplied}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${roleFitColor}`}
                    >
                      {applicant.roleFit}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-500">
                    <button className="text-gray-500 hover:text-gray-700">
                      •••
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

export default Table