import React from 'react';

const VisaRegulations = ({ userName, onBack, onSelectOption }) => {
  const handleOptionSelect = (option) => {
    if (option === 'Back to Main Menu') {
      onBack();
    } else {
      onSelectOption(option);
    }
  };

  const options = [
    {
      id: 'application',
      title: 'Visa Application',
      icon: '📄',
      content: `To study in India, you need a Student Visa (S-Visa). The application process involves filling an online form on the Indian government's e-visa portal or applying through the Indian Embassy/Consulate in your country. You'll need an admission offer letter from an Indian institution before applying for a student visa.`
    },
    {
      id: 'documents',
      title: 'Required Documents',
      icon: '📋',
      content: `Documents required for an Indian Student Visa include: Valid passport, Admission offer letter from an Indian institution, Proof of financial resources to support your studies, Academic transcripts, Medical fitness certificate, Passport-sized photographs, and Visa application fee payment receipt.`
    },
    {
      id: 'processing',
      title: 'Processing Time',
      icon: '⏱️',
      content: `The processing time for an Indian Student Visa typically ranges from 2-4 weeks. It's advisable to apply at least 6-8 weeks before your intended travel date to India. Processing times may vary based on your country of residence and seasonal application volumes.`
    },
    {
      id: 'extension',
      title: 'Visa Extension',
      icon: '🔄',
      content: `Student visas are usually granted for the duration of your academic program. If you need to extend your stay, you must apply to the Foreigner Regional Registration Office (FRRO) in India at least 60 days before your visa expires. Extensions are generally granted for genuine academic reasons with proper documentation.`
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Visa Regulations</h3>
      <p>Hello {userName}, what information do you need about Indian student visas?</p>
      
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

export default VisaRegulations;