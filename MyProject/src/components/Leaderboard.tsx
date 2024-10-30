import React from 'react';
import { Trophy, Medal, Star } from 'lucide-react';

export default function Leaderboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Leaderboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-silver-200 to-silver-100 rounded-xl p-6 text-center relative">
          <Medal className="w-8 h-8 mx-auto text-gray-600" />
          <div className="mt-4">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" 
                 className="w-20 h-20 rounded-full mx-auto border-4 border-white" 
                 alt="2nd place" />
            <h3 className="mt-2 text-xl font-bold">Sarah Chen</h3>
            <p className="text-gray-600">9,800 points</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-200 to-yellow-100 rounded-xl p-6 text-center relative transform scale-105">
          <Trophy className="w-8 h-8 mx-auto text-yellow-600" />
          <div className="mt-4">
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop"
                 className="w-20 h-20 rounded-full mx-auto border-4 border-white"
                 alt="1st place" />
            <h3 className="mt-2 text-xl font-bold">Alex Morgan</h3>
            <p className="text-gray-600">10,245 points</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-200 to-orange-100 rounded-xl p-6 text-center relative">
          <Star className="w-8 h-8 mx-auto text-orange-600" />
          <div className="mt-4">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                 className="w-20 h-20 rounded-full mx-auto border-4 border-white"
                 alt="3rd place" />
            <h3 className="mt-2 text-xl font-bold">James Wilson</h3>
            <p className="text-gray-600">9,500 points</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Badges</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {Array.from({ length: 10 }).map((_, i) => (
              <tr key={i + 4} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{i + 4}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img className="h-10 w-10 rounded-full" 
                         src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=50&h=50&fit=crop`}
                         alt="" />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">User {i + 4}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Level {Math.floor(Math.random() * 10) + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{9000 - (i * 100)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex space-x-1">
                    {Array.from({ length: Math.floor(Math.random() * 4) + 1 }).map((_, j) => (
                      <span key={j} className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Star className="w-4 h-4 text-emerald-600" />
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}