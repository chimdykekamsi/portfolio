
import { useState } from "react";
import { ExternalLink, Clock, Tag } from "lucide-react";

const CaseStudies = () => {
  
  const caseStudies = [
    {
      id: 1,
      title: "Why I Had to Install @next/swc-win32-x64-msvc",
      summary: "Case Study: why your next app throws 'failed to load swc binary erro' and how to fix it",
      readTime: "2 min read",
      publishedDate: "April 8, 2025",
      tags: ["NexJs", "Erro Handling", "@next/swc-win32-x64-msvc", "Case Study"],
      category: "experience",
      mediumLink: "https://medium.com/@ckamsi04/case-study-why-your-next-app-throws-failed-to-load-swc-binary-erro-and-how-to-fix-it-3b1525c1d017",
      projectLink: "#", 
      thumbnail: "/api/placeholder/400/250",
      challenges: [
        "Failed to load SWC binary error",
        "Compatibility issues with Windows environment",
        "Understanding the need for specific SWC binaries"
      ],
      solutions: [
        "Installed @next/swc-win32-x64-msvc package",
        "Ensured correct version matching with Next.js",
        "Configured environment for optimal performance"
      ]
    },
    {
      id: 2,
      title: "When ‘Just One More Tweak’ Turns Into a Whole New Project",
      summary: "How I Learned the Hard Way to Set Boundaries in Freelancing",
      readTime: "2 min read",
      publishedDate: "January 7, 2025",
      tags: ["Freelancing", "Project Management", "Client Relations", "Boundaries"],
      category: "experience",
      mediumLink: "https://medium.com/@ckamsi04/when-just-one-more-tweak-turns-into-a-whole-new-project-4392bc7a7a19",
      projectLink: "#", 
      thumbnail: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*nRSR7mvssKtnVbDtgX8o3w.jpeg",
      challenges: [
        "Clients requesting endless tweaks",
        "Balancing client satisfaction with project scope",
        "Learning to say no effectively"
      ],
      solutions: [
        "Set clear project boundaries upfront",
        "Communicated effectively with clients",
        "Learned to prioritize my time and energy"
      ]
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Case Studies</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Deep dives into complex backend challenges and the solutions I built to solve them
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-gray-900/50 rounded-xl border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-300 hover:scale-105">
              {/* Thumbnail */}
              {/* <div className="h-48 bg-gradient-to-br from-blue-600/20 to-emerald-600/20 flex items-center justify-center">
                <div className="text-4xl">📊</div>
              </div> */}
              
              <div className="p-6">
                {/* Meta info */}
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {study.readTime}
                  </span>
                  <span>{new Date(study.publishedDate).toLocaleDateString()}</span>
                </div>

                {/* Title and Summary */}
                <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{study.summary}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Challenges & Solutions Preview */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-2">Key Challenges</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {study.challenges.slice(0, 2).map((challenge, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-emerald-400 mb-2">Solutions</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {study.solutions.slice(0, 2).map((solution, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-emerald-400 mt-1">•</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={study.mediumLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-emerald-700 transition-all duration-300"
                  >
                    Read on Medium
                    <ExternalLink className="w-4 h-4" />
                  </a>                  {study.projectLink !== "#" ? (
                    <a
                      href={study.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
                    >
                      View Project
                    </a>
                  ) : (
                    <button
                      disabled
                      className="px-4 py-2 bg-gray-800/50 text-gray-500 rounded-lg text-sm font-medium cursor-not-allowed"
                    >
                      View Project
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
