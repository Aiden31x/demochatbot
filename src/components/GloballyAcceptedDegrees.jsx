import React from 'react';

const GloballyAcceptedDegrees = ({ userName, onBack, onSelectOption }) => {
  const handleOptionSelect = (option) => {
    if (option === 'Back to Main Menu') {
      onBack();
    } else {
      onSelectOption(option);
    }
  };

  const options = [
    {
      id: 'recognition',
      title: 'Recognition Info',
      icon: '🌐',
      content: `Degrees from accredited Indian institutions are recognized worldwide. The Association of Indian Universities (AIU) ensures equivalence of Indian degrees with foreign degrees. Many Indian universities have collaborations with international institutions, further enhancing the global acceptance of their degrees.`
    },
    {
      id: 'rankings',
      title: 'University Rankings',
      icon: '📈',
      content: `Several Indian institutions consistently rank high in global university rankings like QS World University Rankings and Times Higher Education World University Rankings. IITs, IISc, JNU, and Delhi University are among the top-ranked Indian institutions recognized globally for their academic excellence.`
    },
    {
      id: 'success',
      title: 'Success Stories',
      icon: '🌟',
      content: `Graduates from Indian institutions have achieved remarkable success globally. They occupy leadership positions in multinational companies, research organizations, academic institutions, and international organizations across the world. Alumni networks of Indian institutions are strong and widespread globally.`
    },
    {
      id: 'accreditation',
      title: 'Accreditation',
      icon: '✅',
      content: `Indian institutions are accredited by national bodies like NAAC (National Assessment and Accreditation Council) and NBA (National Board of Accreditation). Many programs are also accredited by international bodies, ensuring they meet global standards. The UGC (University Grants Commission) regulates and maintains the standard of higher education in India.`
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Globally Accepted Degrees</h3>
      <p>Hello {userName}, what would you like to know about the global recognition of Indian degrees?</p>
      
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

export default GloballyAcceptedDegrees;