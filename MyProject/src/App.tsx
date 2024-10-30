import React, { useState } from 'react';
import { Home, ListTodo, Trophy, User } from 'lucide-react';
import Dashboard from './components/Dashboard';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Profile from './components/Profile';


const navigation = [
  { name: 'Dashboard', icon: Home, component: Dashboard },
  { name: 'Activities', icon: ListTodo, component: Activities },
  { name: 'Leaderboard', icon: Trophy, component: Leaderboard },
  { name: 'Profile', icon: User, component: Profile },
];

export default function App() {
  const [currentTab, setCurrentTab] = useState('Dashboard');

  const CurrentComponent = navigation.find(nav => nav.name === currentTab)?.component || Dashboard;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col h-screen">
          <main className="flex-1 overflow-y-auto">
            <CurrentComponent />
          </main>
          
          <nav className="bg-white border-t border-gray-200 fixed bottom-0 w-full max-w-7xl">
            <div className="flex justify-around">
              {navigation.map(({ name, icon: Icon }) => (
                <button
                  key={name}
                  onClick={() => setCurrentTab(name)}
                  className={`flex flex-col items-center p-4 space-y-1 flex-1 transition-colors
                    ${currentTab === name ? 'text-emerald-600' : 'text-gray-600 hover:text-emerald-600'}`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-xs font-medium">{name}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}