import { useState } from "react";
import { Code, Play, ExternalLink, Lock, Eye, Database, Zap, Github } from "lucide-react";

interface ApiArchitecture {
  icon: JSX.Element;
  description: string;
}

interface ApiDemo {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  metrics: string[];
  architecture: ApiArchitecture;
  challenges: string[];
  solutions: string[];
  githubUrl?: string;
  docsUrl?: string;
  testApiUrl?: string; // URL to test the API (Swagger/Postman)
  public: boolean;
  featured?: boolean;
}

const ApiShowcase = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  
  const apiDemos: ApiDemo[] = [
    {
      title: "StreetGotTalent API",
      description: "High-performance contest management system handling concurrent voting and real-time updates",
      features: [
        "Admin authentication and authorization",
        "Contestant registration and profile management",
        "Voting system with fraud prevention",
        "Real-time scoring and leaderboards",
        "Competition management including custom season advancement logic"
      ],
      techStack: ["Node.js", "Express", "MongoDB", "JWT", "Payment Integration"],
      metrics: ["99.99% uptime", "48ms avg response", "60+ contestants", "2 seasons", "10K+ votes recorded", "93% payment success"],
      architecture: {
        icon: <Code className="w-5 h-5" />,
        description: "RESTful architecture"
      },
      challenges: [
        "Flutterwave account verification issues",
        "Payment processing issues due to user dropoff before completion because of the Flutterwave redirection flow"
      ],
      solutions: [
        "Switched to paystack",
        "Implemented Paystack inline payments to keep users on the site and reduce dropoff",
      ],
      // githubUrl: "https://github.com/chimdyke/streetgottalent-api",
      // docsUrl: "https://docs.chimdyke.dev/streetgottalent",
      testApiUrl: "https://streetgottalent.com",
      public: true,
      featured: true
    },
    {
      title: "CIC Alumni website API",
      description: "API for managing alumni data, events, projects, and communications for College of Immaculate Conception Alumni set of 2010",
      features: [
        "Alumni registration and profile management",
        "Event creation and RSVP system",
        "Newsletter subscription management",
        "Alumni directory with search functionality"
      ],
      techStack: ["Node.js", "Express", "MongoDB", "JWT"],
      metrics: ["99.9% uptime", "20ms avg response", "30+ alumni profiles", "5+ events created"],
      architecture: {
        icon: <Code className="w-5 h-5" />,
        description: "MVC Monolithic RESTful architecture",
      },
      challenges: [
        "No notable challenges faced during development"
      ],
      solutions: [],
      // githubUrl: ""
      // docsUrl: "",
      testApiUrl: "https://cicalumni2010.org/",
      public: true,
      featured: false
    },
    {
      title: "Trends Talk Hubb API",
      description: "Blog platform API supporting content creation, engagement features, and media management for TrendsTalkHubb's YouTube and blog ecosystem",
      features: [
        "Post management with image uploads",
        "Likes and comments system",
        "Basic feed algorithm",
        "Content discovery features",
        "JWT-authenticated endpoints",
        "Swagger documentation"
      ],
      techStack: ["Node.js", "MongoDB", "Swagger", "JWT"],
      metrics: ["500+ posts", "1000+ comments", "5K+ likes", "99.9% uptime"],
      architecture: {
        icon: <Database className="w-5 h-5" />,
        description: "RESTful architecture with NoSQL for flexible content management"
      },
      challenges: [
        "Implementing efficient content discovery",
        "Handling image uploads securely",
        "Managing user engagement features"
      ],
      solutions: [
        "Custom feed algorithm implementation",
        "Secure media upload system",
        "Optimized engagement tracking"
      ],
      githubUrl: "https://github.com/chimdykekamsi/TrendsTalk-blog-api",
      // docsUrl: "https://api.trendstalkhubb.com/docs",
      testApiUrl: "https://trendstalkhubb.info",
      public: false
    },
    {
      title: "Zive E-commerce API",
      description: "Comprehensive e-commerce platform API built with TypeScript, featuring advanced product management and secure user sessions",
      features: [
        "Product listings and filtering",
        "Shopping cart management",
        "Order processing",
        "User session handling",
        "Advanced search functionality",
        "Swagger documentation"
      ],
      techStack: ["Node.js", "TypeScript", "MongoDB", "Typegoose", "Swagger"],
      metrics: ["1000+ products", "99.9% uptime", "50ms avg response"],
      architecture: {
        icon: <Database className="w-5 h-5" />,
        description: "TypeScript-based architecture with Typegoose ORM for type-safe database operations"
      },
      challenges: [
        "Complex product filtering requirements",
        "Session management at scale",
        "Database performance optimization"
      ],
      solutions: [
        "MongoDB aggregation pipelines",
        "JWT-based session handling",
        "Optimized database queries",
        "Comprehensive API docs"
      ],
      // githubUrl: "https://github.com/chimdyke/zive-api",
      // docsUrl: "https://docs.zive.com/api",
      testApiUrl: "https://api.zive.com/docs",
      public: false
    },
    {
      title: "SwiftCharge API",
      description: "Utility payment system enabling wallet funding and bill payments for TV, electricity, airtime, and data services",
      features: [
        "Wallet management",
        "Multiple bill payment options",
        "Payment gateway integration",
        "VTU API integration",
        "Transaction history",
        "Secure endpoints"
      ],
      techStack: ["TypeScript", "MongoDB", "Next.js", "JWT", "monify", "VTU API integration"],
      metrics: ["99.99% uptime", "1000+ transactions", "5+ payment providers"],
      architecture: {
        icon: <Zap className="w-5 h-5" />,
        description: "Next.js API routes with MongoDB for transaction management"
      },
      challenges: [
        "Integration with multiple payment providers",
        "Complex transaction flow management",
        "Real-time payment validation",
        "Stakeholder coordination",
        "Edge case: User wallet balance is sufficient, but VTU API balance is lower due to separate funding cycles"
      ],
      solutions: [
        "Unified payment gateway interface",
        "Transaction state machine",
        "Webhook-based validation",
        "Detailed integration guides",
        "Scheduled 2x daily VTU balance top-up from the payment gateway",
        "If user tries to pay a bill and wallet balance is sufficient but VTU API balance is insufficient, trigger an immediate VTU top-up from the gateway and prompt user to retry"
      ],
      githubUrl: "https://github.com/chimdykekamsi/swiftcharge",
      // docsUrl: "https://docs.swiftcharge.ng",
      testApiUrl: "https://swiftcharge.ng",
      public: false
        },
        {
      title: "MedicSyn API",
      description: "Medical adherence application API helping users track medications through reminders, notifications, and adherence monitoring",
      features: [
        "User authentication and authorization",
        "Medication scheduling system",
        "Email notification service",
        "Token-based verification",
        "Adherence tracking analytics",
        "Secure API endpoints"
      ],
      techStack: ["Node.js", "TypeScript", "MongoDB", "Express", "JWT"],
      metrics: ["99.9% uptime", "30ms avg response", "10+ test users", "20+ medications tracked"],
      architecture: {
        icon: <Database className="w-5 h-5" />,
        description: "TypeScript-based Express API with MongoDB for medication tracking"
      },
      challenges: [
        "Complex medication scheduling logic",
        "Reliable notification delivery",
        "User adherence monitoring",
        "Real-time scheduling and notification delivery (using Notification Web API and Service Worker)",
      ],
      solutions: [
        "Advanced scheduling system",
        "Push notifications",
        "Analytics dashboard implementation",
        "Implemented Notification Web API and Service Worker for real-time notifications",
      ],
      githubUrl: "https://github.com/chimdykekamsi/MedicsynApi",
      // docsUrl: "https://docs.medicsyn.com",
      testApiUrl: "https://api.medicsyn.com/docs",
      public: false,
      featured: true
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-800/30" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">API Portfolio</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Production-grade APIs built for scale and reliability. Explore the architecture, features, and live demos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* API List */}
          {/* style the scroll bar */}
          <div className="space-y-4 max-h-screen overflow-y-auto lg:col-span-1 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
            {apiDemos.map((demo, index) => (
              <div
                key={demo.title}
                onClick={() => {
                  setActiveDemo(index);
                }}
                className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                  activeDemo === index
                    ? 'bg-gradient-to-r from-blue-600/20 to-emerald-600/20 border-blue-500'
                    : 'bg-gray-900/50 border-gray-700 hover:border-gray-600'
                }`}
              >                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-semibold">{demo.title}</h3>
                    {demo.public ? (
                      <Eye className="w-4 h-4 text-emerald-400" title="Public API" />
                    ) : (
                      <Lock className="w-4 h-4 text-gray-500" title="Private API" />
                    )}
                  </div>
                  {demo.featured && (
                    <span className="px-2 py-0.5 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-xs rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm mb-3">{demo.description}</p>
                <div className="flex flex-wrap gap-1">
                  {demo.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {demo.techStack.length > 3 && (
                    <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                      +{demo.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* API Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Information Card */}
            <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-6 space-y-8">
              {/* Title and Description */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">{apiDemos[activeDemo].title}</h3>
                <p className="text-gray-400 mb-4">{apiDemos[activeDemo].description}</p>
                <div className="flex flex-wrap gap-2">
                  {apiDemos[activeDemo].techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-800/80 text-gray-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture Overview */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg text-white">
                    {apiDemos[activeDemo].architecture.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Architecture</h4>
                    <p className="text-gray-400 text-sm">{apiDemos[activeDemo].architecture.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {apiDemos[activeDemo].metrics.map((metric, index) => (
                    <div key={index} className="flex flex-col items-center justify-center p-3 bg-gray-800/50 rounded-lg text-center">
                      <div className="text-blue-400 font-mono">{metric}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Key Features</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {apiDemos[activeDemo].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Challenges</h4>
                  <div className="space-y-3">
                    {apiDemos[activeDemo].challenges.map((challenge, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        <span>{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Solutions</h4>
                  <div className="space-y-3">
                    {apiDemos[activeDemo].solutions.map((solution, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                        <span>{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                {apiDemos[activeDemo].public ? (
                  <a
                    href={apiDemos[activeDemo].testApiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-emerald-700 transition-all duration-300"
                  >
                    <Play className="w-4 h-4" />
                    View Live
                  </a>
                ) : (
                  <button
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-400 rounded-lg font-medium cursor-not-allowed opacity-50"
                    disabled
                    title="This API is private"
                  >
                    <Lock className="w-4 h-4" />
                    View Live
                  </button>
                )}
                {apiDemos[activeDemo].githubUrl && (
                  <a
                    href={apiDemos[activeDemo].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Source
                  </a>
                )}
                {apiDemos[activeDemo].docsUrl && (
                  <a
                    href={apiDemos[activeDemo].docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Documentation
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiShowcase;
