
import { Home, Users, MessageSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-black border-t border-treadz-purple/30 flex items-center justify-around z-50">
      <Link
        to="/home"
        className={`flex flex-col items-center w-1/3 ${
          currentPath === "/home" ? "text-treadz-purple" : "text-white"
        }`}
      >
        <Home
          className={`w-6 h-6 ${
            currentPath === "/home"
              ? "text-treadz-purple fill-treadz-purple/20"
              : "text-white"
          }`}
        />
        <span className="text-xs mt-1">Home</span>
      </Link>
      
      <Link
        to="/community"
        className={`flex flex-col items-center w-1/3 ${
          currentPath === "/community" ? "text-treadz-purple" : "text-white"
        }`}
      >
        <Users
          className={`w-6 h-6 ${
            currentPath === "/community"
              ? "text-treadz-purple fill-treadz-purple/20"
              : "text-white"
          }`}
        />
        <span className="text-xs mt-1">Community</span>
      </Link>
      
      <Link
        to="/chats"
        className={`flex flex-col items-center w-1/3 ${
          currentPath === "/chats" ? "text-treadz-purple" : "text-white"
        }`}
      >
        <MessageSquare
          className={`w-6 h-6 ${
            currentPath === "/chats"
              ? "text-treadz-purple fill-treadz-purple/20"
              : "text-white"
          }`}
        />
        <span className="text-xs mt-1">Chats</span>
      </Link>
    </div>
  );
};

export default BottomNavigation;
