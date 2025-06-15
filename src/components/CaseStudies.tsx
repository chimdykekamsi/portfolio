
import { useState } from "react";
import { ExternalLink, Clock, Tag } from "lucide-react";

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const caseStudies = [
    {
      id: 1,
      title: "Building a Scalable Payment Processing System",
      summary: "How I architected a payment system handling 10,000+ transactions daily with 99.9% uptime",
      readTime: "8 min read",
      publishedDate: "2024-01-15",
      tags: ["payment-integration", "stripe", "webhooks", "scaling"],
      category: "fintech",
      mediumLink: "https://medium.com/@chimdyke/building-scalable-payment-system",
      projectLink: "#",
      thumbnail: "/api/placeholder/400/250",
      challenges: [
        "Handling high transaction volume",
        "Implementing secure webhook processing",
        "Managing payment failures gracefully"
      ],
      solutions: [
        "Implemented queue-based processing with Redis",
        "Added idempotency keys for duplicate prevention",
        "Built comprehensive retry mechanism"
      ]
    },
    {
      id: 2,
      title: "Microservices Authentication: JWT vs Session-Based",
      summary: "Deep dive into authentication strategies for distributed systems and their trade-offs",
      readTime: "12 min read",
      publishedDate: "2024-01-08",
      tags: ["authentication", "jwt", "microservices", "security"],
      category: "architecture",
      mediumLink: "https://medium.com/@chimdyke/microservices-authentication",
      projectLink: "#",
      thumbnail: "/api/placeholder/400/250",
      challenges: [
        "Cross-service user verification",
        "Token refresh management",
        "Security vs performance balance"
      ],
      solutions: [
        "Hybrid approach with short-lived JWTs",
        "Centralized auth service with caching",
        "Implemented refresh token rotation"
      ]
    },
    {
      id: 3,
      title: "Real-time Chat System with Socket.io and Redis",
      summary: "Building a production-ready chat system supporting 1000+ concurrent users",
      readTime: "10 min read",
      publishedDate: "2023-12-20",
      tags: ["websockets", "redis", "real-time", "scaling"],
      category: "real-time",
      mediumLink: "https://medium.com/@chimdyke/realtime-chat-socketio-redis",
      projectLink: "#",
      thumbnail: "/api/placeholder/400/250",
      challenges: [
        "Managing connection state across servers",
        "Message persistence and delivery",
        "Room-based message broadcasting"
      ],
      solutions: [
        "Redis adapter for horizontal scaling",
        "Message queue for offline users",
        "Optimized room subscription logic"
      ]
    }
  ];

  const categories = [
    { id: "all", label: "All Studies" },
    { id: "fintech", label: "FinTech" },
    { id: "architecture", label: "Architecture" },
    { id: "real-time", label: "Real-time" }
  ];

  const filteredStudies = selectedCategory === "all" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Case Studies</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Deep dives into complex backend challenges and the solutions I built to solve them
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <div key={study.id} className="bg-gray-900/50 rounded-xl border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-300 hover:scale-105">
              {/* Thumbnail */}
              <div className="h-48 bg-gradient-to-br from-blue-600/20 to-emerald-600/20 flex items-center justify-center">
                <div className="text-4xl">📊</div>
              </div>
              
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
                  </a>
                  <a
                    href={study.projectLink}
                    className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
                  >
                    View Project
                  </a>
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
