import { useState } from "react";
import { User, Settings, Heart, MessageCircle, Share } from "lucide-react";
import BottomNavigation from "@/components/BottomNavigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HomeScreen = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  return (
    <div className="min-h-screen bg-white text-black pb-16">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white px-4 py-3 flex justify-between items-center border-b border-gray-200">
        <h1 className="text-xl font-bold">Thredz</h1>
        
        <div className="flex items-center space-x-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-full">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          
          <button
            onClick={() => {
              setShowProfile(true);
              setShowSettings(false);
            }}
            className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center"
          >
            <span className="text-white text-sm">@</span>
          </button>
          
          <button
            onClick={() => {
              setShowSettings(true);
              setShowProfile(false);
            }}
            className="w-8 h-8 flex items-center justify-center"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </header>
      
      {/* Main content */}
      <main>
        {/* Create post section */}
        <div className="bg-purple-300 p-4 mx-4 my-3 rounded-xl">
          <div className="flex items-center">
            <Avatar className="w-8 h-8 bg-gray-200">
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium">user name <span className="text-xs font-normal text-gray-600">7 hours ago</span></p>
            </div>
            <button className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-md">post</button>
          </div>
        </div>
        
        {/* Tabs section */}
        <div className="px-4">
          <div className="w-full my-2">
            <button className="w-full py-2 bg-purple-400 text-white rounded-md">
              following
            </button>
          </div>
        </div>
        
        {/* Posts */}
        <div className="space-y-4 px-4 pb-4">
          {/* Post 1 */}
          <div className="bg-purple-100 p-4 rounded-xl">
            <div className="flex items-center mb-2">
              <Avatar className="w-8 h-8 bg-gray-200">
                <AvatarFallback>ON</AvatarFallback>
              </Avatar>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium">other user name <span className="text-xs font-normal text-gray-600">7 hours ago</span></p>
              </div>
              <button className="text-gray-400">
                <Heart className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm mb-3">text content</p>
            <div className="flex justify-between mt-2">
              <button className="text-gray-500">
                <MessageCircle className="w-5 h-5" />
              </button>
              <button className="text-gray-500">
                <Share className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Post 2 */}
          <div className="bg-purple-100 p-4 rounded-xl">
            <div className="flex items-center mb-2">
              <Avatar className="w-8 h-8 bg-gray-200">
                <AvatarFallback>ON</AvatarFallback>
              </Avatar>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium">other user name <span className="text-xs font-normal text-gray-600">7 hours ago</span></p>
              </div>
              <button className="text-gray-400">
                <Heart className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm mb-3">text content</p>
            <div className="flex justify-between mt-2">
              <button className="text-gray-500">
                <MessageCircle className="w-5 h-5" />
              </button>
              <button className="text-gray-500">
                <Share className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </main>
      
      {showProfile && (
        <div className="fixed inset-0 z-50 bg-black/70 flex">
          <div className="w-4/5 h-full bg-black border-r border-treadz-purple/30 animate-slide-in-left p-4">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setShowProfile(false)}
                className="text-white"
              >
                ✕
              </button>
            </div>
            
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 rounded-full bg-treadz-purple/20 mb-3 overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-bold text-white">user name</h2>
              <p className="text-gray-400">@username</p>
            </div>
            
            <div className="flex justify-around mb-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white">245</h3>
                <p className="text-sm text-gray-400">Posts</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white">756</h3>
                <p className="text-sm text-gray-400">Followers</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white">89</h3>
                <p className="text-sm text-gray-400">Following</p>
              </div>
            </div>
            
            <button className="treadz-primary-button w-full mb-4">
              Edit Profile
            </button>
            
            <button className="treadz-secondary-button w-full">
              My Posts
            </button>
          </div>
          <div
            className="flex-1"
            onClick={() => setShowProfile(false)}
          ></div>
        </div>
      )}
      
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-black/70 flex">
          <div className="w-4/5 h-full bg-black border-r border-treadz-purple/30 animate-slide-in-left p-4">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setShowSettings(false)}
                className="text-white"
              >
                ✕
              </button>
            </div>
            
            <h2 className="text-xl font-bold text-white mb-6">Settings</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border border-white/10 rounded-md">
                <div className="flex items-center">
                  <Bell className="w-5 h-5 text-white mr-3" />
                  <span className="text-white">Notifications</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-treadz-purple"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between p-3 border border-white/10 rounded-md">
                <div className="flex items-center">
                  <User className="w-5 h-5 text-white mr-3" />
                  <span className="text-white">Privacy</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-treadz-purple"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between p-3 border border-white/10 rounded-md">
                <div className="flex items-center">
                  <Settings className="w-5 h-5 text-white mr-3" />
                  <span className="text-white">Dark Mode</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-treadz-purple"></div>
                </label>
              </div>
            </div>
            
            <button className="treadz-secondary-button w-full mt-8">
              Log Out
            </button>
          </div>
          <div
            className="flex-1"
            onClick={() => setShowSettings(false)}
          ></div>
        </div>
      )}
      
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-purple-400 flex items-center justify-around z-50">
        <button className="flex flex-col items-center w-1/3 text-white">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </button>
        
        <button className="flex flex-col items-center w-1/3 text-white">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </button>
        
        <button className="flex flex-col items-center w-1/3 text-white">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
