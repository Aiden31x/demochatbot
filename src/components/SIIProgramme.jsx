import React from 'react';

const SIIProgramme = ({ userName, onBack, onSelectOption }) => {
  const handleOptionSelect = (option) => {
    if (option === 'Back to Main Menu') {
      onBack();
    } else {
      onSelectOption(option);
    }
  };

  const options = [
    {
      id: 'about',
      title: 'About SII',
      icon: 'ℹ️',
      content: `The Study in India (SII) programme was launched by the Ministry of Education, Government of India, to attract international students to study in top-ranked institutions in India. The programme aims to position India as a preferred destination for higher education.`
    },
    {
      id: 'institutions',
      title: 'Participating Institutions',
      icon: '🏛️',
      content: `Study in India includes over 100 premier institutions, including IITs, NITs, IIMs, central universities, and other prestigious institutions that have consistently maintained high standards in education.`
    },
    {
      id: 'benefits',
      title: 'Benefits',
      icon: '✅',
      content: `Benefits of the SII programme include fee waivers, simplified application process, dedicated support for international students, scholarships, and exposure to India's diverse culture while receiving quality education.`
    },
    {
      id: 'eligibility',
      title: 'Eligibility',
      icon: '🔍',
      content: `To be eligible for the SII programme, you must be a foreign national or an NRI with qualifying academic credentials. Specific eligibility criteria vary by course and institution but generally require strong academic performance in relevant subjects.`
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Study in India (SII) Programme</h3>
      <p>Hello {userName}, what would you like to know about the SII Programme?</p>
      
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

export default SIIProgramme;