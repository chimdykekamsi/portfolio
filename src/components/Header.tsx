
import { Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Chimdyke Kamsi
          </h3>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/chimdykekamsi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>          <a
            href="https://docs.google.com/document/d/1WdIN2owZ0rQ-VsIoWxcHnmMFLZsG71RgCFspsmlEMLs/edit?usp=sharing" // Replace with your actual resume file path
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-gray-600 text-white hover:bg-gray-800 hover:text-white font-medium shadow-lg bg-gray-800/50 backdrop-blur-sm rounded-md transition-colors"
          >
            <FileText size={16} />
            View Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
