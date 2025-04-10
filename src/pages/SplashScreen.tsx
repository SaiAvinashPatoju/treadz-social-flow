
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
      {/* Hero image with gradient overlay */}
      <div className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1573152958734-1922c188fba3?q=80&w=1770&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
        {/* Deep purple gradient overlay */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, rgba(75, 0, 130, 0.7) 0%, rgba(0, 0, 0, 0.8) 100%)"
        }}></div>
      </div>
      
      {/* Animated content */}
      <div className="flex-1 flex flex-col items-center justify-center z-10 px-6">
        <div className="w-full flex flex-col items-center">
          {showContent ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 0, x: 0 }}
                animate={{ opacity: 1, y: 0, x: -60 }}
                transition={{ 
                  duration: 0.8, 
                  type: "spring",
                  stiffness: 100
                }}
                className="flex items-center justify-start w-full mb-6"
              >
                <h1 className="text-4xl font-bold text-white tracking-wide">Treadz</h1>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-white text-center max-w-xs mb-16 font-medium ml-[-60px] tracking-wide"
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
              <h1 className="text-5xl font-bold text-white tracking-wide">Treadz</h1>
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
            className="w-full py-3.5 px-6 bg-[#4B0082] text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
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
            className="w-full py-3.5 px-6 bg-transparent border-2 border-white text-white font-medium rounded-xl shadow-md hover:bg-white/10 transition-all duration-200"
          >
            Sign Up / Register
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default SplashScreen;
