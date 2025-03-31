
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/CustomButton';
import { adminLogin } from '@/services/api';
import { toast } from "sonner";
import { Loader2 } from 'lucide-react';
import { useAuth } from '@/App';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast.error("Please enter both username and password");
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Try the actual API first
      const result = await adminLogin(username, password);
      
      if (result) {
        login(result.token);
        toast.success("Login successful!");
        navigate('/admin-dashboard');
        return;
      }
    } catch (error) {
      console.error("API login error:", error);
      
      // Fallback to mock login for demonstration (only if API is unreachable)
      if (username === 'admin' && password === 'demo123') {
        // Store a mock token via the auth context
        login('demo-token-12345');
        toast.success("Demo login successful!");
        navigate('/admin-dashboard');
        return;
      }
      
      toast.error("Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto glassmorphism rounded-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-display font-bold text-skitm-navy mb-2">Admin Login</h1>
              <p className="text-skitm-gray">Please enter your credentials to continue</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-skitm-navy mb-1">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-skitm-blue/50 focus:border-skitm-blue"
                  placeholder="Enter your username"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-skitm-navy mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-skitm-blue/50 focus:border-skitm-blue"
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              <div className="text-right">
                <a href="#" className="text-sm text-skitm-blue hover:text-skitm-navy transition-colors">
                  Forgot password?
                </a>
              </div>
              
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-skitm-gray">
                Need help? Contact the IT department at <a href="mailto:it@skitm.in" className="text-skitm-blue hover:text-skitm-navy transition-colors">it@skitm.in</a>
              </p>
            </div>
            
            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-md">
              <p className="text-sm text-amber-800">
                <strong>Demo Access:</strong> Use username <code>admin</code> and password <code>demo123</code> for demo login.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
