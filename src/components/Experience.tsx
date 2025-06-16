
const Experience = () => {  const experiences = [
    {
      title: "Freelance Backend Developer",
      company: "Self-Employed",
      period: "2023 - Present",
      description: "Delivering custom backend solutions for various clients across different industries",
      achievements: [
        "Developed and maintained multiple production APIs and backend systems",
        "Managed client relationships and project deliverables independently",
        "Successfully completed projects in payment systems, content management, and utility services",
        "Demonstrated ability to adapt to different tech stacks based on client requirements"
      ]
    },
    {
      title: "Backend Engineering Intern",
      company: "HNG Internship (Cohort 13)",
      period: "May 2025 - Present",
      description: "Working remotely on challenging backend projects with diverse international teams",
      achievements: [
        "Participating in intensive backend development training and real-world projects",
        "Collaborating with cross-functional teams on enterprise-level applications",
        "Learning and implementing industry best practices in backend development"
      ]
    },
    {
      title: "Backend Engineering Student",
      company: "ZartTalent Advanced Backend Engineering Bootcamp",
      period: "Nov 2024 - Mar 2025",
      description: "Intensive backend engineering training focusing on modern technologies and best practices",
      achievements: [
        "Built a comprehensive e-commerce API as final project using TypeScript and MongoDB",
        "Implemented advanced features including product filtering, cart management, and secure payments",
        "Learned and applied principles of clean architecture and test-driven development"
      ]
    },
    {
      title: "Team Lead",
      company: "Internal Hackathon Project",
      period: "2021",
      description: "Led development of a Quiz Application using PHP & SQL",
      achievements: [
        "Led a team of 7 developers to win the 2021 internal hackathon",
        "Designed and implemented a responsive quiz system with real-time scoring",
        "Managed team dynamics and task distribution to meet tight deadlines",
        "Successfully delivered a fully functional quiz platform within the hackathon timeframe"
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
