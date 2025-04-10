
import { useState } from "react";
import { Heart, MessageCircle, Share } from "lucide-react";

interface PostCardProps {
  username: string;
  avatar: string;
  timestamp: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
}

const PostCard = ({
  username,
  avatar,
  timestamp,
  content,
  image,
  likes,
  comments,
}: PostCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-black border border-white/10 rounded-lg overflow-hidden mb-4">
      <div className="p-4">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-treadz-purple/20">
            <img
              src={avatar}
              alt={username}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-3">
            <h3 className="font-medium text-white">{username}</h3>
            <p className="text-xs text-gray-400">{timestamp}</p>
          </div>
        </div>
        
        <p className="text-white mb-4">{content}</p>
        
        {image && (
          <div className="rounded-lg overflow-hidden mb-3">
            <img
              src={image}
              alt="Post content"
              className="w-full object-cover"
            />
          </div>
        )}
        
        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <button
            className="flex items-center text-gray-300"
            onClick={handleLike}
          >
            <Heart
              className={`w-5 h-5 mr-1 ${
                isLiked
                  ? "text-red-500 fill-red-500 animate-heart-beat"
                  : "text-gray-300"
              }`}
            />
            <span>{likeCount}</span>
          </button>
          
          <button className="flex items-center text-gray-300">
            <MessageCircle className="w-5 h-5 mr-1" />
            <span>{comments}</span>
          </button>
          
          <button className="flex items-center text-gray-300">
            <Share className="w-5 h-5 mr-1" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
