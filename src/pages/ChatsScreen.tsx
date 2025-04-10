
import { useState } from "react";
import { Search } from "lucide-react";
import BottomNavigation from "@/components/BottomNavigation";
import ChatPreview from "@/components/ChatPreview";

// Sample data for chats
const chats = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    lastMessage: "Hey, are you coming to the meetup tomorrow?",
    timestamp: "5m ago",
    unread: 2,
    isGroup: false
  },
  {
    id: 2,
    name: "Design Team",
    avatar: [
      "https://randomuser.me/api/portraits/men/32.jpg",
      "https://randomuser.me/api/portraits/women/68.jpg"
    ],
    lastMessage: "Mike: I've uploaded the new mockups to the shared folder",
    timestamp: "25m ago",
    unread: 0,
    isGroup: true
  },
  {
    id: 3,
    name: "Jason Miller",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    lastMessage: "Thanks for the help with the project!",
    timestamp: "2h ago",
    unread: 0,
    isGroup: false
  },
  {
    id: 4,
    name: "Travel Buddies",
    avatar: [
      "https://randomuser.me/api/portraits/women/22.jpg",
      "https://randomuser.me/api/portraits/men/54.jpg"
    ],
    lastMessage: "Alex: Has everyone booked their flights yet?",
    timestamp: "Yesterday",
    unread: 5,
    isGroup: true
  },
  {
    id: 5,
    name: "Emma Wilson",
    avatar: "https://randomuser.me/api/portraits/women/64.jpg",
    lastMessage: "The concert was amazing! Check out the videos I posted",
    timestamp: "2d ago",
    unread: 0,
    isGroup: false
  }
];

const ChatsScreen = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredChats = chats.filter(chat => {
    if (activeTab === "groups" && !chat.isGroup) return false;
    if (activeTab === "all" && searchQuery) {
      return chat.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-black pb-16">
      <header className="sticky top-0 z-40 bg-black border-b border-white/10 px-4 py-3">
        <h1 className="text-xl font-bold text-white text-center">Messages</h1>
      </header>
      
      <div className="px-4 py-3 flex border-b border-white/10">
        <button
          className={`flex-1 py-2 text-center ${
            activeTab === "all"
              ? "text-treadz-purple border-b-2 border-treadz-purple"
              : "text-white"
          }`}
          onClick={() => setActiveTab("all")}
        >
          ALL
        </button>
        <button
          className={`flex-1 py-2 text-center ${
            activeTab === "groups"
              ? "text-treadz-purple border-b-2 border-treadz-purple"
              : "text-white"
          }`}
          onClick={() => setActiveTab("groups")}
        >
          GROUPS
        </button>
      </div>
      
      <div className="p-4 border-b border-white/10">
        <div className="relative">
          <input
            type="text"
            placeholder="Search messages..."
            className="treadz-input pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>
      
      <div className="pb-4">
        {filteredChats.length > 0 ? (
          filteredChats.map((chat) => (
            <ChatPreview
              key={chat.id}
              name={chat.name}
              avatar={chat.avatar}
              lastMessage={chat.lastMessage}
              timestamp={chat.timestamp}
              unread={chat.unread}
              isGroup={chat.isGroup}
            />
          ))
        ) : (
          <div className="p-8 text-center text-gray-400">
            <p>No messages found</p>
          </div>
        )}
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default ChatsScreen;
