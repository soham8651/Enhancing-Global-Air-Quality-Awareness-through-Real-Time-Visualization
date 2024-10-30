import React, { useState } from 'react';
import { Settings, Award, Calendar, ChevronRight, Shield, X } from 'lucide-react';

const initialAchievements = [
  { title: 'First Recycling Task', date: '2024-03-15', points: 100 },
  { title: 'Week-long Streak', date: '2024-03-14', points: 200 },
  { title: 'Energy Saver', date: '2024-03-13', points: 150 },
];

const initialActivities = [
  { title: 'Used Public Transport', date: '2024-03-15', status: 'completed' },
  { title: 'Recycled Electronics', date: '2024-03-14', status: 'completed' },
  { title: 'Water Conservation', date: '2024-03-13', status: 'in-progress' },
];

export default function Profile() {
  const [points, setPoints] = useState(10245);
  const [achievements, setAchievements] = useState(initialAchievements);
  const [activities, setActivities] = useState(initialActivities);
  const [isAccountSettingsOpen, setIsAccountSettingsOpen] = useState(false);
  const [isPremiumFeaturesOpen, setIsPremiumFeaturesOpen] = useState(false);

  const handleCompleteActivity = (activityTitle) => {
    const activity = activities.find(act => act.title === activityTitle);
    if (activity && activity.status !== 'completed') {
      activity.status = 'completed';
      const newPoints = points + 50; // Example: Add 50 points for completing an activity
      setPoints(newPoints);
      setAchievements([
        ...achievements,
        { title: activity.title, date: new Date().toISOString().split('T')[0], points: 50 },
      ]);
      setActivities([...activities]);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-6">
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white"
          />
          <div>
            <h1 className="text-3xl font-bold">Alex Morgan</h1>
            <p className="text-emerald-100">Earth Guardian · Level 5</p>
            <div className="flex items-center mt-2 space-x-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{points} points</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">7 day streak</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Recent Achievements</h2>
            <Award className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="space-y-4">
            {achievements.map((achievement) => (
              <div key={achievement.title} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-800">{achievement.title}</h3>
                  <p className="text-sm text-gray-500">{achievement.date}</p>
                </div>
                <span className="text-emerald-600 font-medium">+{achievement.points}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Activity History</h2>
            <Calendar className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.title} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-800">{activity.title}</h3>
                  <p className="text-sm text-gray-500">{activity.date}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm cursor-pointer
                    ${activity.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}
                  onClick={() => handleCompleteActivity(activity.title)}
                >
                  {activity.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm divide-y">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Settings</h2>
          {[
            { icon: Settings, title: 'Account Settings', description: 'Update your profile and preferences' },
            { icon: Shield, title: 'Premium Features', description: 'Upgrade to unlock exclusive features' },
          ].map(({ icon: Icon, title, description }) => (
            <button
              key={title}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg group"
              onClick={() => {
                if (title === 'Account Settings') setIsAccountSettingsOpen(true);
                if (title === 'Premium Features') setIsPremiumFeaturesOpen(true);
              }}
            >
              <div className="flex items-center space-x-4">
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-emerald-600" />
                <div className="text-left">
                  <h3 className="font-medium text-gray-800">{title}</h3>
                  <p className="text-sm text-gray-500">{description}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-600" />
            </button>
          ))}
        </div>
      </div>

      {isAccountSettingsOpen && (
        <AccountSettingsModal onClose={() => setIsAccountSettingsOpen(false)} />
      )}
      {isPremiumFeaturesOpen && (
        <PremiumFeaturesModal onClose={() => setIsPremiumFeaturesOpen(false)} />
      )}
    </div>
  );
}

function AccountSettingsModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Account Settings</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-400 hover:text-gray-600" />
          </button>
        </div>
        <form className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              placeholder="Alex Morgan"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              placeholder="alex.morgan@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              placeholder="••••••••"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-emerald-600 text-white rounded-md shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function PremiumFeaturesModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Premium Features</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-400 hover:text-gray-600" />
          </button>
        </div>
        <div className="space-y-4 mt-4">
          <div>
            <h3 className="text-lg font-medium text-gray-800">Ad-Free Experience</h3>
            <p className="text-sm text-gray-500">Enjoy an uninterrupted experience without ads.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800">Exclusive Content</h3>
            <p className="text-sm text-gray-500">Access premium content and features.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800">Priority Support</h3>
            <p className="text-sm text-gray-500">Get priority support for any issues or queries.</p>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="px-4 py-2 bg-emerald-600 text-white rounded-md shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
