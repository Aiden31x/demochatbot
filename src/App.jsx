import React, { useState, useEffect } from 'react';
import ChatBox from './components/ChatBox';
import SIIProgramme from './components/SIIProgramme';
import RegistrationChoiceFilling from './components/RegistrationChoice';
import CostsFees from './components/CostandFess';
import Courses from './components/Courses';
import GloballyAcceptedDegrees from './components/GloballyAcceptedDegrees';
import EnglishLanguageSkills from './components/EnglishLanguageSkills';
import VisaRegulations from './components/VisaRegulations';
import Admissions from './components/Admissions';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('chatbox');
  const [userName, setUserName] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  
  // Function to handle navigation between components
  const handleComponentChange = (componentName, option = '') => {
    setActiveComponent(componentName);
    if (option) {
      setSelectedOption(option);
    }
  };
  
  // Function to handle user name collection from ChatBox
  const handleUserNameCollected = (name) => {
    setUserName(name);
  };
  
  // Function to handle topic selection from ChatBox - ENABLE NAVIGATION TO COMPONENTS
  const handleTopicSelected = (topic) => {
    switch(topic) {
      case 'SII Programme':
        setActiveComponent('sii');
        break;
      case 'Registration & Choice Filling':
        setActiveComponent('registration');
        break;
      case 'Costs & Fees':
        setActiveComponent('costs');
        break;
      case 'Courses':
        setActiveComponent('courses');
        break;
      case 'Globally Accepted Degrees':
        setActiveComponent('degrees');
        break;
      case 'English Language Skills':
        setActiveComponent('english');
        break;
      case 'Visa Regulations':
        setActiveComponent('visa');
        break;
      case 'Admissions':
        setActiveComponent('admissions');
        break;
      default:
        setActiveComponent('chatbox');
    }
  };
  
  // Render the active component
  const renderActiveComponent = () => {
    switch(activeComponent) {
      case 'sii':
        return (
          <SIIProgramme 
            userName={userName}
            onBack={() => handleComponentChange('chatbox')}
            onSelectOption={(option) => setSelectedOption(option)}
          />
        );
      case 'registration':
        return (
          <RegistrationChoiceFilling 
            userName={userName}
            onBack={() => handleComponentChange('chatbox')}
            onSelectOption={(option) => setSelectedOption(option)}
          />
        );
      case 'costs':
        return (
          <CostsFees 
            userName={userName}
            onBack={() => handleComponentChange('chatbox')}
            onSelectOption={(option) => setSelectedOption(option)}
          />
        );
      case 'courses':
        return (
          <Courses 
            userName={userName}
            onBack={() => handleComponentChange('chatbox')}
            onSelectOption={(option) => setSelectedOption(option)}
          />
        );
      case 'degrees':
        return (
          <GloballyAcceptedDegrees 
            userName={userName}
            onBack={() => handleComponentChange('chatbox')}
            onSelectOption={(option) => setSelectedOption(option)}
          />
        );
      case 'english':
        return (
          <EnglishLanguageSkills 
            userName={userName}
            onBack={() => handleComponentChange('chatbox')}
            onSelectOption={(option) => setSelectedOption(option)}
          />
        );
      case 'visa':
        return (
          <VisaRegulations 
            userName={userName}
            onBack={() => handleComponentChange('chatbox')}
            onSelectOption={(option) => setSelectedOption(option)}
          />
        );
      case 'admissions':
        return (
          <Admissions 
            userName={userName}
            onBack={() => handleComponentChange('chatbox')}
            onSelectOption={(option) => setSelectedOption(option)}
          />
        );
      default:
        return (
          <ChatBox 
            onNameCollected={handleUserNameCollected}
            onTopicSelected={handleTopicSelected}
          />
        );
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {renderActiveComponent()}
    </div>
  );
};

export default App;