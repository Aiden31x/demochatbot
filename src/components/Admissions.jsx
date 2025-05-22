import React from 'react';

const Admissions = ({ userName, onBack, onSelectOption }) => {
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
      title: 'Application Process',
      icon: '📝',
      content: `The application process for Indian institutions involves: 1) Registration on the Study in India portal or university website, 2) Completing the application form with personal and educational details, 3) Uploading required documents, 4) Paying application fees, 5) Attending entrance exams or interviews if required, and 6) Receiving admission offers.`
    },
    {
      id: 'deadlines',
      title: 'Deadlines',
      icon: '📅',
      content: `Application deadlines for international students typically fall between December and April for programs starting in July/August. Some universities also have a January intake with application deadlines around September-October. It's advisable to apply early as admissions are often processed on a rolling basis.`
    },
    {
      id: 'requirements',
      title: 'Entry Requirements',
      icon: '🚪',
      content: `Entry requirements vary by program and institution but generally include: Completed secondary education (for undergraduate) or bachelor's degree (for postgraduate), Minimum academic scores (often 60-70%), English proficiency test scores, and Program-specific requirements like portfolios for art programs or work experience for MBA.`
    },
    {
      id: 'criteria',
      title: 'Selection Criteria',
      icon: '🎯',
      content: `Selection criteria include academic performance in previous education, performance in entrance tests (if applicable), English language proficiency, statements of purpose, letters of recommendation, relevant experience, and sometimes interviews. The weight given to each criterion varies by institution and program.`
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Admissions</h3>
      <p>Hello {userName}, what would you like to know about the admission process?</p>
      
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

export default Admissions;