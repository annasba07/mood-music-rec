import React from 'react';
import { Recommendation } from '../types';
import '../styles/MusicRecommendations.css';

interface MusicRecommendationsProps {
  recommendations: Recommendation;
}

const MusicRecommendations: React.FC<MusicRecommendationsProps> = ({ recommendations }) => {
  return (
    <div className="recommendations-container">
      <div className="mood-summary">
        <h2>Music for when you're feeling: <span>{recommendations.mood}</span></h2>
      </div>

      <div className="recommendation-sections">
        <div className="recommendation-section genres">
          <h3>Genres</h3>
          <div className="tags">
            {recommendations.genres.map((genre, index) => (
              <span key={index} className="tag">{genre}</span>
            ))}
          </div>
        </div>

        <div className="recommendation-section artists">
          <h3>Artists</h3>
          <div className="tags">
            {recommendations.artists.map((artist, index) => (
              <span key={index} className="tag">{artist}</span>
            ))}
          </div>
        </div>

        <div className="recommendation-section songs">
          <h3>Songs</h3>
          <ul className="song-list">
            {recommendations.songs.map((song, index) => (
              <li key={index} className="song-item">
                <div className="song-info">
                  <span className="song-number">{index + 1}</span>
                  <div className="song-details">
                    <span className="song-title">{song.title}</span>
                    <span className="song-artist">{song.artist}</span>
                  </div>
                </div>
                {song.link && (
                  <a 
                    href={song.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="song-link"
                  >
                    Listen
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MusicRecommendations;