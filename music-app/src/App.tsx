import React, { useState } from 'react';
import MoodInput from './components/MoodInput';
import MusicRecommendations from './components/MusicRecommendations';
import { getMusicRecommendations } from './services/musicService';
import { Recommendation } from './types';
import Header from './components/Header';
import './styles/App.css';

const App: React.FC = () => {
  const [recommendations, setRecommendations] = useState<Recommendation | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleMoodSubmit = async (mood: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getMusicRecommendations(mood);
      setRecommendations(data);
    } catch (err) {
      setError('Failed to get recommendations. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Header />
      <main>
        <MoodInput onSubmit={handleMoodSubmit} isLoading={loading} />
        
        {error && <div className="error-message">{error}</div>}
        
        {recommendations && !loading && (
          <MusicRecommendations recommendations={recommendations} />
        )}
        
        {loading && (
          <div className="loading">
            <div className="loading-animation">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <p>Finding the perfect music for your mood...</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;