import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import profile from './assets/profile.jpg'
import { useState } from "react";

function App() {
  const [descriptionMode, setDescriptionMode] = useState('about');
  const [activeButton, setActiveButton] = useState('about');

  const handleDescriptionModeChange = (mode) => {
    setDescriptionMode(mode);
    setActiveButton(mode);
  };

  return (
    <div className="App">
      <img src={profile} alt="Foto de perfil" className="profile"/>
      <div className="content">
        <MainContent descriptionMode={descriptionMode} />
        <Sidebar activeButton={activeButton} setDescriptionMode={handleDescriptionModeChange} />
      </div>
    </div>
  );
}

export default App;