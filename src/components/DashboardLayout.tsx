
import { ReactNode, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { 
  Database, 
  Home, 
  Upload, 
  HardDrive, 
  Share2, 
  Settings, 
  User, 
  LogOut, 
  Menu, 
  X,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  // Simulated user data - in a real app, this would come from your auth system
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatarUrl: "",
    usedStorage: 2.7, // GB
    totalStorage: 10, // GB
  };

  const storagePercentage = (user.usedStorage / user.totalStorage) * 100;
  
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <Home size={20} /> },
    { name: "Upload Files", path: "/dashboard/upload", icon: <Upload size={20} /> },
    { name: "My Files", path: "/dashboard/files", icon: <HardDrive size={20} /> },
    { name: "Shared", path: "/dashboard/shared", icon: <Share2 size={20} /> },
    { name: "Settings", path: "/dashboard/settings", icon: <Settings size={20} /> },
    { name: "Account", path: "/dashboard/account", icon: <User size={20} /> },
  ];
  
  const handleLogout = () => {
    // In a real app, this would call your auth service to log out
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    
    navigate("/");
  };
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex md:w-64 flex-col bg-black/20 glass border-r border-white/5">
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-brand-purple rounded-lg p-1">
              <Database size={20} className="text-white" />
            </div>
            <span className="text-lg font-bold text-white">DecentStore</span>
          </Link>
        </div>
        
        <div className="p-6">
          <div className="flex flex-col items-center mb-6">
            <Avatar className="h-16 w-16 mb-2">
              <AvatarImage src={user.avatarUrl} alt={user.name} />
              <AvatarFallback className="bg-brand-purple text-white">
                {user.name.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <h3 className="text-white font-medium">{user.name}</h3>
            <p className="text-gray-400 text-sm">{user.email}</p>
          </div>
          
          <div className="mb-6 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Storage</span>
              <span className="text-white">
                {user.usedStorage} GB / {user.totalStorage} GB
              </span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-purple rounded-full"
                style={{ width: `${storagePercentage}%` }}
              ></div>
            </div>
          </div>
          
          <Separator className="bg-white/10 my-6" />
          
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? "bg-brand-purple/20 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="mt-auto p-6">
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-400 hover:text-white hover:bg-white/5"
            onClick={handleLogout}
          >
            <LogOut size={20} className="mr-3" />
            Logout
          </Button>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 overflow-hidden flex flex-col">
        {/* Header */}
        <header className="p-4 glass flex items-center justify-between border-b border-white/5">
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden mr-4 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <h1 className="text-xl font-semibold text-white">
              {menuItems.find((item) => isActive(item.path))?.name || "Dashboard"}
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-purple rounded-full text-white text-xs flex items-center justify-center">
                3
              </span>
            </button>
            
            <div className="md:hidden">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.avatarUrl} alt={user.name} />
                <AvatarFallback className="bg-brand-purple text-white text-sm">
                  {user.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>
        
        {/* Mobile Sidebar */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
            <div className="w-64 h-full bg-brand-dark-bg glass border-r border-white/5 overflow-auto">
              <div className="p-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                  <div className="bg-brand-purple rounded-lg p-1">
                    <Database size={20} className="text-white" />
                  </div>
                  <span className="text-lg font-bold text-white">DecentStore</span>
                </Link>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X size={24} className="text-white" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex flex-col items-center mb-6">
                  <Avatar className="h-16 w-16 mb-2">
                    <AvatarImage src={user.avatarUrl} alt={user.name} />
                    <AvatarFallback className="bg-brand-purple text-white">
                      {user.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-white font-medium">{user.name}</h3>
                  <p className="text-gray-400 text-sm">{user.email}</p>
                </div>
                
                <div className="mb-6 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Storage</span>
                    <span className="text-white">
                      {user.usedStorage} GB / {user.totalStorage} GB
                    </span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-purple rounded-full"
                      style={{ width: `${storagePercentage}%` }}
                    ></div>
                  </div>
                </div>
                
                <Separator className="bg-white/10 my-6" />
                
                <nav className="space-y-1">
                  {menuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive(item.path)
                          ? "bg-brand-purple/20 text-white"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </nav>
              </div>
              
              <div className="p-6">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-400 hover:text-white hover:bg-white/5"
                  onClick={handleLogout}
                >
                  <LogOut size={20} className="mr-3" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        )}
        
        {/* Page Content */}
        <div className="flex-1 overflow-auto p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
