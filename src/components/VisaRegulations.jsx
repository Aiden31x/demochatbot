import React, { useState, useRef, useEffect } from 'react';
import Feedback from './Feedback';

const VisaRegulations = ({ userName, onBack }) => {
  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      text: `Hello ${userName}! Welcome to the Visa Regulations section. I'm here to help you understand the visa requirements and processes for studying in India. 🛂`,
    },
    {
      sender: 'bot',
      text: `What would you like to know about Visa Regulations? 👇`,
      quickReplies: [
        { text: 'Where can i apply for indian student visa', icon: '📍' },
        { text: 'What is the average fees for indian student visa', icon: '💰' },
        { text: 'What are the documents required for a indian student visa', icon: '📄' },
        { text: 'Would i get a work visa after graduation', icon: '💼' },
        { text: 'Do i get medical insurance with my student visa', icon: '🏥' },
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
        text: `Thanks for your question, ${userName}! Please use the quick reply buttons below for specific information about Visa Regulations, or I can provide detailed guidance about visa processes and requirements.`,
        quickReplies: [
          { text: 'Where can i apply for indian student visa', icon: '📍' },
          { text: 'What is the average fees for indian student visa', icon: '💰' },
          { text: 'What are the documents required for a indian student visa', icon: '📄' },
          { text: 'Would i get a work visa after graduation', icon: '💼' },
          { text: 'Do i get medical insurance with my student visa', icon: '🏥' },
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

    // Handle Visa Regulations specific responses
    setTimeout(() => {
      let botResponse;
      
      switch(replyText) {
        case 'Where can i apply for indian student visa':
          botResponse = {
            sender: 'bot',
            text: `${userName}, here's information about where to apply for Indian student visa:

Students will need to apply for a visa separately on the portal https://indianvisaonline.gov.in/ after they’ve registered on the portal, received their unique student ID, applied and received offer letter from their preferred institution/s.

NOTE: Applying on the StudyinIndia portal does not guarantee Student Visa and is subject to the approval under prevailing laws and regulation in India.`,
            quickReplies: [
              { text: 'What is the average fees for indian student visa', icon: '💰' },
              { text: 'What are the documents required for a indian student visa', icon: '📄' },
              { text: 'Would i get a work visa after graduation', icon: '💼' },
              { text: 'Do i get medical insurance with my student visa', icon: '🏥' },
              { text: 'Back to Visa Regulations Options', icon: '↩️' }
            ]
          };
          break;
          
        case 'What is the average fees for indian student visa':
          botResponse = {
            sender: 'bot',
            text: `${userName}, here's information about average fees for Indian student visa:

The fees for a student visa is different for different countries. Generally, the amount ranges from $14 to $118 but the students are advised to check the fees by contacting the Indian mission/embassy present in their home country`,
            quickReplies: [
              { text: 'Where can i apply for indian student visa', icon: '📍' },
              { text: 'What are the documents required for a indian student visa', icon: '📄' },
              { text: 'Would i get a work visa after graduation', icon: '💼' },
              { text: 'Do i get medical insurance with my student visa', icon: '🏥' },
              { text: 'Back to Visa Regulations Options', icon: '↩️' }
            ]
          };
          break;
          
        case 'What are the documents required for a indian student visa':
          botResponse = {
            sender: 'bot',
            text: `${userName}, here's information about documents required for Indian student visa:

Documents required to process student visa at StudyInIndia portal:

Passport (with course duration validity)
Passport size photographs
Photocopy of passport
Proof of residential address
A printed copy of the online (filled) form
Formal admission letter
Printed proof of fees paid to the institute
Details of the University
Bank statement
DISCLAIMER: However, the requirement of documents for student visas may differ across countries. You are required to confirm the same from the nearest Indian embassy.`,
            quickReplies: [
              { text: 'Where can i apply for indian student visa', icon: '📍' },
              { text: 'What is the average fees for indian student visa', icon: '💰' },
              { text: 'Would i get a work visa after graduation', icon: '💼' },
              { text: 'Do i get medical insurance with my student visa', icon: '🏥' },
              { text: 'Back to Visa Regulations Options', icon: '↩️' }
            ]
          };
          break;
          
        case 'Would i get a work visa after graduation':
          botResponse = {
            sender: 'bot',
            text: `${userName}, here's information about work visa after graduation:

No, you will not get a work visa in India after graduation.`,
            quickReplies: [
              { text: 'Where can i apply for indian student visa', icon: '📍' },
              { text: 'What is the average fees for indian student visa', icon: '💰' },
              { text: 'What are the documents required for a indian student visa', icon: '📄' },
              { text: 'Do i get medical insurance with my student visa', icon: '🏥' },
              { text: 'Back to Visa Regulations Options', icon: '↩️' }
            ]
          };
          break;
          
        case 'Do i get medical insurance with my student visa':
          botResponse = {
            sender: 'bot',
            text: `${userName}, here's information about medical insurance with student visa:

You will not receive medical insurance with an Indian student visa. However, some institutes do provide medical insurance to their international students.

NOTE: It is advised that each international student should get medical insurance.`,
            quickReplies: [
              { text: 'Where can i apply for indian student visa', icon: '📍' },
              { text: 'What is the average fees for indian student visa', icon: '💰' },
              { text: 'What are the documents required for a indian student visa', icon: '📄' },
              { text: 'Would i get a work visa after graduation', icon: '💼' },
              { text: 'Back to Visa Regulations Options', icon: '↩️' }
            ]
          };
          break;
          
        case 'Back to Visa Regulations Options':
          botResponse = {
            sender: 'bot',
            text: `${userName}, what else would you like to know about Visa Regulations?`,
            quickReplies: [
              { text: 'Where can i apply for indian student visa', icon: '📍' },
              { text: 'What is the average fees for indian student visa', icon: '💰' },
              { text: 'What are the documents required for a indian student visa', icon: '📄' },
              { text: 'Would i get a work visa after graduation', icon: '💼' },
              { text: 'Do i get medical insurance with my student visa', icon: '🏥' },
              { text: 'Back to Main Menu', icon: '🔙' }
            ]
          };
          break;
          
        default:
          botResponse = {
            sender: 'bot',
            text: `Thanks for your interest, ${userName}! Please use the quick reply buttons for specific information about Visa Regulations.`,
            quickReplies: [
              { text: 'Where can i apply for indian student visa', icon: '📍' },
              { text: 'What is the average fees for indian student visa', icon: '💰' },
              { text: 'What are the documents required for a indian student visa', icon: '📄' },
              { text: 'Would i get a work visa after graduation', icon: '💼' },
              { text: 'Do i get medical insurance with my student visa', icon: '🏥' },
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
              <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"/>
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
                context="visa"
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
          placeholder="Ask about visa requirements..."
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
        Visa Support <span>⚡</span> by <span className="font-bold text-[#1e88e5]">Study<span className="text-[#ff8c00]">India</span></span>
      </div>
    </div>
  );
};

export default VisaRegulations;