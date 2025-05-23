import React, { useState, useRef, useEffect } from 'react';
import Feedback from './Feedback';

const Courses = ({ userName, onBack }) => {
  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      text: `Hello ${userName}! Welcome to the Courses section. I'm here to help you explore the wide range of academic programs available in India. 📚`,
    },
    {
      sender: 'bot',
      text: `What would you like to know about Courses? 👇`,
      quickReplies: [
        { text: 'How many courses and Institutes are covered under Study in India', icon: '📊' },
        { text: 'Can i change my alloted institute', icon: '🔄' },
        { text: 'What type of degrees are provided under niche courses', icon: '🎯' },
        { text: 'Can i apply for courses of study in Medicine and its related areas with the Program', icon: '⚕️' },
        { text: 'What are STEM and non STEM courses', icon: '🔬' },
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
        text: `Thanks for your question, ${userName}! Please use the quick reply buttons below for specific information about Courses, or I can provide detailed guidance about academic programs in India.`,
        quickReplies: [
          { text: 'How many courses and Institutes are covered under Study in India', icon: '📊' },
          { text: 'Can i change my alloted institute', icon: '🔄' },
          { text: 'What type of degrees are provided under niche courses', icon: '🎯' },
          { text: 'Can i apply for courses of study in Medicine and its related areas with the Program', icon: '⚕️' },
          { text: 'What are STEM and non STEM courses', icon: '🔬' },
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

    // Handle Courses specific responses
    setTimeout(() => {
      let botResponse;
      
      switch(replyText) {
        case 'How many courses and Institutes are covered under Study in India':
          botResponse = {
            sender: 'bot',
            text: `${userName}, here's information about the number of courses and institutes covered under Study in India:

India has the world’s second-largest higher education network, with more than 42,000 colleges and 1000 universities. SII has partnered with 600+ top-ranked institutes, offering 8000+ courses across a range of disciplines.`,
            quickReplies: [
              { text: 'Can i change my alloted institute', icon: '🔄' },
              { text: 'What type of degrees are provided under niche courses', icon: '🎯' },

              { text: 'Back to Courses Options', icon: '↩️' }
            ]
          };
          break;
          
        case 'Can i change my alloted institute':
          botResponse = {
            sender: 'bot',
            text: `${userName}, here's information about changing your allotted institute:

Once an institute has been allotted, it cannot be changed. But if the institute permits, the allotted course can be changed.`,
            quickReplies: [
              { text: 'How many courses and Institutes are covered under Study in India', icon: '📊' },
              { text: 'What type of degrees are provided under niche courses', icon: '🎯' },

              { text: 'Back to Courses Options', icon: '↩️' }
            ]
          };
          break;
          
        case 'What type of degrees are provided under niche courses':
          botResponse = {
            sender: 'bot',
            text: `${userName}, here's information about degrees provided under niche courses:

All the degrees courses offered are Regular & full-time with the prescribed duration as specified for each level. The courses are structured by educational institutes duly recognized by the statutory and regulatory body of the Government of India, which also follows the global practices and accolades as prescribed therein.`,
            quickReplies: [
              { text: 'How many courses and Institutes are covered under Study in India', icon: '📊' },
              { text: 'Can i change my alloted institute', icon: '🔄' },

              { text: 'Back to Courses Options', icon: '↩️' }
            ]
          };
          break;

        case 'Can i apply for courses of study in Medicine and its related areas with the Program':
          botResponse = {
            sender: 'bot',
            text: `${userName}, here's information about Medical courses and related areas:

Students cannot apply for Undergraduate in Medicine and their related programs. There are no medical courses under the Study in India. However, students can pursue Para-Medical & allied areas courses, such as Pharmacy, Nursing, Medical Laboratory Technology, Physiotherapy etc.`,
            quickReplies: [
              { text: 'What are STEM and non STEM courses', icon: '🔬' },
              { text: 'What type of degrees are provided under niche courses', icon: '🎯' },

              { text: 'Back to Courses Options', icon: '↩️' }
            ]
          };
          break;

        case 'What are STEM and non STEM courses':
          botResponse = {
            sender: 'bot',
            text: `${userName}, here's information about STEM and non-STEM courses:

STEM Courses focus on Science, Technology, Engineering, and Mathematics with a hands-on, interdisciplinary approach to real-world problem-solving.

Non-STEM Courses include Commerce, Arts, Business, Humanities, and Social Sciences. These programs build strong skills in communication, critical thinking, and creativity—offering career paths in education, marketing, journalism, and more.

`,
            quickReplies: [
              { text: 'How many courses and Institutes are covered under Study in India', icon: '📊' },
              { text: 'Can i apply for courses of study in Medicine and its related areas with the Program', icon: '⚕️' },

              { text: 'Back to Courses Options', icon: '↩️' }
            ]
          };
          break;

        
          
        case 'Back to Courses Options':
          botResponse = {
            sender: 'bot',
            text: `${userName}, what else would you like to know about Courses?`,
            quickReplies: [
              { text: 'How many courses and Institutes are covered under Study in India', icon: '📊' },
              { text: 'Can i change my alloted institute', icon: '🔄' },
              { text: 'What type of degrees are provided under niche courses', icon: '🎯' },
              { text: 'Can i apply for courses of study in Medicine and its related areas with the Program', icon: '⚕️' },
              { text: 'What are STEM and non STEM courses', icon: '🔬' },
              { text: 'Back to Main Menu', icon: '🔙' }
            ]
          };
          break;
          
        default:
          botResponse = {
            sender: 'bot',
            text: `Thanks for your interest, ${userName}! Please use the quick reply buttons for specific information about Courses.`,
            quickReplies: [
              { text: 'How many courses and Institutes are covered under Study in India', icon: '📊' },
              { text: 'Can i change my alloted institute', icon: '🔄' },
              { text: 'What type of degrees are provided under niche courses', icon: '🎯' },
              { text: 'Can i apply for courses of study in Medicine and its related areas with the Program', icon: '⚕️' },
              { text: 'What are STEM and non STEM courses', icon: '🔬' },
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
              <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"/>
              <path d="M7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H17V17H7V15Z" fill="#ff8c00"/>
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
                context="courses"
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
          placeholder="Ask about courses and programs..."
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
        Courses Info <span>⚡</span> by <span className="font-bold text-[#1e88e5]">Study<span className="text-[#ff8c00]">India</span></span>
      </div>
    </div>
  );
};

export default Courses;