import React, { useState, useRef, useEffect } from 'react';

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
      // Regular response for subsequent messages
      setTimeout(() => {
        const botReply = { 
          sender: 'bot', 
          text: `Thanks for your interest, ${userName}! I'd be happy to tell you more about the Study in India program. What specific information are you looking for?`
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
    
    // Don't call onTopicSelected here - handle everything within the chat

    // Simulate bot response based on quick reply
    setTimeout(() => {
      let botResponse;
      
      switch(replyText) {
        case 'SII Programme':
          botResponse = {
            sender: 'bot',
            text: `${userName}, the Study in India (SII) programme is a flagship project by the Government of India that aims to attract international students to higher education institutions in India. What would you like to know about it?`,
            quickReplies: [
              { text: 'About SII', icon: 'ℹ️' },
              { text: 'Participating Institutions', icon: '🏛️' },
              { text: 'Benefits', icon: '✅' },
              { text: 'Eligibility', icon: '🔍' },
              { text: 'Back to Main Menu', icon: '🔙' }
            ]
          };
          break;
        case 'Registration & Choice Filling':
          botResponse = {
            sender: 'bot',
            text: `${userName}, registration for Study in India involves creating an account and filling your institution choices. What specific information do you need?`,
            quickReplies: [
              { text: 'Registration Process', icon: '📋' },
              { text: 'Choice Filling Guide', icon: '✏️' },
              { text: 'Important Dates', icon: '📅' },
              { text: 'Required Documents', icon: '📄' },
              { text: 'Back to Main Menu', icon: '🔙' }
            ]
          };
          break;
        case 'Costs & Fees':
          botResponse = {
            sender: 'bot',
            text: `Let me help you understand the costs associated with studying in India, ${userName}.`,
            quickReplies: [
              { text: 'Tuition Fees', icon: '💵' },
              { text: 'Living Expenses', icon: '🏠' },
              { text: 'Fee Waivers', icon: '🎁' },
              { text: 'Scholarships', icon: '🏆' },
              { text: 'Back to Main Menu', icon: '🔙' }
            ]
          };
          break;
        case 'Courses':
          botResponse = {
            sender: 'bot', 
            text: `${userName}, India offers a wide range of courses across various disciplines. What field interests you?`,
            quickReplies: [
              { text: 'Engineering', icon: '⚙️' },
              { text: 'Medicine', icon: '⚕️' },
              { text: 'Management', icon: '📊' },
              { text: 'Arts & Humanities', icon: '🎭' },
              { text: 'Science', icon: '🔬' },
              { text: 'Back to Main Menu', icon: '🔙' }
            ]
          };
          break;
        case 'Globally Accepted Degrees':
          botResponse = {
            sender: 'bot',
            text: `${userName}, Indian degrees are recognized worldwide due to the country's strong educational standards. What would you like to know about their global acceptance?`,
            quickReplies: [
              { text: 'Recognition Info', icon: '🌐' },
              { text: 'University Rankings', icon: '📈' },
              { text: 'Success Stories', icon: '🌟' },
              { text: 'Accreditation', icon: '✅' },
              { text: 'Back to Main Menu', icon: '🔙' }
            ]
          };
          break;
        case 'English Language Skills':
          botResponse = {
            sender: 'bot',
            text: `${userName}, most Indian universities offer courses in English. Here's information about language requirements:`,
            quickReplies: [
              { text: 'Language Requirements', icon: '📝' },
              { text: 'English Tests', icon: '✍️' },
              { text: 'Language Support', icon: '🗣️' },
              { text: 'Exemptions', icon: '🔓' },
              { text: 'Back to Main Menu', icon: '🔙' }
            ]
          };
          break;
        case 'Visa Regulations':
          botResponse = {
            sender: 'bot',
            text: `${userName}, to study in India, you'll need a Student Visa. What specific visa information do you need?`,
            quickReplies: [
              { text: 'Visa Application', icon: '📄' },
              { text: 'Required Documents', icon: '📋' },
              { text: 'Processing Time', icon: '⏱️' },
              { text: 'Visa Extension', icon: '🔄' },
              { text: 'Back to Main Menu', icon: '🔙' }
            ]
          };
          break;
        case 'Admissions':
          botResponse = {
            sender: 'bot',
            text: `${userName}, the admission process for Indian universities involves several steps. What would you like to know?`,
            quickReplies: [
              { text: 'Application Process', icon: '📝' },
              { text: 'Deadlines', icon: '📅' },
              { text: 'Entry Requirements', icon: '🚪' },
              { text: 'Selection Criteria', icon: '🎯' },
              { text: 'Back to Main Menu', icon: '🔙' }
            ]
          };
          break;
        case 'Back to Main Menu':
          botResponse = {
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
          break;
        default:
          botResponse = {
            sender: 'bot',
            text: `Thanks for your interest, ${userName}! I'd be happy to provide more information about that. Could you please elaborate on what you're looking for?`
          };
      }
      
      setMessages((prev) => [...prev, botResponse]);
    }, 800);
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
            <p className="text-xs text-white/80">Usual reply time: 1 to 2 Minutes</p>
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
              {msg.text}
              
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