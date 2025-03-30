
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, HardDrive, Share2, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Mock data
  const stats = [
    { 
      title: "Total Files", 
      value: "124", 
      change: "+5% from last month",
      icon: <HardDrive className="h-5 w-5 text-brand-purple" />,
      color: "bg-brand-purple/10"
    },
    { 
      title: "Storage Used", 
      value: "2.7 GB", 
      change: "27% of 10GB quota",
      icon: <Upload className="h-5 w-5 text-brand-teal" />,
      color: "bg-brand-teal/10"
    },
    { 
      title: "Shared Files", 
      value: "17", 
      change: "Across 3 collaborators",
      icon: <Share2 className="h-5 w-5 text-brand-purple" />,
      color: "bg-brand-purple/10"
    },
    { 
      title: "Security Score", 
      value: "92/100", 
      change: "Excellent protection",
      icon: <Shield className="h-5 w-5 text-brand-teal" />,
      color: "bg-brand-teal/10"
    },
  ];

  const recentFiles = [
    { 
      name: "Project Proposal.pdf", 
      size: "3.2 MB", 
      type: "PDF",
      date: "Today, 14:32", 
      icon: "📄" 
    },
    { 
      name: "Financial Report.xlsx", 
      size: "1.8 MB", 
      type: "XLSX",
      date: "Yesterday, 10:15", 
      icon: "📊" 
    },
    { 
      name: "Team Photo.jpg", 
      size: "5.4 MB", 
      type: "JPG",
      date: "Yesterday, 09:45", 
      icon: "🖼️" 
    },
    { 
      name: "Client Meeting.mp4", 
      size: "128 MB", 
      type: "MP4",
      date: "2 days ago", 
      icon: "🎬" 
    },
  ];

  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl font-bold text-white">Dashboard Overview</h2>
          <Link to="/dashboard/upload">
            <Button className="bg-brand-purple hover:bg-brand-dark-purple mt-2 md:mt-0">
              <Upload className="h-4 w-4 mr-2" />
              Upload New Files
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="glass border-white/10">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.color}`}>
                  {stat.icon}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <p className="text-xs text-gray-400 mt-1">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Storage Usage */}
        <Card className="glass border-white/10">
          <CardHeader>
            <CardTitle className="text-lg font-medium text-white">Storage Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-300">2.7 GB of 10 GB used</span>
                <span className="text-gray-300">27%</span>
              </div>
              <Progress value={27} className="h-2 bg-white/10" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="glass p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-brand-purple mr-2"></div>
                      <span className="text-sm text-gray-300">Documents</span>
                    </div>
                    <span className="text-sm text-white">1.2 GB</span>
                  </div>
                </div>
                <div className="glass p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-brand-teal mr-2"></div>
                      <span className="text-sm text-gray-300">Media</span>
                    </div>
                    <span className="text-sm text-white">1.0 GB</span>
                  </div>
                </div>
                <div className="glass p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-gray-400 mr-2"></div>
                      <span className="text-sm text-gray-300">Other</span>
                    </div>
                    <span className="text-sm text-white">0.5 GB</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Files */}
        <Card className="glass border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium text-white">Recent Files</CardTitle>
            <Clock className="h-5 w-5 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentFiles.map((file, index) => (
                <div key={index} className="glass p-3 rounded-lg flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-2xl mr-3">{file.icon}</div>
                    <div>
                      <h4 className="text-sm font-medium text-white">{file.name}</h4>
                      <p className="text-xs text-gray-400">{file.type} • {file.size}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-400 mr-4">{file.date}</span>
                    <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
                      <HardDrive className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              ))}
              
              <div className="text-center mt-4">
                <Link to="/dashboard/files">
                  <Button variant="outline" className="text-brand-purple border-brand-purple/30 hover:bg-brand-purple/10">
                    View All Files
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
