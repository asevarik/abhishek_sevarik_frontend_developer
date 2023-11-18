import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import { useState } from 'react';
import { ThemeProvider, randomTheme } from './context/ThemeProvider';

function App() {
  const [themeChange,setThemeChange] = useState('dark');
  const handleThemeChange = () => {
    const newTheme = randomTheme()
    console.log(newTheme);
    setThemeChange(newTheme);
  }

  return (
    <ThemeProvider.Provider value={{themeChange,handleThemeChange}}>
    <LandingPage/>
    </ThemeProvider.Provider>
  );
}

export default App;
