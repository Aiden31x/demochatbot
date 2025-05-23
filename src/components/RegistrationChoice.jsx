import React, { useState, useRef, useEffect } from 'react';
import Feedback from './Feedback';

const RegistrationChoiceFilling = ({ userName, onBack }) => {
  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      text: `Hello ${userName}! Welcome to the Registration & Choice Filling section. I'm here to help you understand the application process for studying in India. 📝`,
    },
    {
      sender: 'bot',
      text: `What would you like to know about Registration & Choice Filling? 👇`,
      quickReplies: [
        { text: 'What information do I need to fill application', icon: '📋' },
        { text: 'How many preferences of institutes can I choose', icon: '🎯' },
        { text: 'I am having trouble with grade conversion', icon: '📊' },
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
        text: `Thanks for your question, ${userName}! Please use the quick reply buttons below for specific information about Registration & Choice Filling, or I can provide detailed guidance on the application process.`,
        quickReplies: [
          { text: 'What information do I need to fill application', icon: '📋' },
          { text: 'How many preferences of institutes can I choose', icon: '🎯' },
          { text: 'I am having trouble with grade conversion', icon: '📊' },
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

    // Handle Registration & Choice Filling specific responses
    setTimeout(() => {
      let botResponse;
      
      switch(replyText) {
        case 'What information do I need to fill application':
          botResponse = {
            sender: 'bot',
            text: `${userName}, here's the information you'll need to complete your Study in India application:

You need to fill in different information across the three sections of the application and the sections include:

•Basic Information - In this section, you are required to provide basic information, parents details, addresses and passport details.
•Academic Information - In this section, you are required to provide academic details, information about additional exams (like GRE, GMAT, SAT, JEE Advanced & Mains, TOEFL, IELTS, etc.) and upload your documents for verification.
•Choice Filling - You can fill in your choice of courses and institutes once the ‘choice filling’ opens.`,
            quickReplies: [
              { text: 'How many preferences of institutes can I choose', icon: '🎯' },
              { text: 'I am having trouble with grade conversion', icon: '📊' },

              { text: 'Back to Registration Options', icon: '↩️' }
            ]
          };
          break;
          
        case 'How many preferences of institutes can I choose':
          botResponse = {
            sender: 'bot',
            text: `${userName}, here's information about institute preferences in the Study in India programme:

You have to fill in a minimum of 3 institute preferences during choice filling and there is no upper limit on the preference you give, however you can only accept one offer letter at a time. Please rank your choices carefully as the final allocation of the institute (during counselling) is done on the basis of the preferences set by you.`,
            quickReplies: [
              { text: 'What information do I need to fill application', icon: '📋' },
              { text: 'I am having trouble with grade conversion', icon: '📊' },

              { text: 'Back to Registration Options', icon: '↩️' }
            ]
          };
          break;
          
        case 'I am having trouble with grade conversion':
          botResponse = {
            sender: 'bot',
            text: `${userName}, grade conversion can be tricky! Here's comprehensive help for converting your grades to the Indian system:

If the grades/GPA in your mark sheets is not as per the Indian education system then refer to this link https://studyinindia.gov.in/GradesConversion, to check the conversions.

If you need further help, you can get in touch with us on our Toll-Free Number +91120-6565065 or email us at help.studyinindia.gov.in`,
            quickReplies: [

              { text: 'What information do I need to fill application', icon: '📋' },
              {text: 'How many preferences of institutes can I choose', icon: '🎯'},
              
              { text: 'Back to Registration Options', icon: '↩️' }
            ]
          };
          break;

        

       
          
        case 'Back to Registration Options':
          botResponse = {
            sender: 'bot',
            text: `${userName}, what else would you like to know about Registration & Choice Filling?`,
            quickReplies: [
              { text: 'What information do I need to fill application', icon: '📋' },
              { text: 'How many preferences of institutes can I choose', icon: '🎯' },
              { text: 'I am having trouble with grade conversion', icon: '📊' },
              { text: 'Back to Main Menu', icon: '🔙' }
            ]
          };
          break;
          
        default:
          botResponse = {
            sender: 'bot',
            text: `Thanks for your interest, ${userName}! Please use the quick reply buttons for specific information about Registration & Choice Filling.`,
            quickReplies: [
              { text: 'What information do I need to fill application', icon: '📋' },
              { text: 'How many preferences of institutes can I choose', icon: '🎯' },
              { text: 'I am having trouble with grade conversion', icon: '📊' },
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
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10,9 9,9 8,9"/>
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
                context="registration"
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
          placeholder="Ask about registration process..."
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
        Registration Help <span>⚡</span> by <span className="font-bold text-[#1e88e5]">Study<span className="text-[#ff8c00]">India</span></span>
      </div>
    </div>
  );
};

export default RegistrationChoiceFilling;