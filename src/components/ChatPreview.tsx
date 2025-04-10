
import React from "react";

interface ChatPreviewProps {
  avatar: string | string[];
  name: string;
  lastMessage: string;
  timestamp: string;
  unread?: number;
  isGroup?: boolean;
}

const ChatPreview = ({
  avatar,
  name,
  lastMessage,
  timestamp,
  unread = 0,
  isGroup = false,
}: ChatPreviewProps) => {
  return (
    <div className="flex items-center p-4 border-b border-white/10 hover:bg-white/5 transition cursor-pointer">
      <div className="relative mr-3">
        {isGroup && Array.isArray(avatar) ? (
          <div className="w-12 h-12 relative">
            <div className="absolute top-0 left-0 w-8 h-8 rounded-full overflow-hidden bg-treadz-purple/20">
              <img
                src={avatar[0]}
                alt={`${name} member 1`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full overflow-hidden bg-treadz-purple/20 border-2 border-black">
              <img
                src={avatar[1]}
                alt={`${name} member 2`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full overflow-hidden bg-treadz-purple/20">
            <img
              src={typeof avatar === "string" ? avatar : avatar[0]}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
      
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <h3 className="font-medium text-white">{name}</h3>
          <span className="text-xs text-gray-400">{timestamp}</span>
        </div>
        <p className="text-sm text-gray-300 truncate">{lastMessage}</p>
      </div>
      
      {unread > 0 && (
        <div className="w-6 h-6 bg-treadz-purple rounded-full flex items-center justify-center ml-2">
          <span className="text-xs text-white">{unread}</span>
        </div>
      )}
    </div>
  );
};

export default ChatPreview;
