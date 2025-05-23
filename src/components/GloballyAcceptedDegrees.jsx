import React, { useState, useRef, useEffect } from 'react';
import Feedback from './Feedback';

const GloballyAcceptedDegrees = ({ userName, onBack }) => {
  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      text: `Hello ${userName}! Welcome to the Globally Accepted Degrees section. I'm here to help you understand the global recognition and quality assurance of our partner institutes. 🌍`,
    },
    {
      sender: 'bot',
      text: `What would you like to know about Globally Accepted Degrees? 👇`,
      quickReplies: [
        { text: 'Where can i view the ranking list of SII Partner institutes', icon: '📊' },
        { text: 'Are SII partner institutes partner quality assured', icon: '✅' },
        { text: 'Are degrees from SII partnered institutes recognized in the global market?', icon: '🌐' },
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
        text: `Thanks for your question, ${userName}! Please use the quick reply buttons below for specific information about Globally Accepted Degrees, or I can provide detailed guidance about degree recognition and quality assurance.`,
        quickReplies: [
          { text: 'Where can i view the ranking list of SII Partner institutes', icon: '📊' },
          { text: 'Are SII partner institutes partner quality assured', icon: '✅' },
          { text: 'Are degrees from SII partnered institutes recognized in the global market?', icon: '🌐' },
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

    // Handle Globally Accepted Degrees specific responses
    setTimeout(() => {
      let botResponse;
      
      switch(replyText) {
        case 'Where can i view the ranking list of SII Partner institutes':
          botResponse = {
            sender: 'bot',
            text: `${userName}, here's information about viewing the ranking list of SII Partner institutes:

Follow the link to have a look at the NIRF rankings of Indian universities - https://www.nirfindia.org/2021/UniversityRanking.html`,
            quickReplies: [
              { text: 'Are SII partner institutes partner quality assured', icon: '✅' },
              { text: 'Are degrees from SII partnered institutes recognized in the global market?', icon: '🌐' },
              { text: 'Back to Globally Accepted Degrees Options', icon: '↩️' }
            ]
          };
          break;
          
        case 'Are SII partner institutes partner quality assured':
          botResponse = {
            sender: 'bot',
            text: `${userName}, here's information about SII partner institutes quality assurance:

The added advantage of the Study in India Programme is quality assurance wherein it partners up with institutes that

have National Assessment and Accreditation Council (NAAC) accreditation of 3.01 and above, or
are ranked among the top 100 in any category except medical by the National Institutional Ranking Framework (NIRF), or
have the status of Institute of National Importance (INI) or Institute of Eminence (IOE).`,
            quickReplies: [
              { text: 'Where can i view the ranking list of SII Partner institutes', icon: '📊' },
              { text: 'Are degrees from SII partnered institutes recognized in the global market?', icon: '🌐' },
              { text: 'Back to Globally Accepted Degrees Options', icon: '↩️' }
            ]
          };
          break;
          
        case 'Are degrees from SII partnered institutes recognized in the global market?':
          botResponse = {
            sender: 'bot',
            text: `${userName}, here's information about global recognition of SII partnered institutes degrees:

Yes, all courses with the SII-partner institutes are recognized globally, not only for higher education but also for employment opportunities.`,
            quickReplies: [
              { text: 'Where can i view the ranking list of SII Partner institutes', icon: '📊' },
              { text: 'Are SII partner institutes partner quality assured', icon: '✅' },
              { text: 'Back to Globally Accepted Degrees Options', icon: '↩️' }
            ]
          };
          break;
          
        case 'Back to Globally Accepted Degrees Options':
          botResponse = {
            sender: 'bot',
            text: `${userName}, what else would you like to know about Globally Accepted Degrees?`,
            quickReplies: [
              { text: 'Where can i view the ranking list of SII Partner institutes', icon: '📊' },
              { text: 'Are SII partner institutes partner quality assured', icon: '✅' },
              { text: 'Are degrees from SII partnered institutes recognized in the global market?', icon: '🌐' },
              { text: 'Back to Main Menu', icon: '🔙' }
            ]
          };
          break;
          
        default:
          botResponse = {
            sender: 'bot',
            text: `Thanks for your interest, ${userName}! Please use the quick reply buttons for specific information about Globally Accepted Degrees.`,
            quickReplies: [
              { text: 'Where can i view the ranking list of SII Partner institutes', icon: '📊' },
              { text: 'Are SII partner institutes partner quality assured', icon: '✅' },
              { text: 'Are degrees from SII partnered institutes recognized in the global market?', icon: '🌐' },
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
              <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
            </svg>
          </div>
          <div>
            <h1 className="font-bold text-lg">StudyIndia<span className="text-[#ff8c00]">Bot</span> </h1>
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
                context="degrees"
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
          placeholder="Ask about degree recognition..."
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
        Global Recognition <span>⚡</span> by <span className="font-bold text-[#1e88e5]">Study<span className="text-[#ff8c00]">India</span></span>
      </div>
    </div>
  );
};

export default GloballyAcceptedDegrees;