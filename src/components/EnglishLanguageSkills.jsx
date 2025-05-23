import React, { useState, useRef, useEffect } from 'react';
import Feedback from './Feedback';

const EnglishLanguageSkills = ({ userName, onBack }) => {
  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      text: `Hello ${userName}! Welcome to the English Language Skills section. I'm here to help you understand the language requirements and support available for studying in India. 🇮🇳`,
    },
    {
      sender: 'bot',
      text: `What would you like to know about English Language Skills? 👇`,
      quickReplies: [
        { text: 'What is the medium of study at the SII partnered institutes', icon: '📚' },
        { text: 'What english proficiency tests are popular in india', icon: '📝' },
        { text: 'Am i still able to study in india if english is not my first language', icon: '🌍' },
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
        text: `Thanks for your question, ${userName}! Please use the quick reply buttons below for specific information about English Language Skills, or I can provide detailed guidance about language requirements and proficiency tests.`,
        quickReplies: [
          { text: 'What is the medium of study at the SII partnered institutes', icon: '📚' },
          { text: 'What english proficiency tests are popular in india', icon: '📝' },
          { text: 'Am i still able to study in india if english is not my first language', icon: '🌍' },
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

    // Handle English Language Skills specific responses
    setTimeout(() => {
      let botResponse;
      
      switch(replyText) {
        case 'What is the medium of study at the SII partnered institutes':
          botResponse = {
            sender: 'bot',
            text: `${userName}, here's information about the medium of study at SII partnered institutes:

English is the medium of instruction in all the Study in India partner institutes.`,
            quickReplies: [
              { text: 'What english proficiency tests are popular in india', icon: '📝' },
              { text: 'Am i still able to study in india if english is not my first language', icon: '🌍' },
              { text: 'Back to English Language Skills Options', icon: '↩️' }
            ]
          };
          break;
          
        case 'What english proficiency tests are popular in india':
          botResponse = {
            sender: 'bot',
            text: `${userName}, here's information about popular English proficiency tests in India:

It varies from institute to institute, but generally, scores of IELTS or TOEFL are considered. However, you are advised to check the specific eligibility criteria set by the SII partner institute while applying.`,
            quickReplies: [
              { text: 'What is the medium of study at the SII partnered institutes', icon: '📚' },
              { text: 'Am i still able to study in india if english is not my first language', icon: '🌍' },
              { text: 'Back to English Language Skills Options', icon: '↩️' }
            ]
          };
          break;
          
        case 'Am i still able to study in india if english is not my first language':
          botResponse = {
            sender: 'bot',
            text: `${userName}, here's information about studying in India when English is not your first language:

If you have secured the required scores in English proficiency tests such as IELTS or TOEFL or scored the required marks in the institute’s English aptitude test then you are eligible to study in India.`,
            quickReplies: [
              { text: 'What is the medium of study at the SII partnered institutes', icon: '📚' },
              { text: 'What english proficiency tests are popular in india', icon: '📝' },
              { text: 'Back to English Language Skills Options', icon: '↩️' }
            ]
          };
          break;
          
        case 'Back to English Language Skills Options':
          botResponse = {
            sender: 'bot',
            text: `${userName}, what else would you like to know about English Language Skills?`,
            quickReplies: [
              { text: 'What is the medium of study at the SII partnered institutes', icon: '📚' },
              { text: 'What english proficiency tests are popular in india', icon: '📝' },
              { text: 'Am i still able to study in india if english is not my first language', icon: '🌍' },
              { text: 'Back to Main Menu', icon: '🔙' }
            ]
          };
          break;
          
        default:
          botResponse = {
            sender: 'bot',
            text: `Thanks for your interest, ${userName}! Please use the quick reply buttons for specific information about English Language Skills.`,
            quickReplies: [
              { text: 'What is the medium of study at the SII partnered institutes', icon: '📚' },
              { text: 'What english proficiency tests are popular in india', icon: '📝' },
              { text: 'Am i still able to study in india if english is not my first language', icon: '🌍' },
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
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9C9 10 8 11 7 11V13C8 13 9 12 10 12H14C15 12 16 13 17 13V11C16 11 15 10 15 9Z"/>
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
                context="english"
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
          placeholder="Ask about language requirements..."
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
        Language Support <span>⚡</span> by <span className="font-bold text-[#1e88e5]">Study<span className="text-[#ff8c00]">India</span></span>
      </div>
    </div>
  );
};

export default EnglishLanguageSkills;