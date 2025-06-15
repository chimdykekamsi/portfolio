
const Projects = () => {
  const projects = [
    {
      title: "Distributed Payment System",
      description: "High-throughput payment processing system handling 10K+ transactions per second",
      tech: ["Go", "PostgreSQL", "Redis", "Kafka", "Docker"],
      metrics: ["99.99% uptime", "10ms avg response", "10K+ TPS"],
      featured: true
    },
    {
      title: "Microservices API Gateway",
      description: "Centralized API gateway with authentication, rate limiting, and monitoring",
      tech: ["Node.js", "Express", "MongoDB", "AWS", "Kubernetes"],
      metrics: ["50+ services", "1M+ daily requests", "JWT auth"],
      featured: true
    },
    {
      title: "Real-time Analytics Platform",
      description: "Data pipeline processing millions of events with real-time dashboards",
      tech: ["Python", "Apache Kafka", "Elasticsearch", "FastAPI"],
      metrics: ["5M+ events/day", "Sub-second queries", "Real-time alerts"],
      featured: false
    },
    {
      title: "Cloud Infrastructure Automation",
      description: "Infrastructure as Code solution for multi-cloud deployments",
      tech: ["Terraform", "AWS", "Docker", "CI/CD", "Monitoring"],
      metrics: ["Multi-cloud", "Auto-scaling", "Zero downtime"],
      featured: false
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Backend systems that power businesses and handle millions of operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`relative p-8 rounded-xl border transition-all duration-300 hover:scale-105 ${
                project.featured 
                  ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-blue-500/50 hover:border-blue-400' 
                  : 'bg-gray-900/50 border-gray-700 hover:border-gray-600'
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-xs font-medium rounded-full">
                  Featured
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Key Metrics</h4>
                <div className="grid grid-cols-3 gap-4">
                  {project.metrics.map((metric) => (
                    <div key={metric} className="text-center">
                      <div className="text-sm font-mono text-emerald-400">{metric}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
