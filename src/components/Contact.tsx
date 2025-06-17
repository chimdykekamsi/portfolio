import { useState } from "react";
import { Github, Linkedin, Mail, Phone, Instagram, Facebook } from "lucide-react";
import ContactModal from "./ContactModal";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Let's Build Something Amazing</h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Looking for a backend engineer to architect scalable systems? 
          Let's discuss how I can help bring your vision to life.
        </p>          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          <a 
            href="mailto:ckamsi04@gmail.com"
            className="p-6 bg-gray-900/50 rounded-xl border border-gray-700 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 group"
          >
            <div className="text-2xl mb-3">
              <Mail className="w-8 h-8 mx-auto text-blue-400 group-hover:text-blue-300" />
            </div>
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-gray-400 font-mono text-sm group-hover:text-blue-400">ckamsi04@gmail.com</p>
          </a>
          
          <a 
            href="https://linkedin.com/in/ckamsi04"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-gray-900/50 rounded-xl border border-gray-700 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 group"
          >
            <div className="text-2xl mb-3">
              <Linkedin className="w-8 h-8 mx-auto text-blue-400 group-hover:text-blue-300" />
            </div>
            <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-400 font-mono text-sm group-hover:text-blue-400">@ckamsi04</p>
          </a>
          
          <a 
            href="https://github.com/chimdykekamsi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-gray-900/50 rounded-xl border border-gray-700 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 group"
          >
            <div className="text-2xl mb-3">
              <Github className="w-8 h-8 mx-auto text-blue-400 group-hover:text-blue-300" />
            </div>
            <h3 className="text-white font-semibold mb-2">GitHub</h3>
            <p className="text-gray-400 font-mono text-sm group-hover:text-blue-400">@chimdykekamsi</p>
          </a>

          <a 
            href="https://wa.me/2349110214312"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-gray-900/50 rounded-xl border border-gray-700 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 group"
          >
            <div className="text-2xl mb-3">
              <Phone className="w-8 h-8 mx-auto text-green-400 group-hover:text-green-300" />
            </div>
            <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-400 font-mono text-sm group-hover:text-green-400">+234 911 021 4312</p>
          </a>

          <a 
            href="https://instagram.com/ckamsi04"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-gray-900/50 rounded-xl border border-gray-700 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 group"
          >
            <div className="text-2xl mb-3">
              <Instagram className="w-8 h-8 mx-auto text-pink-400 group-hover:text-pink-300" />
            </div>
            <h3 className="text-white font-semibold mb-2">Instagram</h3>            <p className="text-gray-400 font-mono text-sm group-hover:text-pink-400">@ckamsi04</p>
          </a>

          <a 
            href="https://facebook.com/ckamsi04"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-gray-900/50 rounded-xl border border-gray-700 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 group"
          >
            <div className="text-2xl mb-3">
              <Facebook className="w-8 h-8 mx-auto text-blue-500 group-hover:text-blue-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">Facebook</h3>
            <p className="text-gray-400 font-mono text-sm group-hover:text-blue-500">@chimdykekamsi</p>
          </a>
        </div>
        
        <div className="space-y-4">
          <div className="text-gray-400 mb-4">
            Find me as <span className="text-blue-400 font-mono">@ckamsi04</span> on social platforms
          </div>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
      </div>
      
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Contact;
