import React from 'react';

const CostsFees = ({ userName, onBack, onSelectOption }) => {
  const handleOptionSelect = (option) => {
    if (option === 'Back to Main Menu') {
      onBack();
    } else {
      onSelectOption(option);
    }
  };

  const options = [
    {
      id: 'tuition',
      title: 'Tuition Fees',
      icon: '💵',
      content: `Tuition fees in Indian institutions are relatively affordable compared to Western countries. For undergraduate programs, fees typically range from $3,000-$8,000 per year. For postgraduate programs, fees range from $4,000-$10,000 per year. Premium institutions may charge higher fees.`
    },
    {
      id: 'living',
      title: 'Living Expenses',
      icon: '🏠',
      content: `Living expenses in India are considerably low. On average, students spend $2,000-$4,000 per year, which includes accommodation, food, transportation, and other personal expenses. Costs may vary based on the city and lifestyle choices.`
    },
    {
      id: 'waivers',
      title: 'Fee Waivers',
      icon: '🎁',
      content: `Under the Study in India program, meritorious students can receive fee waivers ranging from 25% to 100% based on their performance in qualifying examinations. These waivers are competitive and offered to top-performing international students.`
    },
    {
      id: 'scholarships',
      title: 'Scholarships',
      icon: '🏆',
      content: `Various scholarships are available for international students, including the Study in India Scholarship, ICCR Scholarships, and institution-specific scholarships. These may cover tuition fees, accommodation, and sometimes living expenses, depending on academic merit.`
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Costs & Fees</h3>
      <p>Hello {userName}, what financial information would you like to learn about?</p>
      
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

export default CostsFees;