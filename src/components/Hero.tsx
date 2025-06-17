
import { Code, Database, Server, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Floating icons */}
      <div className="absolute top-20 left-20 opacity-10 animate-pulse">
        <Database size={60} />
      </div>
      <div className="absolute top-40 right-32 opacity-10 animate-pulse delay-1000">
        <Server size={40} />
      </div>
      <div className="absolute bottom-32 left-32 opacity-10 animate-pulse delay-2000">
        <Code size={50} />
      </div>
      <div className="absolute top-60 right-20 opacity-10 animate-pulse delay-3000">
        <Globe size={45} />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8">          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent animate-fade-in">
            Chimdyke K. Anagboso
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 animate-fade-in delay-200">
            Backend Engineer
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed animate-fade-in delay-300">
            Expert in Node.js, TypeScript, and Cloud Architecture, specializing in building scalable APIs, resilient backend systems, and modern full-stack applications. Crafting high-performance solutions with a focus on code quality and system reliability.
          </p>
        </div>
        
        <div className="flex flex-row items-center justify-center gap-8 animate-fade-in delay-500">
          <div className="text-center">
            <div className="text-3xl font-mono text-blue-400 mb-2">3+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="block w-px h-12 bg-gray-600"></div>
          <div className="text-center">
            <div className="text-3xl font-mono text-emerald-400 mb-2">5+</div>
            <div className="text-gray-400">APIs Built</div>
          </div>
          <div className="block w-px h-12 bg-gray-600"></div>
          <div className="text-center">
            <div className="text-3xl font-mono text-purple-400 mb-2">99.9%</div>
            <div className="text-gray-400">Uptime Achieved</div>
          </div>
        </div>
        
        <div className="mt-12 animate-fade-in delay-700">
          <a 
            href="#projects" 
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 hover:scale-105"
          >
            Explore My APIs
          </a>
        </div>
        <div className="mt-2 animate-fade-in delay-700">
          <a 
            href="#skills" 
            className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-gray-600 text-white hover:bg-gray-800 hover:text-white font-medium shadow-lg bg-gray-800/50 backdrop-blur-sm rounded-md transition-colors"
          >
            My Skillset
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
