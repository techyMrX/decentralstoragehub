
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  FileText, 
  FileImage, 
  FileVideo, 
  File, 
  MoreHorizontal,
  Download,
  Share2,
  Trash2,
  Grid,
  List
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// File type interface
interface FileItem {
  id: string;
  name: string;
  type: string;
  size: string;
  modified: string;
  icon: JSX.Element;
  category: "documents" | "images" | "videos" | "other";
}

const Files = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock file data
  const filesList: FileItem[] = [
    {
      id: "1",
      name: "Project Proposal.pdf",
      type: "PDF",
      size: "3.2 MB",
      modified: "Today, 14:32",
      icon: <FileText className="h-5 w-5 text-brand-purple" />,
      category: "documents",
    },
    {
      id: "2",
      name: "Financial Report Q2.xlsx",
      type: "XLSX",
      size: "1.8 MB",
      modified: "Yesterday",
      icon: <FileText className="h-5 w-5 text-brand-purple" />,
      category: "documents",
    },
    {
      id: "3",
      name: "Team Photo.jpg",
      type: "JPG",
      size: "5.4 MB",
      modified: "Yesterday",
      icon: <FileImage className="h-5 w-5 text-brand-teal" />,
      category: "images",
    },
    {
      id: "4",
      name: "Product Mockup.png",
      type: "PNG",
      size: "2.3 MB",
      modified: "2 days ago",
      icon: <FileImage className="h-5 w-5 text-brand-teal" />,
      category: "images",
    },
    {
      id: "5",
      name: "Client Meeting.mp4",
      type: "MP4",
      size: "128 MB",
      modified: "3 days ago",
      icon: <FileVideo className="h-5 w-5 text-brand-purple" />,
      category: "videos",
    },
    {
      id: "6",
      name: "Architecture Diagram.drawio",
      type: "DRAWIO",
      size: "257 KB",
      modified: "1 week ago",
      icon: <File className="h-5 w-5 text-gray-400" />,
      category: "other",
    },
    {
      id: "7",
      name: "Marketing Brochure.pdf",
      type: "PDF",
      size: "8.7 MB",
      modified: "1 week ago",
      icon: <FileText className="h-5 w-5 text-brand-purple" />,
      category: "documents",
    },
    {
      id: "8",
      name: "Logo Vector.svg",
      type: "SVG",
      size: "145 KB",
      modified: "2 weeks ago",
      icon: <FileImage className="h-5 w-5 text-brand-teal" />,
      category: "images",
    },
  ];

  // Filter files based on search query and active tab
  const filterFiles = (files: FileItem[], category: string, query: string) => {
    return files.filter((file) => {
      const matchesCategory = category === "all" || file.category === category;
      const matchesSearch = file.name.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };

  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-2xl font-bold text-white">My Files</h2>
          
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Input
                placeholder="Search files..."
                className="pl-9 bg-white/5 border-white/10 focus:border-brand-purple/50 text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            
            <div className="flex items-center border border-white/10 rounded-md">
              <Button
                variant="ghost"
                size="icon"
                className={`${
                  viewMode === "grid" ? "bg-white/10 text-white" : "text-gray-400"
                }`}
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`${
                  viewMode === "list" ? "bg-white/10 text-white" : "text-gray-400"
                }`}
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList className="bg-white/5 border border-white/10">
            <TabsTrigger value="all" className="data-[state=active]:bg-brand-purple data-[state=active]:text-white">
              All Files
            </TabsTrigger>
            <TabsTrigger value="documents" className="data-[state=active]:bg-brand-purple data-[state=active]:text-white">
              Documents
            </TabsTrigger>
            <TabsTrigger value="images" className="data-[state=active]:bg-brand-purple data-[state=active]:text-white">
              Images
            </TabsTrigger>
            <TabsTrigger value="videos" className="data-[state=active]:bg-brand-purple data-[state=active]:text-white">
              Videos
            </TabsTrigger>
            <TabsTrigger value="other" className="data-[state=active]:bg-brand-purple data-[state=active]:text-white">
              Other
            </TabsTrigger>
          </TabsList>

          {["all", "documents", "images", "videos", "other"].map((category) => (
            <TabsContent key={category} value={category} className="space-y-4">
              <Card className="glass border-white/10">
                <CardContent className="p-6">
                  {filterFiles(filesList, category, searchQuery).length === 0 ? (
                    <div className="text-center py-8">
                      <File className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                      <h3 className="text-lg font-medium text-white mb-2">No files found</h3>
                      <p className="text-gray-400">
                        {searchQuery ? "Try a different search term" : "Upload some files to get started"}
                      </p>
                    </div>
                  ) : viewMode === "grid" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {filterFiles(filesList, category, searchQuery).map((file) => (
                        <div key={file.id} className="glass p-4 rounded-lg group hover:border-brand-purple/30 transition-all">
                          <div className="mb-4 h-12 w-12 bg-brand-purple/10 rounded-lg flex items-center justify-center mx-auto">
                            {file.icon}
                          </div>
                          <div className="text-center">
                            <h3 className="font-medium text-white truncate" title={file.name}>
                              {file.name}
                            </h3>
                            <p className="text-xs text-gray-400 mt-1">
                              {file.type} • {file.size}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">{file.modified}</p>
                          </div>
                          <div className="mt-4 pt-4 border-t border-white/10 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <MoreHorizontal className="h-4 w-4 text-gray-400" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className="glass border-white/10">
                                <DropdownMenuItem className="text-white flex items-center cursor-pointer">
                                  <Download className="mr-2 h-4 w-4" />
                                  Download
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-white flex items-center cursor-pointer">
                                  <Share2 className="mr-2 h-4 w-4" />
                                  Share
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="bg-white/10" />
                                <DropdownMenuItem className="text-red-500 flex items-center cursor-pointer">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="divide-y divide-white/10">
                      <div className="grid grid-cols-12 gap-4 px-4 py-2 text-sm font-medium text-gray-400">
                        <div className="col-span-5">Name</div>
                        <div className="col-span-2">Type</div>
                        <div className="col-span-2">Size</div>
                        <div className="col-span-2">Modified</div>
                        <div className="col-span-1"></div>
                      </div>
                      {filterFiles(filesList, category, searchQuery).map((file) => (
                        <div key={file.id} className="grid grid-cols-12 gap-4 px-4 py-3 items-center hover:bg-white/5 transition-colors">
                          <div className="col-span-5 flex items-center">
                            <div className="mr-3">{file.icon}</div>
                            <span className="text-white truncate" title={file.name}>
                              {file.name}
                            </span>
                          </div>
                          <div className="col-span-2 text-gray-400 text-sm">{file.type}</div>
                          <div className="col-span-2 text-gray-400 text-sm">{file.size}</div>
                          <div className="col-span-2 text-gray-400 text-sm">{file.modified}</div>
                          <div className="col-span-1 text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <MoreHorizontal className="h-4 w-4 text-gray-400" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className="glass border-white/10">
                                <DropdownMenuItem className="text-white flex items-center cursor-pointer">
                                  <Download className="mr-2 h-4 w-4" />
                                  Download
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-white flex items-center cursor-pointer">
                                  <Share2 className="mr-2 h-4 w-4" />
                                  Share
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="bg-white/10" />
                                <DropdownMenuItem className="text-red-500 flex items-center cursor-pointer">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Files;
