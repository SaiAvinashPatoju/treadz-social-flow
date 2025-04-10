
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SplashScreen = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Add small delay before starting animation
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ 
        backgroundColor: "#000",
      }}
    >
      {/* Background image with social media icons */}
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ 
        backgroundImage: "url('/lovable-uploads/e4b27a5d-0b50-4663-a783-b0124128e57a.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }} />
      
      {/* Animated content */}
      <div className="flex-1 flex flex-col items-center justify-center z-10 px-6">
        <div className="w-full flex flex-col items-center">
          {showContent ? (
            <>
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1, x: -60 }}
                transition={{ 
                  duration: 0.8, 
                  type: "spring",
                  stiffness: 100
                }}
                className="flex items-center justify-start w-full mb-6"
              >
                <h1 className="text-4xl font-bold text-black">Threadz</h1>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-black text-center max-w-xs mb-16 font-medium"
              >
                Connect, share, and explore with your community
              </motion.p>
            </>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h1 className="text-5xl font-bold text-black">Threadz</h1>
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Buttons with modern design */}
      <div className="p-6 w-full space-y-4 z-10">
        <Link 
          to="/login" 
          className="block w-full"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-6 bg-purple-400 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-200"
          >
            Login
          </motion.button>
        </Link>
        
        <Link 
          to="/signup" 
          className="block w-full"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-6 bg-purple-500 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-200"
          >
            Sign Up / Register
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default SplashScreen;
