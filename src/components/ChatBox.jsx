import React, { useState, useRef, useEffect } from 'react';
import Feedback from './Feedback'; // Import the Feedback component

const ChatBox = ({ onNameCollected, onTopicSelected }) => {
  const [userName, setUserName] = useState('');
  const [nameCollected, setNameCollected] = useState(false);
  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      text: 'Hi there! I am Study in India Assistant. What is your name?'
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Scroll to the bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle feedback - this function will be called by the Feedback component
  const handleFeedback = (isPositive, messageIndex, helplineMessage) => {
    if (!isPositive && helplineMessage) {
      // Add the helpline message to the chat
      setMessages((prev) => [...prev, helplineMessage]);
    }
    // You can add more logic here for positive feedback if needed
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    
    // If name hasn't been collected yet, use this input as the name
    if (!nameCollected) {
      setUserName(input.trim());
      setNameCollected(true);
      
      // Pass the name to parent component
      if (onNameCollected) onNameCollected(input.trim());
      
      // Send welcome message with name and main menu options
      setTimeout(() => {
        const welcomeMessage = { 
          sender: 'bot', 
          text: `Hello ${input.trim()}! Welcome to Study in India program. I'm here to assist you with information about studying in Indian universities and colleges. 😊`
        };
        
        const optionsMessage = {
          sender: 'bot',
          text: `How can I help you today, ${input.trim()}? 👇`,
          quickReplies: [
            { text: 'SII Programme', icon: '🏫' },
            { text: 'Registration & Choice Filling', icon: '📝' },
            { text: 'Costs & Fees', icon: '💰' },
            { text: 'Courses', icon: '📚' },
            { text: 'Globally Accepted Degrees', icon: '🌎' },
            { text: 'English Language Skills', icon: '🗣️' },
            { text: 'Visa Regulations', icon: '🛂' },
            { text: 'Admissions', icon: '📅' }
          ]
        };
        
        setMessages((prev) => [...prev, welcomeMessage, optionsMessage]);
      }, 600);
    } else {
      // General response for any typed message after name collection
      setTimeout(() => {
        const botReply = { 
          sender: 'bot', 
          text: `Thanks for your message, ${userName}! For specific information, please use the topic buttons below. I'm here to help you with all aspects of studying in India! 😊`,
          quickReplies: [
            { text: 'SII Programme', icon: '🏫' },
            { text: 'Registration & Choice Filling', icon: '📝' },
            { text: 'Costs & Fees', icon: '💰' },
            { text: 'Courses', icon: '📚' },
            { text: 'Globally Accepted Degrees', icon: '🌎' },
            { text: 'English Language Skills', icon: '🗣️' },
            { text: 'Visa Regulations', icon: '🛂' },
            { text: 'Admissions', icon: '📅' }
          ]
        };
        setMessages((prev) => [...prev, botReply]);
      }, 600);
    }
    
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleQuickReply = (replyText) => {
    // Add the quick reply as a user message
    const userMessage = { sender: 'user', text: replyText };
    setMessages((prev) => [...prev, userMessage]);
    
    // Check if it's a main topic selection - navigate to appropriate component
    const mainTopics = [
      'SII Programme',
      'Registration & Choice Filling', 
      'Costs & Fees',
      'Courses',
      'Globally Accepted Degrees',
      'English Language Skills',
      'Visa Regulations',
      'Admissions'
    ];

    if (mainTopics.includes(replyText)) {
      // Navigate to the specific component
      if (onTopicSelected) {
        onTopicSelected(replyText);
        return;
      }
    }

    // Handle "Back to Main Menu" if it comes from any component
    if (replyText === 'Back to Main Menu') {
      setTimeout(() => {
        const botResponse = {
          sender: 'bot',
          text: `How else can I help you today, ${userName}? 👇`,
          quickReplies: [
            { text: 'SII Programme', icon: '🏫' },
            { text: 'Registration & Choice Filling', icon: '📝' },
            { text: 'Costs & Fees', icon: '💰' },
            { text: 'Courses', icon: '📚' },
            { text: 'Globally Accepted Degrees', icon: '🌎' },
            { text: 'English Language Skills', icon: '🗣️' },
            { text: 'Visa Regulations', icon: '🛂' },
            { text: 'Admissions', icon: '📅' }
          ]
        };
        setMessages((prev) => [...prev, botResponse]);
      }, 500);
      return;
    }

    // For any other quick reply that doesn't match main topics
    setTimeout(() => {
      const botResponse = {
        sender: 'bot',
        text: `Thanks for your interest, ${userName}! Please select one of the main topics below for detailed information:`,
        quickReplies: [
          { text: 'SII Programme', icon: '🏫' },
          { text: 'Registration & Choice Filling', icon: '📝' },
          { text: 'Costs & Fees', icon: '💰' },
          { text: 'Courses', icon: '📚' },
          { text: 'Globally Accepted Degrees', icon: '🌎' },
          { text: 'English Language Skills', icon: '🗣️' },
          { text: 'Visa Regulations', icon: '🛂' },
          { text: 'Admissions', icon: '📅' }
        ]
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  return (
    <div className="max-w-md mx-auto mt-10 border rounded-2xl shadow-lg h-[600px] flex flex-col bg-white">
      {/* Header */}
      <div className="bg-[#1e88e5] text-white py-4 px-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#1e88e5">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
              <path d="M10.3 15.7l1.4-1.4L9.8 12l1.9-1.9-1.4-1.4L7 12z" fill="#ff8c00"/>
            </svg>
          </div>
          <div>
            <h1 className="font-bold text-lg">StudyIndia<span className="text-[#ff8c00]">Bot</span></h1>
            <p className="text-xs text-white/80">Your Study in India Assistant</p>
          </div>
        </div>
        <div className="text-2xl">⋮</div>
      </div>
      
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`px-4 py-2 rounded-xl max-w-[80%] ${
                msg.sender === 'user'
                  ? 'bg-[#1e88e5] text-white'
                  : 'bg-white text-gray-800 shadow-sm'
              }`}
            >
              <div className="whitespace-pre-line">{msg.text}</div>
              
              {/* Quick Reply buttons */}
              {msg.quickReplies && (
                <div className="mt-4 space-y-2">
                  {msg.quickReplies.map((reply, replyIndex) => (
                    <button
                      key={replyIndex}
                      className="w-full text-left bg-white border border-gray-200 hover:border-[#1e88e5] hover:bg-blue-50 rounded-xl px-4 py-2 text-[#1e88e5] flex items-center gap-2 transition-all"
                      onClick={() => handleQuickReply(reply.text)}
                    >
                      <span className="text-lg">{reply.icon}</span> {reply.text}
                    </button>
                  ))}
                </div>
              )}

              {/* Feedback Component - only show for bot messages and not helpline messages */}
              {msg.sender === 'bot' && !msg.isHelplineMessage && (
                <Feedback 
                  onFeedback={handleFeedback}
                  messageIndex={index}
                  userName={userName}
                  context="general"
                />
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="p-3 border-t flex gap-2 bg-white">
        <input
          type="text"
          className="flex-1 p-3 border rounded-full bg-gray-50 focus:outline-none focus:ring focus:ring-blue-200"
          placeholder={nameCollected ? "Type your question..." : "Enter your name..."}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="bg-[#1e88e5] text-white p-3 rounded-full w-12 h-12 flex items-center justify-center"
          onClick={handleSend}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
      
      {/* Powered by footer */}
      <div className="py-2 px-4 text-center text-xs text-gray-500 border-t flex justify-center items-center gap-1">
        Chat <span>⚡</span> by <span className="font-bold text-[#1e88e5]">Study<span className="text-[#ff8c00]">India</span></span>
      </div>
    </div>
  );
};

export default ChatBox;