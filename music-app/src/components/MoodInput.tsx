import React, { useState } from 'react';
import '../styles/MoodInput.css';

interface MoodInputProps {
  onSubmit: (mood: string) => void;
  isLoading: boolean;
}

const MoodInput: React.FC<MoodInputProps> = ({ onSubmit, isLoading }) => {
  const [mood, setMood] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mood.trim() && !isLoading) {
      onSubmit(mood);
    }
  };

  const placeholders = [
    "I'm feeling energetic and want to workout",
    "Need some calm music for studying",
    "I feel nostalgic today",
    "Music for a rainy day",
    "Something upbeat for a road trip"
  ];

  const randomPlaceholder = placeholders[Math.floor(Math.random() * placeholders.length)];

  return (
    <div className="mood-input-container">
      <h2>How are you feeling today?</h2>
      <form onSubmit={handleSubmit} className="mood-form">
        <input
          type="text"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder={randomPlaceholder}
          disabled={isLoading}
          className="mood-text-input"
        />
        <button 
          type="submit" 
          disabled={isLoading || !mood.trim()} 
          className="submit-button"
        >
          Get Recommendations
        </button>
      </form>
      <div className="examples">
        <p>Try: "I need focus music" • "Something for a party" • "Feeling melancholic"</p>
      </div>
    </div>
  );
};

export default MoodInput;