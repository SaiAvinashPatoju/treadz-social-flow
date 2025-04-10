
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div 
      className="min-h-screen flex flex-col bg-cover bg-center" 
      style={{ 
        backgroundImage: "linear-gradient(135deg, rgba(75, 0, 130, 0.9), rgba(0, 0, 0, 0.95))" 
      }}
    >
      <div className="p-4">
        <Link to="/" className="text-white flex items-center">
          <ArrowLeft className="w-5 h-5 mr-1" />
          <span>Back to Home</span>
        </Link>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-white/70 text-center mb-8">
          Oops! We couldn't find the page you're looking for.
        </p>
        <Link to="/" className="treadz-primary-button">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
