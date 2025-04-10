
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowLeft, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const SignUpScreen = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreeTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }
    
    if (!formData.agreeTerms) {
      toast.error("You must agree to the Terms and Privacy Policy");
      return;
    }
    
    // In a real app, we would send this data to an API
    toast.success("Account created successfully!");
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
      
      <div className="flex-1 flex flex-col items-center px-6 pt-8">
        <h1 className="text-3xl font-bold text-white mb-8">SIGN UP</h1>
        
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="FIRST NAME"
              className="treadz-input"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="LAST NAME"
              className="treadz-input"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          
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
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              className="w-4 h-4 bg-transparent border border-white rounded"
              checked={formData.agreeTerms}
              onChange={handleChange}
            />
            <label htmlFor="agreeTerms" className="ml-2 text-sm text-white">
              I agree to Terms & Privacy
            </label>
          </div>
          
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="w-12 h-12 bg-treadz-purple rounded-full flex items-center justify-center text-white"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpScreen;
