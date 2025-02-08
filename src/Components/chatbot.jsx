import { useState, useRef, useEffect } from 'react';
import { SendHorizontal, BotMessageSquare } from 'lucide-react';
import { chat } from '../lib/gemini';
import { ChatMessage } from './ChatMessage';
import '../styles/chatbot.css';

const suggestedQuestions = [
  {
    question: "What is a crowdfunding platform?",
    answer: "A crowdfunding platform allows individuals and organizations to raise funds for various causes, projects, or startups by collecting donations from a wide audience."
  },
  {
    question: "How can I create a campaign?",
    answer: "You can create a campaign using our interactive Campaign Creation Wizard. It guides you step by step to add descriptions, goals, and media, with a live preview of your campaign page before publishing."
  },
  {
    question: "How do I track donations in real-time?",
    answer: "Our Donation Tracking Dashboard provides real-time progress bars, donation statistics, and supporter badges to help you monitor your campaign’s progress and engage with your backers."
  },
  {
    question: "Can I interact with my supporters?",
    answer: "Yes! Our platform includes a live comment section, interactive update feeds, and personalized notifications, allowing campaign creators and supporters to communicate and stay updated."
  },
  {
    question: "What are reward tiers, and how do they work?",
    answer: "Reward tiers incentivize donations by offering perks based on contribution amounts. Our platform visually highlights different reward levels, and time-sensitive rewards include countdown timers to create urgency."
  }
];

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showInitialMessage, setShowInitialMessage] = useState(true);
  const [showFloatingMessage, setShowFloatingMessage] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFloatingMessage(false);
    }, 10000); 
    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setShowInitialMessage(false);
    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { text: userMessage, isBot: false }]);
    setIsLoading(true);

    try {
      const response = await chat(userMessage);
      setMessages((prev) => [...prev, { text: response, isBot: true }]);
    } catch (error) {
      setMessages((prev) => [...prev, { text: 'Oops! Something went wrong. Please try again.', isBot: true }]);
    } finally {
      setIsLoading(false);
      scrollToBottom();
    }
  };

  const handleSuggestedQuestion = (question, answer) => {
    setMessages((prev) => [...prev, { text: question, isBot: false }, { text: answer, isBot: true }]);
    setShowInitialMessage(false);
  };

  // Refresh Chat
  const handleRefresh = () => {
    setMessages([]);
    setShowInitialMessage(true);
  };

  return (
    <div>
     
      {showFloatingMessage && (
        <div className="floating-message">Hey, I'm Aabhar's AI! ✨ If you need any help, tell me.</div>
      )}

      {/* Chatbot Floating Icon */}
      <button className="chatbot-icon" onClick={toggleChat}>
        <BotMessageSquare size={30} />
      </button>

      {/* Chatbox Container */}
      <div style={{ borderRadius:"12px"}} className={`chatbot-container ${isChatOpen ? 'show' : ''}`}>
        <header style={{ borderTopLeftRadius:"12px", borderTopRightRadius:"12px"}} className="chatbot-header">
          <span>Aabhar's AI Chatbot ✨</span>
          <button className="refresh-btn" onClick={handleRefresh}>🔄 Refresh</button>
          <button className="close-btn" onClick={toggleChat}>×</button>
        </header>

        <div className="chatbot-messages">
          {showInitialMessage && messages.length === 0 && (
            <div className="initial-message fade-in">I am the Aabhar's AI ✨ Chat. How can I help you? 🤖</div>
          )}

          {/* Suggested Questions */}
          {messages.length === 0 && (
            <div className="suggested-questions">
              {suggestedQuestions.map((q, index) => (
                <button key={index} onClick={() => handleSuggestedQuestion(q.question, q.answer)} className="suggested-question">
                  {q.question}
                </button>
              ))}
            </div>
          )}

          {messages.map((message, index) => (
            <ChatMessage key={index} message={message.text} isBot={message.isBot} />
          ))}

          {isLoading && (
            <div className="loading-dots">
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <footer style={{ borderBottomLeftRadius:"12px", borderBottomRightRadius:"12px"}} className="chatbot-footer">
          <form onSubmit={handleSubmit} className="chatbot-form">
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setShowInitialMessage(false);
              }}
              placeholder="Type your message..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !input.trim()}>
              <SendHorizontal size={20} />
            </button>
          </form>
        </footer>
      </div>
    </div>
  );
}
export default Chatbot;