
import { Link } from "react-router-dom";

const SplashScreen = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: "linear-gradient(to bottom, rgba(75, 0, 130, 0.7), rgba(0, 0, 0, 0.9)), url('/lovable-uploads/904f7527-85d1-4e0d-b867-e5415d7afab2.png')" }}>
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-white mb-8">Treadz</h1>
        <p className="text-white/80 text-center max-w-xs mb-12">
          Connect, share, and explore with your community
        </p>
      </div>
      
      <div className="p-6 w-full space-y-4">
        <Link to="/login" className="treadz-primary-button block w-full">
          Login
        </Link>
        <Link to="/signup" className="treadz-secondary-button block w-full">
          Sign Up / Register
        </Link>
      </div>
    </div>
  );
};

export default SplashScreen;
