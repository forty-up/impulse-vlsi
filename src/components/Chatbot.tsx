import React, { useState, useEffect, useRef } from 'react';
import { X, Send, MessageCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showQuestions, setShowQuestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    { id: 1, text: 'What courses do you offer?', category: 'courses' },
    { id: 2, text: 'What are your services?', category: 'services' },
    { id: 3, text: 'How can I enroll?', category: 'enrollment' },
    { id: 4, text: 'What is the fee structure?', category: 'fees' },
    { id: 5, text: 'Do you provide placement?', category: 'placement' },
    { id: 6, text: 'What is the course duration?', category: 'duration' },
    { id: 7, text: 'Online or offline classes?', category: 'mode' },
    { id: 8, text: 'Contact information', category: 'contact' },
  ];

  const botResponses: { [key: string]: string } = {
    courses: `We offer 8 comprehensive VLSI courses:

1. Analog Circuit Design
2. Analog/Custom Layout Design
3. Physical Design
4. Digital/RTL Design & Verification
5. Design for Testability
6. Design with FPGA
7. Embedded Systems / IOT
8. Post Silicon Validation

All courses come with MSME Certification! 🎓`,

    services: `We provide three types of services:

📚 Student Services:
- Industry-oriented training
- Skill development & certification
- Internship & project support
- Placement assistance
- Career mentoring

🏢 Industrial Services:
- Skilled workforce pipeline
- Co-hiring solutions
- Talent recruitment support

🎓 Academic Services:
- Faculty development programs
- Curriculum development
- Research project guidance
- Accreditation support`,

    enrollment: `To enroll in our courses:

1. Visit our Courses page to explore programs
2. Fill out the enquiry form with your details
3. Our team will contact you within 24 hours
4. Complete the enrollment process

Or you can directly call us at +91-8147018156 📞`,

    fees: `We offer an affordable fee structure designed to make quality VLSI education accessible to everyone.

For detailed fee information:
- Contact us at +91-8147018156
- Email: admin@impulse-vlsi.com
- Fill out the enquiry form on our website

We also offer flexible payment options! 💰`,

    placement: `Yes! We provide comprehensive placement assistance:

✅ Placement drives with semiconductor companies
✅ Mock interviews & technical preparation
✅ Resume building & profile enhancement
✅ Interview coaching
✅ Referral opportunities through industry MoUs

We have a proven track record of placements in top semiconductor companies! 🎯`,

    duration: `Our courses are offered in two levels:

⏱️ Pro Level: 12 weeks
⏱️ Excel Level: 14 weeks

Both levels include:
- Hands-on training
- Real-time projects
- Industry-standard tools
- MSME Certification`,

    mode: `We offer flexible training modes:

🏫 Offline: In-person classes at our center
💻 Online: Live interactive sessions
🔄 Hybrid: Combination of both

You can choose the mode that best suits your schedule and learning preference!`,

    contact: `📞 Phone: +91-8147018156
📧 Email: admin@impulse-vlsi.com
🌐 Website: impulse-vlsi.com

Office Hours: Monday - Saturday, 9 AM - 6 PM

For urgent queries, you can also reach us on WhatsApp!
Click the WhatsApp button on our homepage.`,
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Show chatbot popup only once per session on first visit
    // After closing, it will only open when user clicks the button
    const hasSeenChatbot = sessionStorage.getItem('hasSeenChatbot');

    if (!hasSeenChatbot) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenChatbot', 'true');

        // Add welcome message
        const welcomeMessage: Message = {
          id: Date.now(),
          text: "Hi! I'm Mahi 👋\n\nHow can I assist you today? Please select a question below or type your query.",
          isBot: true,
          timestamp: new Date(),
        };
        setMessages([welcomeMessage]);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleQuestionClick = (question: typeof quickQuestions[0]) => {
    // Add user question
    const userMessage: Message = {
      id: Date.now(),
      text: question.text,
      isBot: false,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Add bot response after a short delay
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponses[question.category],
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);

    setShowQuestions(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      // Add welcome message if opening for the first time
      const welcomeMessage: Message = {
        id: Date.now(),
        text: "Hi! I'm Mahi 👋\n\nHow can I assist you today? Please select a question below or type your query.",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  };

  const handleReset = () => {
    setMessages([]);
    setShowQuestions(true);
    const welcomeMessage: Message = {
      id: Date.now(),
      text: "Hi! I'm Mahi 👋\n\nHow can I assist you today? Please select a question below or type your query.",
      isBot: true,
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleToggle}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-shadow duration-300"
            aria-label="Open chat"
          >
            <MessageCircle className="w-7 h-7" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-full sm:w-96 max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-2xl">
                  👩
                </div>
                <div>
                  <h3 className="font-semibold">Mahi</h3>
                  <p className="text-xs text-primary-100">Online - Here to help!</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleToggle}
                  className="p-1 hover:bg-primary-700 rounded transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-4 bg-gray-50">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        message.isBot
                          ? 'bg-white text-gray-800 shadow-md'
                          : 'bg-primary-600 text-white'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line leading-relaxed">
                        {message.text}
                      </p>
                      <p
                        className={`text-xs mt-1 ${
                          message.isBot ? 'text-gray-400' : 'text-primary-100'
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions */}
              {showQuestions && messages.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4 space-y-2"
                >
                  <p className="text-xs text-gray-500 font-medium mb-2">
                    Quick Questions:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickQuestions.map((question) => (
                      <button
                        key={question.id}
                        onClick={() => handleQuestionClick(question)}
                        className="text-xs bg-white border border-primary-200 text-primary-700 px-3 py-2 rounded-lg hover:bg-primary-50 hover:border-primary-400 transition-all duration-200 text-left font-medium"
                      >
                        {question.text}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Show Questions Again Button */}
              {!showQuestions && (
                <div className="mt-4 text-center">
                  <button
                    onClick={() => setShowQuestions(true)}
                    className="text-xs bg-primary-100 text-primary-700 px-4 py-2 rounded-full hover:bg-primary-200 transition-colors"
                  >
                    Show quick questions
                  </button>
                </div>
              )}
            </div>

            {/* Chat Footer */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                <p className="text-xs text-gray-500 text-center">
                  Need more help? Contact us:
                </p>
                <div className="flex space-x-2">
                  <a
                    href="tel:+918147018156"
                    className="flex-1 bg-primary-600 text-white text-xs py-2 px-3 rounded-lg hover:bg-primary-700 transition-colors text-center font-medium"
                  >
                    📞 Call Us
                  </a>
                  <a
                    href="/contact"
                    className="flex-1 bg-accent-600 text-white text-xs py-2 px-3 rounded-lg hover:bg-accent-700 transition-colors text-center font-medium"
                  >
                    📝 Enquiry Form
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
