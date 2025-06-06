import React, { useState, useEffect } from 'react';
import './HelloOrion.css';

const translations = {
  en: "Hello, Orion!",
  pt: "Olá, Orion!",
  es: "¡Hola, Orion!",
  fr: "Bonjour, Orion!",
  de: "Hallo, Orion!",
  it: "Ciao, Orion!",
  ja: "こんにちは、オリオン！",
  zh: "你好，猎户座！",
};

export default function HelloOrion() {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('light');

  // Aplica a classe do tema ao body
  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  // Alterna entre os temas
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">{translations[language]}</h1>

        <div className="select-container">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="language-select"
          >
            <option value="en">🇬🇧 English</option>
            <option value="pt">🇵🇹 Português</option>
            <option value="es">🇪🇸 Español</option>
            <option value="fr">🇫🇷 Français</option>
            <option value="de">🇩🇪 Deutsch</option>
            <option value="it">🇮🇹 Italiano</option>
            <option value="ja">🇯🇵 日本語</option>
            <option value="zh">🇨🇳 中文</option>
          </select>

          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? 'Dark' : 'Light'} theme 
          </button>
        </div>
      </div>
    </div>
  );
}
