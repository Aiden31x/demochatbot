import React from 'react';

const RegistrationChoiceFilling = ({ userName, onBack, onSelectOption }) => {
  const handleOptionSelect = (option) => {
    if (option === 'Back to Main Menu') {
      onBack();
    } else {
      onSelectOption(option);
    }
  };

  const options = [
    {
      id: 'process',
      title: 'Registration Process',
      icon: '📋',
      content: `The registration process begins by creating an account on the Study in India portal. You'll need to provide personal information, educational background, and upload necessary documents. After verification, you'll receive your login credentials to proceed with the application.`
    },
    {
      id: 'guide',
      title: 'Choice Filling Guide',
      icon: '✏️',
      content: `During choice filling, you can select up to 5 institutions and courses based on your preference. The portal will show you eligible institutions based on your academic qualifications. You can prioritize your choices by ranking them from 1 to 5.`
    },
    {
      id: 'dates',
      title: 'Important Dates',
      icon: '📅',
      content: `Key dates for the Study in India programme typically include: Registration opens (November), Registration closes (March), Result announcements (April), and Final admission (May-July). Please check the official portal for the most current dates.`
    },
    {
      id: 'documents',
      title: 'Required Documents',
      icon: '📄',
      content: `Documents needed for registration include: Passport copy, Recent photograph, Academic transcripts/mark sheets, Proof of English proficiency (if applicable), Statement of purpose, and Letters of recommendation (for some specific courses).`
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Registration & Choice Filling</h3>
      <p>Hello {userName}, what information do you need about the registration process?</p>
      
      <div className="space-y-2">
        {options.map((option) => (
          <button
            key={option.id}
            className="w-full text-left bg-white border border-gray-200 hover:border-blue-500 hover:bg-blue-50 rounded-xl px-4 py-3 text-blue-600 flex items-center gap-2 transition-all"
            onClick={() => handleOptionSelect(option.title)}
          >
            <span className="text-lg">{option.icon}</span> {option.title}
          </button>
        ))}
        
        <button
          className="w-full text-left bg-gray-100 border border-gray-300 hover:bg-gray-200 rounded-xl px-4 py-3 text-gray-700 flex items-center gap-2 mt-4 transition-all"
          onClick={() => handleOptionSelect('Back to Main Menu')}
        >
          <span className="text-lg">🔙</span> Back to Main Menu
        </button>
      </div>
    </div>
  );
};

export default RegistrationChoiceFilling;