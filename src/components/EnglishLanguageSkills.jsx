import React from 'react';

const EnglishLanguageSkills = ({ userName, onBack, onSelectOption }) => {
  const handleOptionSelect = (option) => {
    if (option === 'Back to Main Menu') {
      onBack();
    } else {
      onSelectOption(option);
    }
  };

  const options = [
    {
      id: 'requirements',
      title: 'Language Requirements',
      icon: '📝',
      content: `Most Indian institutions offering courses to international students require proficiency in English. The medium of instruction for international programs is predominantly English. Typically, universities require a minimum level of English proficiency demonstrated through standardized tests.`
    },
    {
      id: 'tests',
      title: 'English Tests',
      icon: '✍️',
      content: `Common English proficiency tests accepted by Indian institutions include TOEFL (Test of English as a Foreign Language), IELTS (International English Language Testing System), PTE (Pearson Test of English), and sometimes the institution's own English proficiency test. Score requirements vary by institution and program.`
    },
    {
      id: 'support',
      title: 'Language Support',
      icon: '🗣️',
      content: `Many Indian universities offer English language support programs for international students. These include pre-sessional English courses, language labs, conversation clubs, and writing centers to help students improve their language skills throughout their academic journey.`
    },
    {
      id: 'exemptions',
      title: 'Exemptions',
      icon: '🔓',
      content: `Students from countries where English is the official language or those who have completed their previous education in English may be exempted from providing English proficiency test scores. However, this varies by institution, so it's best to check the specific requirements of your chosen university.`
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">English Language Skills</h3>
      <p>Hello {userName}, what would you like to know about English language requirements?</p>
      
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

export default EnglishLanguageSkills;