import React from 'react';

const Feedback = ({ 
  onFeedback, 
  messageIndex, 
  userName = "User",
  helplineNumber = "+91-120-6565065",
  helplineEmail = "studyinindia@aicte-india.org",
  context = "general" // can be "sii", "registration", "courses", etc.
}) => {

  const handleFeedback = (isPositive) => {
    if (isPositive) {
      // Handle thumbs up - just log for now, you can enhance this
      console.log('Positive feedback for message:', messageIndex);
      
      // Optional: You can call the parent's onFeedback function to show a thank you message
      if (onFeedback) {
        onFeedback(true, messageIndex, null);
      }
    } else {
      // Handle thumbs down - create helpline message
      const contextMessages = {
        sii: `I'm sorry the SII Programme information wasn't helpful!`,
        registration: `I'm sorry the registration information wasn't helpful!`,
        courses: `I'm sorry the course information wasn't helpful!`,
        costs: `I'm sorry the cost information wasn't helpful!`,
        visa: `I'm sorry the visa information wasn't helpful!`,
        admissions: `I'm sorry the admissions information wasn't helpful!`,
        general: `I'm sorry the response wasn't helpful!`
      };

      const helplineMessage = {
        sender: 'bot',
        text: `${contextMessages[context] || contextMessages.general} Please contact our support team for immediate assistance:

📞 **Helpline:** ${helplineNumber}
📧 **Email:** ${helplineEmail}
🕒 **Hours:** Mon-Fri, 9 AM - 6 PM (IST)

Our team will be happy to help you personally, ${userName}!`,
        isHelplineMessage: true
      };

      // Call the parent's onFeedback function to add the helpline message
      if (onFeedback) {
        onFeedback(false, messageIndex, helplineMessage);
      }
    }
  };

  return (
    <div className="flex justify-end gap-2 mt-3 pt-2 border-t border-gray-100">
      <button
        onClick={() => handleFeedback(true)}
        className="p-1 hover:bg-green-100 rounded-full transition-colors"
        title="Helpful"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 10v12l5-5 5 5V10M7 9h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2z"/>
        </svg>
      </button>
      <button
        onClick={() => handleFeedback(false)}
        className="p-1 hover:bg-red-100 rounded-full transition-colors"
        title="Not helpful"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 14V2l-5 5-5-5v12M17 15h-10a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z"/>
        </svg>
      </button>
    </div>
  );
};

export default Feedback;