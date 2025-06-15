
import { useState } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
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
        </p>
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700">
            <div className="text-2xl mb-3">
              <Mail className="w-8 h-8 mx-auto text-blue-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-gray-400 font-mono text-sm">chimdike@example.com</p>
          </div>
          
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700">
            <div className="text-2xl mb-3">
              <Linkedin className="w-8 h-8 mx-auto text-blue-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-400 font-mono text-sm">linkedin.com/in/chimdyke-kamsi</p>
          </div>
          
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700">
            <div className="text-2xl mb-3">
              <Github className="w-8 h-8 mx-auto text-blue-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">GitHub</h3>
            <p className="text-gray-400 font-mono text-sm">github.com/chimdyke</p>
          </div>

          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700">
            <div className="text-2xl mb-3">
              <Phone className="w-8 h-8 mx-auto text-green-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-400 font-mono text-sm">+234-XXX-XXX-XXXX</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="text-gray-400 mb-4">
            Find me as <span className="text-blue-400 font-mono">@chimdyke_kamsi</span> on social platforms
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
