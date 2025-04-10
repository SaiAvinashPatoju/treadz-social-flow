
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const LoginScreen = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }
    
    // In a real app, we would authenticate with an API
    toast.success("Logged in successfully!");
    navigate("/home");
  };

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
          <span>Back</span>
        </Link>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <h1 className="text-3xl font-bold text-white mb-12">LOGIN</h1>
        
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div>
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              className="treadz-input"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="PASSWORD"
              className="treadz-input pr-10"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
          
          <button
            type="submit"
            className="treadz-primary-button w-full py-3"
          >
            Login
          </button>
          
          <div className="text-center">
            <Link to="/" className="text-sm text-white hover:underline">
              Forgot Password?
            </Link>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-treadz-lightgray">
              Don't have an account?{" "}
              <Link to="/signup" className="text-white hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
