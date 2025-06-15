
import { useState } from "react";
import { ExternalLink, Github, Play, Code, Database, Zap } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  
  const projects = [
    {
      title: "Distributed Payment Processing API",
      description: "High-throughput payment processing system handling 10K+ transactions per second with Stripe integration",
      tech: ["Node.js", "Express", "PostgreSQL", "Redis", "Stripe API", "Docker"],
      metrics: ["99.99% uptime", "10ms avg response", "10K+ TPS"],
      featured: true,
      githubUrl: "https://github.com/chimdyke/payment-api",
      docsUrl: "https://docs.chimdyke.dev/payment-api",
      demoUrl: "https://api.chimdyke.dev/payment-demo",
      challenges: [
        "Handling concurrent payment processing",
        "Implementing idempotency for duplicate requests",
        "Managing webhook delivery failures"
      ],
      solutions: [
        "Queue-based processing with Bull/Redis",
        "Database-level idempotency keys",
        "Exponential backoff retry mechanism"
      ],
      architecture: {
        icon: <Database className="w-5 h-5" />,
        description: "Event-driven microservices with CQRS pattern"
      }
    },
    {
      title: "Real-time Notification System",
      description: "Scalable WebSocket-based notification service supporting 50K+ concurrent connections",
      tech: ["Socket.io", "Node.js", "Redis Cluster", "MongoDB", "JWT"],
      metrics: ["50K concurrent", "Sub-second delivery", "Multi-device sync"],
      featured: true,
      githubUrl: "https://github.com/chimdyke/notification-service",
      docsUrl: "https://docs.chimdyke.dev/notifications",
      demoUrl: "https://notifications.chimdyke.dev/demo",
      challenges: [
        "Managing connection state across server instances",
        "Ensuring message delivery guarantee",
        "Handling device reconnection gracefully"
      ],
      solutions: [
        "Redis adapter for horizontal scaling",
        "Message persistence with retry queues",
        "Connection recovery with backoff strategy"
      ],
      architecture: {
        icon: <Zap className="w-5 h-5" />,
        description: "Pub/Sub architecture with Redis clustering"
      }
    },
    {
      title: "Multi-tenant SaaS API Gateway",
      description: "Centralized API gateway with authentication, rate limiting, and tenant isolation",
      tech: ["Node.js", "Express", "JWT", "Redis", "MongoDB", "Docker"],
      metrics: ["100+ tenants", "1M+ daily requests", "Multi-region"],
      featured: false,
      githubUrl: "https://github.com/chimdyke/api-gateway",
      docsUrl: "https://docs.chimdyke.dev/gateway",
      demoUrl: "https://gateway.chimdyke.dev/demo",
      challenges: [
        "Tenant-based rate limiting",
        "JWT token validation at scale",
        "Request routing and load balancing"
      ],
      solutions: [
        "Redis-based sliding window rate limiter",
        "Token caching with TTL optimization",
        "Weighted round-robin routing algorithm"
      ],
      architecture: {
        icon: <Code className="w-5 h-5" />,
        description: "Middleware-based routing with tenant isolation"
      }
    },
    {
      title: "Event Sourcing E-commerce Backend",
      description: "CQRS/Event Sourcing implementation for e-commerce order management",
      tech: ["Node.js", "EventStore", "MongoDB", "RabbitMQ", "Docker"],
      metrics: ["Event-driven", "Eventual consistency", "Audit trail"],
      featured: false,
      githubUrl: "https://github.com/chimdyke/event-sourced-ecommerce",
      docsUrl: "https://docs.chimdyke.dev/ecommerce",
      demoUrl: "https://ecommerce-api.chimdyke.dev/demo",
      challenges: [
        "Event versioning and schema evolution",
        "Projection rebuilding performance",
        "Handling out-of-order events"
      ],
      solutions: [
        "Semantic versioning for event schemas",
        "Snapshot-based projection optimization",
        "Event ordering with timestamps and sequence numbers"
      ],
      architecture: {
        icon: <Database className="w-5 h-5" />,
        description: "CQRS with separate read/write stores"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Backend Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Production-ready APIs and backend systems built to handle real-world scale and complexity
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Project List */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div
                key={project.title}
                onClick={() => setSelectedProject(index)}
                className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                  selectedProject === index
                    ? 'bg-gradient-to-r from-blue-600/20 to-emerald-600/20 border-blue-500'
                    : 'bg-gray-900/50 border-gray-700 hover:border-gray-600'
                }`}
              >
                {project.featured && (
                  <div className="inline-block px-2 py-1 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-xs font-medium rounded-full mb-2">
                    Featured
                  </div>
                )}
                <h3 className="text-white font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{project.description.slice(0, 80)}...</p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Project Details */}
          <div className="lg:col-span-2 bg-gray-900/50 rounded-xl border border-gray-700 p-8">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{projects[selectedProject].title}</h3>
                {projects[selectedProject].featured && (
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-xs font-medium rounded-full">
                    Featured
                  </span>
                )}
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{projects[selectedProject].description}</p>
              
              {/* Architecture */}
              <div className="flex items-center gap-3 mb-6 p-4 bg-gray-800/50 rounded-lg">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg text-white">
                  {projects[selectedProject].architecture.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold">Architecture</h4>
                  <p className="text-gray-400 text-sm">{projects[selectedProject].architecture.description}</p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {projects[selectedProject].tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Key Metrics</h4>
              <div className="grid grid-cols-3 gap-4">
                {projects[selectedProject].metrics.map((metric) => (
                  <div key={metric} className="text-center p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-sm font-mono text-emerald-400">{metric}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-sm font-semibold text-red-400 mb-3 uppercase tracking-wide">Challenges</h4>
                <ul className="space-y-2">
                  {projects[selectedProject].challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-red-400 mt-1">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-emerald-400 mb-3 uppercase tracking-wide">Solutions</h4>
                <ul className="space-y-2">
                  {projects[selectedProject].solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-emerald-400 mt-1">•</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={projects[selectedProject].demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-emerald-700 transition-all duration-300"
              >
                <Play className="w-4 h-4" />
                Try API
              </a>
              <a
                href={projects[selectedProject].githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg font-medium hover:bg-gray-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={projects[selectedProject].docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg font-medium hover:bg-gray-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
