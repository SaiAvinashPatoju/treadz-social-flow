
import { useState } from "react";
import { User, Settings, Bell } from "lucide-react";
import BottomNavigation from "@/components/BottomNavigation";
import PostCard from "@/components/PostCard";

// Sample data for demonstration
const posts = [
  {
    id: 1,
    username: "jessica_design",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    timestamp: "2h ago",
    content: "Just launched my new portfolio website! Check it out and let me know what you think 🎉",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80",
    likes: 124,
    comments: 23,
  },
  {
    id: 2,
    username: "travel_mike",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    timestamp: "5h ago",
    content: "Beautiful sunset at the beach today. Sometimes you need to take a moment and enjoy the simple things in life.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80",
    likes: 231,
    comments: 42,
  },
  {
    id: 3,
    username: "fitness_sarah",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    timestamp: "Yesterday",
    content: "Completed my 30-day workout challenge! Feeling stronger than ever 💪",
    likes: 98,
    comments: 15,
  },
];

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState("feed");
  const [showProfile, setShowProfile] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="min-h-screen bg-black pb-16">
      <header className="sticky top-0 z-40 bg-black border-b border-white/10 px-4 py-3 flex justify-between items-center">
        <button
          onClick={() => {
            setShowProfile(true);
            setShowSettings(false);
          }}
          className="w-10 h-10 rounded-full bg-treadz-purple/20 flex items-center justify-center"
        >
          <User className="w-5 h-5 text-white" />
        </button>
        
        <h1 className="text-xl font-bold text-white">Treadz</h1>
        
        <button
          onClick={() => {
            setShowSettings(true);
            setShowProfile(false);
          }}
          className="w-10 h-10 rounded-full bg-treadz-purple/20 flex items-center justify-center"
        >
          <Settings className="w-5 h-5 text-white" />
        </button>
      </header>
      
      <div className="px-4 py-3 flex border-b border-white/10">
        <button
          className={`flex-1 py-2 text-center ${
            activeTab === "feed"
              ? "text-treadz-purple border-b-2 border-treadz-purple"
              : "text-white"
          }`}
          onClick={() => setActiveTab("feed")}
        >
          Feed
        </button>
        <button
          className={`flex-1 py-2 text-center ${
            activeTab === "stats"
              ? "text-treadz-purple border-b-2 border-treadz-purple"
              : "text-white"
          }`}
          onClick={() => setActiveTab("stats")}
        >
          Stats
        </button>
      </div>
      
      {/* Main content */}
      <div className="px-4 py-3">
        {activeTab === "feed" ? (
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                username={post.username}
                avatar={post.avatar}
                timestamp={post.timestamp}
                content={post.content}
                image={post.image}
                likes={post.likes}
                comments={post.comments}
              />
            ))}
          </div>
        ) : (
          <div className="p-4 text-white">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-treadz-purple/20 p-4 rounded-lg text-center">
                <h3 className="text-3xl font-bold mb-1">453</h3>
                <p className="text-sm">Total Likes</p>
              </div>
              <div className="bg-treadz-purple/20 p-4 rounded-lg text-center">
                <h3 className="text-3xl font-bold mb-1">80</h3>
                <p className="text-sm">Total Comments</p>
              </div>
            </div>
            
            <h3 className="text-xl mb-4">Activity Overview</h3>
            <div className="space-y-3">
              <div className="bg-black border border-white/10 p-3 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <span>Posts</span>
                  <span>12</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-treadz-purple h-full rounded-full" style={{ width: "60%" }}></div>
                </div>
              </div>
              <div className="bg-black border border-white/10 p-3 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <span>Comments</span>
                  <span>80</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-treadz-purple h-full rounded-full" style={{ width: "40%" }}></div>
                </div>
              </div>
              <div className="bg-black border border-white/10 p-3 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <span>Likes Given</span>
                  <span>230</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-treadz-purple h-full rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Profile Panel */}
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
      
      {/* Settings Panel */}
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
      
      <BottomNavigation />
    </div>
  );
};

export default HomeScreen;
