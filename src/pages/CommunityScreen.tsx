
import { useState } from "react";
import { Plus } from "lucide-react";
import BottomNavigation from "@/components/BottomNavigation";

// Sample data for community posts
const communityPosts = [
  {
    id: 1,
    title: "Photography Tips & Tricks",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80",
    preview: "Share your photography tips and get feedback from experts",
    comments: 42
  },
  {
    id: 2,
    title: "Travel Destinations 2025",
    image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&q=80",
    preview: "Discuss the best places to visit this year and share your experiences",
    comments: 89
  },
  {
    id: 3,
    title: "Healthy Cooking",
    image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&q=80",
    preview: "Exchange recipes and ideas for nutritious and delicious meals",
    comments: 37
  },
  {
    id: 4,
    title: "Book Recommendations",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80",
    preview: "What are you reading? Share your favorite books and authors",
    comments: 61
  },
  {
    id: 5,
    title: "Home Workout Routines",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80",
    preview: "Stay fit with these home workouts - no equipment needed!",
    comments: 53
  },
  {
    id: 6,
    title: "DIY Home Projects",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80",
    preview: "Show off your latest DIY creations and get inspiration",
    comments: 29
  }
];

const CommunityScreen = () => {
  return (
    <div className="min-h-screen bg-black pb-16">
      <header className="sticky top-0 z-40 bg-black border-b border-white/10 px-4 py-3">
        <h1 className="text-xl font-bold text-white text-center">Community</h1>
      </header>
      
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {communityPosts.map((post) => (
            <div
              key={post.id}
              className="bg-black border border-white/10 rounded-lg overflow-hidden"
            >
              <div className="aspect-square overflow-hidden bg-treadz-purple/20">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-medium text-white text-sm mb-1">{post.title}</h3>
                <p className="text-xs text-gray-400 mb-2 line-clamp-2">{post.preview}</p>
                <div className="flex items-center text-gray-300 text-xs">
                  <span className="bg-treadz-purple/20 px-2 py-1 rounded">
                    {post.comments} comments
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating Action Button */}
      <button className="fixed right-6 bottom-20 w-14 h-14 bg-treadz-purple rounded-full flex items-center justify-center shadow-lg">
        <Plus className="w-6 h-6 text-white" />
      </button>
      
      <BottomNavigation />
    </div>
  );
};

export default CommunityScreen;
