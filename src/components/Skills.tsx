
import { Database, Server, Code } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "Node.js", "Go", "Java", "Express.js", "FastAPI", "Spring Boot", "Django"]
    },
    {
      title: "Databases & Storage",
      icon: <Database className="w-6 h-6" />,
      skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "MySQL", "DynamoDB"]
    },
    {
      title: "Infrastructure & DevOps",
      icon: <Server className="w-6 h-6" />,
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Microservices", "GraphQL", "REST APIs"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Technical Expertise</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Specialized in building high-performance backend systems with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg text-white mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="px-3 py-2 bg-gray-800 rounded-lg text-gray-300 font-mono text-sm hover:bg-gray-700 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
