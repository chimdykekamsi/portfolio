
const Experience = () => {
  const experiences = [
    {
      title: "Senior Backend Engineer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Lead backend development for high-scale fintech applications serving 1M+ users",
      achievements: [
        "Designed microservices architecture reducing system latency by 40%",
        "Implemented automated testing pipeline improving deployment confidence",
        "Mentored 5+ junior developers on backend best practices"
      ]
    },
    {
      title: "Backend Engineer",
      company: "CloudTech Innovations",
      period: "2020 - 2022",
      description: "Developed scalable APIs and data processing systems for e-commerce platform",
      achievements: [
        "Built distributed caching system handling 100K+ concurrent users",
        "Optimized database queries reducing response times by 60%",
        "Implemented event-driven architecture for real-time notifications"
      ]
    },
    {
      title: "Junior Backend Developer",
      company: "StartupHub",
      period: "2019 - 2020",
      description: "Started career building REST APIs and learning scalable system design",
      achievements: [
        "Developed RESTful APIs serving mobile and web applications",
        "Implemented user authentication and authorization systems",
        "Participated in agile development and code review processes"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Experience</h2>
          <p className="text-gray-400 text-lg">
            Building robust backend systems across different scales and industries
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.title} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-px h-full bg-gradient-to-b from-blue-500 to-transparent"></div>
              )}
              
              <div className="flex items-start">
                {/* Timeline dot */}
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-8 mt-2">
                  {index + 1}
                </div>
                
                <div className="flex-1 bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                      <div className="text-blue-400 font-medium">{exp.company}</div>
                    </div>
                    <div className="text-gray-400 font-mono text-sm mt-2 md:mt-0">{exp.period}</div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{exp.description}</p>
                  
                  <div>
                    <h4 className="text-gray-400 font-semibold mb-3 uppercase tracking-wide text-sm">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-emerald-400 mr-3 mt-1.5">•</span>
                          <span className="text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
