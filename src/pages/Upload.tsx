
import { useState, useRef } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Upload as UploadIcon, X, FileText, FileImage, FileVideo, File } from "lucide-react";

const Upload = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      
      // Initialize progress for each file
      newFiles.forEach((file) => {
        setUploadProgress((prev) => ({
          ...prev,
          [file.name]: 0,
        }));
      });
    }
  };

  const removeFile = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
    setUploadProgress((prev) => {
      const newProgress = { ...prev };
      delete newProgress[fileName];
      return newProgress;
    });
  };

  const getFileIcon = (fileType: string) => {
    if (fileType.startsWith("image/")) {
      return <FileImage className="h-5 w-5 text-brand-purple" />;
    } else if (fileType.startsWith("video/")) {
      return <FileVideo className="h-5 w-5 text-brand-teal" />;
    } else if (fileType.startsWith("text/") || fileType.includes("pdf") || fileType.includes("document")) {
      return <FileText className="h-5 w-5 text-brand-purple" />;
    } else {
      return <File className="h-5 w-5 text-gray-400" />;
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const simulateUpload = () => {
    if (files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please select files to upload",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);

    // Simulate file upload with progress
    files.forEach((file) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          
          // Check if all files are done
          const allDone = Object.values(uploadProgress).every((p) => p === 100);
          if (allDone) {
            setUploading(false);
            toast({
              title: "Upload Complete",
              description: `Successfully uploaded ${files.length} files`,
            });
            
            // In a real app, you would reset files after successful upload
            // For demo, let's leave them visible with 100% progress
          }
        }
        
        setUploadProgress((prev) => ({
          ...prev,
          [file.name]: Math.round(progress),
        }));
      }, 300);
    });
  };

  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <h2 className="text-2xl font-bold text-white">Upload Files</h2>
        
        <Card className="glass border-white/10">
          <CardContent className="p-6">
            <div
              className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-brand-purple/50 transition-colors cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                type="file"
                multiple
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileSelect}
              />
              <UploadIcon className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">
                Drag and drop your files here
              </h3>
              <p className="text-gray-400 mb-4">
                or click to browse your computer
              </p>
              <Button className="bg-brand-purple hover:bg-brand-dark-purple">
                Select Files
              </Button>
            </div>
          </CardContent>
        </Card>

        {files.length > 0 && (
          <Card className="glass border-white/10">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium text-white mb-4">
                Selected Files ({files.length})
              </h3>
              
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {files.map((file) => (
                  <div key={file.name} className="glass p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        {getFileIcon(file.type)}
                        <span className="ml-2 text-white font-medium truncate max-w-[200px]">
                          {file.name}
                        </span>
                      </div>
                      <button
                        onClick={() => removeFile(file.name)}
                        className="text-gray-400 hover:text-white transition-colors"
                        disabled={uploading}
                      >
                        <X size={18} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span>{formatFileSize(file.size)}</span>
                      <span>{uploadProgress[file.name]}%</span>
                    </div>
                    <Progress
                      value={uploadProgress[file.name] || 0}
                      className="h-1 bg-white/10"
                    />
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex justify-end">
                <Button
                  className="bg-brand-purple hover:bg-brand-dark-purple"
                  onClick={simulateUpload}
                  disabled={uploading}
                >
                  {uploading ? "Uploading..." : "Upload All Files"}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Upload;
