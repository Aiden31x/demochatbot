import React from 'react';

const Courses = ({ userName, onBack, onSelectOption }) => {
  const handleOptionSelect = (option) => {
    if (option === 'Back to Main Menu') {
      onBack();
    } else {
      onSelectOption(option);
    }
  };

  const options = [
    {
      id: 'engineering',
      title: 'Engineering',
      icon: '⚙️',
      content: `India offers world-class engineering education through institutions like IITs, NITs, and BITS. Popular engineering courses include Computer Science, Electronics, Mechanical, Civil, and Electrical Engineering. These programs typically run for 4 years for undergraduate and 2 years for postgraduate degrees.`
    },
    {
      id: 'medicine',
      title: 'Medicine',
      icon: '⚕️',
      content: `Medical education in India is highly regarded with institutions like AIIMS, CMC Vellore, and JIPMER. MBBS is a 5.5-year program (including internship). Other healthcare courses include BDS (Dental), BAMS (Ayurveda), BHMS (Homeopathy), and various paramedical courses.`
    },
    {
      id: 'management',
      title: 'Management',
      icon: '📊',
      content: `Management studies in India are offered by prestigious institutions like IIMs, XLRI, and FMS. Popular courses include MBA (2 years), BBA (3 years), and specialized management programs in Finance, Marketing, HR, Operations, and International Business.`
    },
    {
      id: 'arts',
      title: 'Arts & Humanities',
      icon: '🎭',
      content: `India has a rich tradition in arts and humanities education. Top universities offer courses in Literature, History, Philosophy, Economics, Sociology, Psychology, Fine Arts, Performing Arts, and Languages. These programs typically span 3 years for undergraduate and 2 years for postgraduate degrees.`
    },
    {
      id: 'science',
      title: 'Science',
      icon: '🔬',
      content: `Science education in India covers Physics, Chemistry, Biology, Mathematics, Environmental Science, and more. Research institutions like IISC, TIFR, and universities offer undergraduate (3 years) and postgraduate (2 years) programs with strong theoretical and practical components.`
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Courses Available</h3>
      <p>Hello {userName}, which field of study interests you?</p>
      
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

export default Courses;