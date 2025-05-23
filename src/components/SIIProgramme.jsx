import React, { useState, useRef, useEffect } from 'react';
import Feedback from './Feedback';

const SIIProgramme = ({ userName, onBack }) => {
  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      text: `Hello ${userName}! Welcome to the Study in India (SII) Programme section. I'm here to provide you with comprehensive information about this flagship initiative by the Government of India. 🇮🇳`,
    },
    {
      sender: 'bot',
      text: `What would you like to know about the SII Programme? 👇`,
      quickReplies: [
        { text: 'About Study in India Programme', icon: 'ℹ️' },
        { text: 'Benefits of SII Programme', icon: '✅' },
        { text: '3 Pillars of SII Programme', icon: '🏛️' },
        { text: 'List of Institutes & Courses', icon: '📋' },
        { text: 'How to Apply to SII', icon: '📝' },
        { text: 'Available Courses', icon: '📚' },
        { text: 'Contact Project Officers', icon: '📞' },
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
        text: `Thanks for your question, ${userName}! Please use the quick reply buttons below for specific information about the SII Programme, or I can connect you with a project officer for personalized assistance.`,
        quickReplies: [
          { text: 'About Study in India Programme', icon: 'ℹ️' },
          { text: 'Benefits of SII Programme', icon: '✅' },
          { text: 'Contact Project Officers', icon: '📞' },
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

    // Handle SII-specific responses
    setTimeout(() => {
      let botResponse;
      
      switch(replyText) {
        case 'About Study in India Programme':
          botResponse = {
            sender: 'bot',
            text: `${userName}, The Study In India (SII) programme is a flagship project of the Government of India executed by the Ministry of Education (MoE), Government of India. The programme has been put together to facilitate and encourage international students to study in India’s premier Indian institutes. The Study in India website will be the one stop solution for all information about the studying in India.`,
            quickReplies: [
              { text: 'Benefits of SII Programme', icon: '✅' },
              { text: '3 Pillars of SII Programme', icon: '🏛️' },
              { text: 'How to Apply to SII', icon: '📝' },
              { text: 'Back to SII Options', icon: '↩️' }
            ]
          };
          break;
          
        case 'Benefits of SII Programme':
          botResponse = {
            sender: 'bot',
            text: `${userName}, The Study in India programme invites students from all around the globe to explore the educational opportunities offered by the India’s Higher Education Institutions and students can pursue their higher education in any of the institutions who have furnished information about the Study programs available therein. Major benefits of studying in India with the Study in India Programme include:

Study in India partners with 600+ top institutes offering 8000+ courses in fields like Engineering, Agriculture, Law, Management, Humanities, Yoga, and more.

Partner institutes:

Have NAAC ≥ 3.01, or

Are NIRF ranked (except medical), or

Are INIs/IOEs, or

Listed in QS Asia Rankings, or

Have Autonomous Status from bodies like UGC, AICTE, etc., or

Show 80%+ admissions over 5 years.

🎓 Scholarships/Fee Waivers (10%–100%) are offered based on merit and institute discretion.`,
            quickReplies: [
              { text: '3 Pillars of SII Programme', icon: '🏛️' },
              { text: 'How to Apply to SII', icon: '📝' },
              { text: 'Available Courses', icon: '📚' },
              { text: 'Back to SII Options', icon: '↩️' }
            ]
          };
          break;
          
        case '3 Pillars of SII Programme':
          botResponse = {
            sender: 'bot',
            text: `${userName}, Three pillars of the Study in India Programme include:

Learn – Study in India includes top government institutions, INIs, and autonomous colleges offering quality yet affordable education. Their blended learning combines theory and practical experience across courses.

Thrive – Study in India alumni lead global firms like Microsoft and Google. The competitive, multicultural environment helps students grow, innovate, and network with peers from India and around the world.

Explore – From UNESCO heritage sites to vibrant festivals, diverse cuisine, arts, and nature—India offers rich cultural experiences alongside education`,
            quickReplies: [
              { text: 'List of Institutes & Courses', icon: '📋' },
              { text: 'Benefits of SII Programme', icon: '✅' },
              { text: 'How to Apply to SII', icon: '📝' },
              { text: 'Back to SII Options', icon: '↩️' }
            ]
          };
          break;
          
        case 'List of Institutes & Courses':
          botResponse = {
            sender: 'bot',
            text: `${userName},The list of the institutes and courses offered under the Study in India programme can be found by clicking on the ‘Courses’ page present on the top of the homepage of the SII website.`,
            quickReplies: [
              { text: 'How to Apply to SII', icon: '📝' },
              { text: 'Available Courses', icon: '📚' },
              { text: 'Contact Project Officers', icon: '📞' },
              { text: 'Back to SII Options', icon: '↩️' }
            ]
          };
          break;
          
        case 'How to Apply to SII':
          botResponse = {
            sender: 'bot',
            text: `${userName}, To join the Study in India programme, you need to ‘Register’ on the website and apply to the institutes of your choice and preference. All you need to do is follow the ‘6 Steps to Study in India’ which are

•Register Here - Register yourself for the current academic year..
•Plan Your Budget - Plan and calculate your expenditure.
•Submit Application - Choose your course and institute and submit the application.
•Check Result - Check the course and institute allotted to you.
•Prepare for Departure - Start preparing for your educational journey to India`,
            quickReplies: [
              { text: 'Available Courses', icon: '📚' },
              { text: 'Contact Project Officers', icon: '📞' },
              { text: 'List of Institutes & Courses', icon: '📋' },
              { text: 'Back to SII Options', icon: '↩️' }
            ]
          };
          break;
          
        case 'Available Courses':
          botResponse = {
            sender: 'bot',
            text: `${userName}, The Institutions within the ‘Study in India’ offer a range of courses across various disciplines. It has over 2600 courses ranging from popular courses like Engineering & Technology, Agriculture, Law, Arts & Humanities, Paramedical & Allied Health courses, Languages, niche courses such as Yoga, Buddhist Studies, etc.`,
            quickReplies: [
              { text: 'How to Apply to SII', icon: '📝' },
              { text: 'List of Institutes & Courses', icon: '📋' },
              { text: 'Contact Project Officers', icon: '📞' },
              { text: 'Back to SII Options', icon: '↩️' }
            ]
          };
          break;
          
        case 'Contact Project Officers':
          botResponse = {
            sender: 'bot',
            text: `${userName}, Yes, the website, https://studyinindia.gov.in/, is the backbone of the Study in India operations and what it offers to international students. You can get all information needed from the officers of Study in India through a Toll-Free Number (+91120-6565065) and email at studyinindia@aicte-india.org. (support@studyinIndia.gov.in) You may also find large information in social media pages – Facebook, twitters, blogs as well.`,
            quickReplies: [
              { text: 'How to Apply to SII', icon: '📝' },
              { text: 'List of Institutes & Courses', icon: '📋' },
              { text: 'Available Courses', icon: '📚' },
              { text: 'Back to SII Options', icon: '↩️' }
            ]
          };
          break;
          
        case 'Back to SII Options':
          botResponse = {
            sender: 'bot',
            text: `${userName}, what else would you like to know about the Study in India programme?`,
            quickReplies: [
              { text: 'About Study in India Programme', icon: 'ℹ️' },
              { text: 'Benefits of SII Programme', icon: '✅' },
              { text: '3 Pillars of SII Programme', icon: '🏛️' },
              { text: 'List of Institutes & Courses', icon: '📋' },
              { text: 'How to Apply to SII', icon: '📝' },
              { text: 'Available Courses', icon: '📚' },
              { text: 'Contact Project Officers', icon: '📞' },
              { text: 'Back to Main Menu', icon: '🔙' }
            ]
          };
          break;
          
        default:
          botResponse = {
            sender: 'bot',
            text: `Thanks for your interest, ${userName}! Please use the quick reply buttons for specific information about the SII Programme.`,
            quickReplies: [
              { text: 'About Study in India Programme', icon: 'ℹ️' },
              { text: 'Benefits of SII Programme', icon: '✅' },
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
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
              <path d="M10.3 15.7l1.4-1.4L9.8 12l1.9-1.9-1.4-1.4L7 12z" fill="#ff8c00"/>
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
                context="sii"
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
          placeholder="Ask about SII Programme..."
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
        SII Programme <span>⚡</span> by <span className="font-bold text-[#1e88e5]">Study<span className="text-[#ff8c00]">India</span></span>
      </div>
    </div>
  );
};

export default SIIProgramme;