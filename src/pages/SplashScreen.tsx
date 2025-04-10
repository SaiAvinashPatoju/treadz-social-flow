
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

  // Letter animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    })
  };

  // Tagline animation variants
  const taglineVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.7,
        duration: 0.5,
        type: "spring"
      }
    }
  };

  // Split the text for letter animation
  const text = "Treadz";
  const letters = Array.from(text);

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
        <motion.div 
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center mb-16"
        >
          {/* Letter by letter animation */}
          <div className="flex mb-4">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariants}
                className="text-6xl font-bold text-white tracking-wide inline-block"
                style={{ color: "#fff" }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          
          {/* Tagline animation */}
          <motion.p
            variants={taglineVariants}
            className="text-white text-center max-w-xs font-medium tracking-wide"
          >
            Connect, share, and explore with your community
          </motion.p>
        </motion.div>
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
