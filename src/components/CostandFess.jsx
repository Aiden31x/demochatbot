import React, { useState, useRef, useEffect } from 'react';
import Feedback from './Feedback';

const CostsFees = ({ userName, onBack }) => {
  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      text: `Hello ${userName}! Welcome to the Costs & Fees section. I'm here to help you understand all the financial aspects of studying in India. 💰`,
    },
    {
      sender: 'bot',
      text: `What would you like to know about Costs & Fees? 👇`,
      quickReplies: [
        { text: 'What is annual average living cost of international student in india', icon: '🏠' },
        { text: 'What is annual tuition fee for courses in india', icon: '💵' },
        { text: 'Can my institution provide with additional concessions?', icon: '🎁' },
        { text: 'Back to Main Menu', icon: '🔙' }
      ]
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
    
    // Simple response for any typed input
    setTimeout(() => {
      const botReply = { 
        sender: 'bot', 
        text: `Thanks for your question, ${userName}! Please use the quick reply buttons below for specific information about Costs & Fees, or I can provide detailed financial guidance for studying in India.`,
        quickReplies: [
          { text: 'What is annual average living cost of international student in india', icon: '🏠' },
          { text: 'What is annual tuition fee for courses in india', icon: '💵' },
          { text: 'Can my institution provide with additional concessions?', icon: '🎁' },
          { text: 'Back to Main Menu', icon: '🔙' }
        ]
      };
      setMessages((prev) => [...prev, botReply]);
    }, 600);
    
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleQuickReply = (replyText) => {
    // Add the quick reply as a user message
    const userMessage = { sender: 'user', text: replyText };
    setMessages((prev) => [...prev, userMessage]);
    
    // Handle back to main menu
    if (replyText === 'Back to Main Menu') {
      onBack();
      return;
    }

    // Handle Costs & Fees specific responses
    setTimeout(() => {
      let botResponse;
      
      switch(replyText) {
        case 'What is annual average living cost of international student in india':
          botResponse = {
            sender: 'bot',
            text: `${userName}, here's information about the annual average living costs for international students in India:

The average living cost for an international student in India, per month, amounts to approximately $400. This cost excludes the tuition fee. A general breakup of monthly expenses is indicated below:

Particulars	Indicative Monthly Expenses
Accommodation	$150
Food & Housekeeping	$100
Mobile Expenses	$10
Personal Expenses	$50
Laundry	$15
Stationary	$30
Transport	$45
** Please note, the costs may vary from city to city.`,
            quickReplies: [
              { text: 'What is annual tuition fee for courses in india', icon: '💵' },
              { text: 'Can my institution provide with additional concessions?', icon: '🎁' },

              { text: 'Back to Costs Options', icon: '↩️' }
            ]
          };
          break;
          
        case 'What is annual tuition fee for courses in india':
          botResponse = {
            sender: 'bot',
            text: `${userName}, here's information about annual tuition fees for courses in India:

The tuition fees vary across courses and institutes. You may find the details of the same through the Courses page present on the homepage.`,
            quickReplies: [
              { text: 'What is annual average living cost of international student in india', icon: '🏠' },
              { text: 'Can my institution provide with additional concessions?', icon: '🎁' },

              { text: 'Back to Costs Options', icon: '↩️' }
            ]
          };
          break;
          
        case 'Can my institution provide with additional concessions?':
          botResponse = {
            sender: 'bot',
            text: `${userName}, here's information about additional concessions and financial assistance:

The decision to provide additional concessions on your fees depends entirely on the institute. You may confirm the same at the time of admission from the institute itself.S`,
            quickReplies: [
              { text: 'What is annual average living cost of international student in india', icon: '🏠' },
              { text: 'What is annual tuition fee for courses in india', icon: '💵' },
              { text: 'Back to Costs Options', icon: '↩️' }
            ]
          };
          break;

        

          
        case 'Back to Costs Options':
          botResponse = {
            sender: 'bot',
            text: `${userName}, what else would you like to know about Costs & Fees?`,
            quickReplies: [
              { text: 'What is annual average living cost of international student in india', icon: '🏠' },
              { text: 'What is annual tuition fee for courses in india', icon: '💵' },
              { text: 'Can my institution provide with additional concessions?', icon: '🎁' },
              { text: 'Back to Main Menu', icon: '🔙' }
            ]
          };
          break;
          
        default:
          botResponse = {
            sender: 'bot',
            text: `Thanks for your interest, ${userName}! Please use the quick reply buttons for specific information about Costs & Fees.`,
            quickReplies: [
              { text: 'What is annual average living cost of international student in india', icon: '🏠' },
              { text: 'What is annual tuition fee for courses in india', icon: '💵' },
              { text: 'Can my institution provide with additional concessions?', icon: '🎁' },
              { text: 'Back to Main Menu', icon: '🔙' }
            ]
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
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V19C3 20.1 3.9 21 5 21H11V19.5L21 9Z"/>
              <path d="M15 8L17 10L22 5L20 3L15 8Z" fill="#ff8c00"/>
            </svg>
          </div>
          <div>
            <h1 className="font-bold text-lg">StudyIndia<span className="text-[#ff8c00]">Bot</span></h1>
            <p className="text-xs text-white/80">Your Study in India Assistant</p>
          </div>
        </div>
        <button 
          onClick={onBack}
          className="text-2xl hover:bg-blue-700 rounded-full p-1 transition-colors"
          title="Back to Main Menu"
        >
          ✕
        </button>
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
              <Feedback 
                onFeedback={handleFeedback}
                messageIndex={index}
                userName={userName}
                context="costs"
                />
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
          placeholder="Ask about costs and fees..."
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
        Costs & Fees <span>⚡</span> by <span className="font-bold text-[#1e88e5]">Study<span className="text-[#ff8c00]">India</span></span>
      </div>
    </div>
  );
};

export default CostsFees;