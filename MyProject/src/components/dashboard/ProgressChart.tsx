import React from 'react';

export default function ProgressChart() {
  const data = [65, 75, 70, 80, 85, 90, 88];
  const max = Math.max(...data);
  
  return (
    <div className="h-64">
      <div className="flex h-full items-end space-x-2">
        {data.map((value, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div 
              className="w-full bg-emerald-200 rounded-t-lg transition-all duration-500 ease-in-out hover:bg-emerald-300"
              style={{ height: `${(value / max) * 100}%` }}
            ></div>
            <span className="text-xs text-gray-600 mt-2">Day {index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}