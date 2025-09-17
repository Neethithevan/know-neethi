import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X, User, Bot } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi there! I'm Neethi's AI assistant. I can tell you about his experience, projects, skills, and answer any questions you might have about working with him. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = {
    greetings: [
      "Hello! I'm here to tell you all about Neethi's amazing work and experience. What would you like to know?",
      "Hi there! Great to meet you. I'd be happy to share information about Neethi's skills and projects.",
      "Hey! Welcome to Neethi's portfolio. I'm his AI assistant - ask me anything about his background!"
    ],
    experience: [
      "Neethi has over 5 years of experience as a full-stack developer. He's currently a Senior Full Stack Developer at TechCorp Solutions, where he leads a team of 5 developers and has improved system performance by 40%.",
      "His experience spans from freelance work to senior positions at major tech companies. He's worked with startups and established companies, giving him a well-rounded perspective on different development environments."
    ],
    projects: [
      "Neethi has worked on some incredible projects! His featured work includes an e-commerce platform with full payment processing, a collaborative task management app with real-time updates, and an AI-powered content generator using OpenAI's API.",
      "His projects showcase expertise in React, Node.js, TypeScript, and various databases. Each project demonstrates his ability to build scalable, user-focused applications."
    ],
    skills: [
      "Neethi is proficient in React, Node.js, TypeScript, PostgreSQL, AWS, Docker, and many other modern technologies. He's also AWS certified and has Google Cloud Professional Developer certification.",
      "His skill set covers both front-end and back-end development, with particular expertise in creating responsive, accessible user interfaces and scalable backend architectures."
    ],
    contact: [
      "You can reach Neethi at Neethi.doe@example.com or connect with him on LinkedIn. He's always open to discussing new opportunities and collaborations!",
      "Neethi is based in San Francisco and is available for both remote and local opportunities. Feel free to use the contact form on this page to get in touch!"
    ],
    default: [
      "That's a great question! While I can tell you about Neethi's professional background, projects, and skills, you might want to reach out to him directly for more specific information. Would you like his contact details?",
      "I'd love to help with that! For detailed discussions about specific projects or collaborations, I'd recommend contacting Neethi directly. What else can I tell you about his experience?",
      "Interesting question! Neethi would be the best person to give you a detailed answer on that. In the meantime, is there anything else about his background or projects I can help with?"
    ]
  };

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
      return botResponses.greetings[Math.floor(Math.random() * botResponses.greetings.length)];
    }
    
    if (lowerInput.includes("experience") || lowerInput.includes("work") || lowerInput.includes("job")) {
      return botResponses.experience[Math.floor(Math.random() * botResponses.experience.length)];
    }
    
    if (lowerInput.includes("project") || lowerInput.includes("portfolio") || lowerInput.includes("built")) {
      return botResponses.projects[Math.floor(Math.random() * botResponses.projects.length)];
    }
    
    if (lowerInput.includes("skill") || lowerInput.includes("technology") || lowerInput.includes("tech") || lowerInput.includes("programming")) {
      return botResponses.skills[Math.floor(Math.random() * botResponses.skills.length)];
    }
    
    if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("reach") || lowerInput.includes("hire")) {
      return botResponses.contact[Math.floor(Math.random() * botResponses.contact.length)];
    }
    
    return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-elegant bg-gradient-to-r from-primary to-accent hover:from-primary-light hover:to-accent/90 transition-all duration-300 z-50 ${
          isOpen ? "hidden" : "flex"
        } items-center justify-center`}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

    {/* Chat Window */}
    <Card
      className={`fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 transition-all duration-300 ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      } bg-white/90 backdrop-blur-md border border-gray-300`}
    >
      <CardHeader className="pb-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg shadow-lg">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Bot className="h-5 w-5" />
            Neethi's AI Assistant
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-white/20 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="p-0 flex flex-col h-[calc(100%-80px)]">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.isBot ? "justify-start" : "justify-end"}`}
            >
              {message.isBot && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-md">
                  <Bot className="h-4 w-4 text-white" />
                </div>
              )}

              <div
                className={`max-w-[75%] p-3 rounded-lg text-sm shadow-md ${
                  message.isBot
                    ? "bg-gray-100 text-gray-800 border border-gray-300"
                    : "bg-blue-500 text-white"
                }`}
              >
                {message.text}
              </div>

              {!message.isBot && (
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <User className="h-4 w-4 text-white" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-md">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-800 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-800 rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-gray-800 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-300">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about Neethi's experience..."
              className="flex-1 border-gray-300 focus:border-blue-500"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 shadow-md"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
    </>
  );
};

export default Chatbot;