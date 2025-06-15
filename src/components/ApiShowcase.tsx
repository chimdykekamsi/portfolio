
import { useState } from "react";
import { Code, Play, Copy, ExternalLink } from "lucide-react";

const ApiShowcase = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  
  const apiDemos = [
    {
      title: "StreetGotTalent API",
      description: "API to manage contestant registration and management, voting and payment integration",
      endpoint: "POST /api/auth/login",
      requestBody: `{
      "email": "user@example.com",
      "password": "securePassword123"
    }`,
          responseBody: `{
      "success": true,
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "refreshToken": "refresh_token_here",
      "user": {
        "id": "user_123",
        "email": "user@example.com",
        "role": "user"
      }
    }`,
      techStack: ["Node.js", "Express", "JWT", "bcrypt"],
      curlCommand: `curl -X POST https://api.chimdyke.dev/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email":"user@example.com","password":"securePassword123"}'`
    },
    {
      title: "Payment Processing API",
      description: "Secure payment processing with Stripe integration",
      endpoint: "POST /api/payments/process",
      requestBody: `{
  "amount": 2500,
  "currency": "usd",
  "payment_method": "pm_card_visa",
  "customer_id": "cust_123"
}`,
      responseBody: `{
  "success": true,
  "payment_intent": "pi_1234567890",
  "status": "succeeded",
  "amount_received": 2500,
  "receipt_url": "https://receipt.stripe.com/..."
}`,
      techStack: ["Node.js", "Stripe API", "Express", "MongoDB"],
      curlCommand: `curl -X POST https://api.chimdyke.dev/payments/process \\
  -H "Authorization: Bearer your_token" \\
  -H "Content-Type: application/json" \\
  -d '{"amount":2500,"currency":"usd"}'`
    },
    {
      title: "Real-time Chat API",
      description: "WebSocket-based messaging with room management",
      endpoint: "WS /api/chat/connect",
      requestBody: `{
  "room_id": "room_123",
  "user_id": "user_456",
  "token": "jwt_token_here"
}`,
      responseBody: `{
  "type": "message",
  "room_id": "room_123",
  "user": "john_doe",
  "message": "Hello everyone!",
  "timestamp": "2024-01-15T10:30:00Z"
}`,
      techStack: ["Socket.io", "Node.js", "Redis", "MongoDB"],
      curlCommand: `# WebSocket connection
wscat -c "wss://api.chimdyke.dev/chat/connect?token=your_jwt_token"`
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section className="py-20 px-6 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">API Playground</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Interactive demos of my backend APIs. Explore real request/response examples and see the code in action.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* API List */}
          <div className="space-y-4">
            {apiDemos.map((demo, index) => (
              <div
                key={demo.title}
                onClick={() => setActiveDemo(index)}
                className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                  activeDemo === index
                    ? 'bg-gradient-to-r from-blue-600/20 to-emerald-600/20 border-blue-500'
                    : 'bg-gray-900/50 border-gray-700 hover:border-gray-600'
                }`}
              >
                <h3 className="text-white font-semibold mb-2">{demo.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{demo.description}</p>
                <div className="flex flex-wrap gap-1">
                  {demo.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* API Demo */}
          <div className="lg:col-span-2 bg-gray-900/50 rounded-xl border border-gray-700 overflow-hidden">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{apiDemos[activeDemo].title}</h3>
                <div className="flex gap-2">
                  <button 
                    onClick={() => copyToClipboard(apiDemos[activeDemo].curlCommand)}
                    className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <Copy className="w-4 h-4 text-gray-300" />
                  </button>
                  <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                    <Play className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-green-600 text-white rounded text-sm font-mono">
                  {apiDemos[activeDemo].endpoint.split(' ')[0]}
                </span>
                <span className="text-gray-300 font-mono">
                  {apiDemos[activeDemo].endpoint.split(' ')[1]}
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 h-96">
              {/* Request */}
              <div className="p-6 border-r border-gray-700">
                <h4 className="text-gray-400 font-semibold mb-3 uppercase tracking-wide text-sm">Request</h4>
                <pre className="text-sm text-gray-300 bg-gray-800 p-4 rounded-lg overflow-auto h-full">
                  <code>{apiDemos[activeDemo].requestBody}</code>
                </pre>
              </div>

              {/* Response */}
              <div className="p-6">
                <h4 className="text-gray-400 font-semibold mb-3 uppercase tracking-wide text-sm">Response</h4>
                <pre className="text-sm text-gray-300 bg-gray-800 p-4 rounded-lg overflow-auto h-full">
                  <code>{apiDemos[activeDemo].responseBody}</code>
                </pre>
              </div>
            </div>

            {/* cURL Command */}
            <div className="p-6 border-t border-gray-700">
              <h4 className="text-gray-400 font-semibold mb-3 uppercase tracking-wide text-sm flex items-center gap-2">
                <Code className="w-4 h-4" />
                cURL Command
              </h4>
              <div className="bg-gray-800 p-4 rounded-lg">
                <code className="text-sm text-green-400 font-mono">
                  {apiDemos[activeDemo].curlCommand}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiShowcase;
