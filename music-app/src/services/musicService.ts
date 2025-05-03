import { Recommendation, Song } from '../types';

// Mock function while we don't have a real AI backend
// In a real app, this would make an API call to a backend service
export const getMusicRecommendations = async (mood: string): Promise<Recommendation> => {
  // Simulate API call with a delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // This is where we would normally call the backend API
  // For now, we'll return mock recommendations based on the mood
  return generateMockRecommendations(mood);
};

// Helper function to simulate AI-based recommendations
function generateMockRecommendations(mood: string): Recommendation {
  const lowerMood = mood.toLowerCase();
  
  // Mock database of mood-based recommendations
  const moodMap: Record<string, Partial<Recommendation>> = {
    // Happy/Energetic moods
    'happy': {
      genres: ['Pop', 'Dance', 'Indie Pop'],
      artists: ['Pharrell Williams', 'Daft Punk', 'Lizzo'],
      songs: [
        { title: 'Happy', artist: 'Pharrell Williams' },
        { title: 'Good as Hell', artist: 'Lizzo' },
        { title: 'Get Lucky', artist: 'Daft Punk ft. Pharrell Williams' }
      ]
    },
    'energetic': {
      genres: ['EDM', 'Dance', 'Hip-Hop'],
      artists: ['The Chainsmokers', 'Calvin Harris', 'David Guetta'],
      songs: [
        { title: 'Don\'t You Worry Child', artist: 'Swedish House Mafia' },
        { title: 'Titanium', artist: 'David Guetta ft. Sia' },
        { title: 'Levels', artist: 'Avicii' }
      ]
    },
    
    // Calm/Relaxed moods
    'relaxed': {
      genres: ['Ambient', 'Chillout', 'Lo-Fi'],
      artists: ['Brian Eno', 'Bonobo', 'Tycho'],
      songs: [
        { title: 'An Ending (Ascent)', artist: 'Brian Eno' },
        { title: 'Cirrus', artist: 'Bonobo' },
        { title: 'Awake', artist: 'Tycho' }
      ]
    },
    'chill': {
      genres: ['Lo-Fi Hip Hop', 'Chillwave', 'Downtempo'],
      artists: ['Nujabes', 'J Dilla', 'Tame Impala'],
      songs: [
        { title: 'Feather', artist: 'Nujabes' },
        { title: 'The Less I Know The Better', artist: 'Tame Impala' },
        { title: 'Don\'t Cry', artist: 'J Dilla' }
      ]
    },
    
    // Sad/Melancholic moods
    'sad': {
      genres: ['Indie Folk', 'Alternative', 'Piano'],
      artists: ['Bon Iver', 'Sufjan Stevens', 'Billie Eilish'],
      songs: [
        { title: 'Skinny Love', artist: 'Bon Iver' },
        { title: 'Fourth of July', artist: 'Sufjan Stevens' },
        { title: 'when the party\'s over', artist: 'Billie Eilish' }
      ]
    },
    'melancholic': {
      genres: ['Post-Rock', 'Ambient', 'Contemporary Classical'],
      artists: ['Sigur Rós', 'Max Richter', 'Ólafur Arnalds'],
      songs: [
        { title: 'Untitled #3 (Samskeyti)', artist: 'Sigur Rós' },
        { title: 'On the Nature of Daylight', artist: 'Max Richter' },
        { title: 'Near Light', artist: 'Ólafur Arnalds' }
      ]
    },
    
    // Focus/Study moods
    'focus': {
      genres: ['Classical', 'Ambient', 'Electronic'],
      artists: ['Hans Zimmer', 'Max Richter', 'Brian Eno'],
      songs: [
        { title: 'Time', artist: 'Hans Zimmer' },
        { title: 'On the Nature of Daylight', artist: 'Max Richter' },
        { title: 'Reflection', artist: 'Brian Eno' }
      ]
    },
    'study': {
      genres: ['Classical Piano', 'Lo-Fi Hip Hop', 'Ambient'],
      artists: ['Ludovico Einaudi', 'Chilled Cow', 'Nils Frahm'],
      songs: [
        { title: 'Nuvole Bianche', artist: 'Ludovico Einaudi' },
        { title: 'Spaces', artist: 'Nils Frahm' },
        { title: 'Colors', artist: 'Chilled Cow' }
      ]
    },
    
    // Workout/Exercise moods
    'workout': {
      genres: ['EDM', 'Hip-Hop', 'Rock'],
      artists: ['Eminem', 'Kanye West', 'Foo Fighters'],
      songs: [
        { title: 'Till I Collapse', artist: 'Eminem' },
        { title: 'Stronger', artist: 'Kanye West' },
        { title: 'All My Life', artist: 'Foo Fighters' }
      ]
    },
    'run': {
      genres: ['Dance', 'EDM', 'Pop'],
      artists: ['Calvin Harris', 'Avicii', 'The Weeknd'],
      songs: [
        { title: 'Summer', artist: 'Calvin Harris' },
        { title: 'Wake Me Up', artist: 'Avicii' },
        { title: 'Blinding Lights', artist: 'The Weeknd' }
      ]
    }
  };
  
  // Find the best matching mood by checking if any of our mood keywords are in the input
  let bestMatch: string | null = null;
  let bestMatchCount = 0;
  
  for (const key of Object.keys(moodMap)) {
    if (lowerMood.includes(key) && key.length > bestMatchCount) {
      bestMatch = key;
      bestMatchCount = key.length;
    }
  }
  
  // Default to 'happy' if no match is found
  const matchedMood = bestMatch || 'happy';
  const recommendations = moodMap[matchedMood];
  
  // Add Spotify links (in a real app, these would be actual links)
  const songs = recommendations.songs?.map(song => ({
    ...song,
    link: `https://open.spotify.com/search/${encodeURIComponent(song.title + ' ' + song.artist)}`
  })) || [];
  
  return {
    genres: recommendations.genres || [],
    artists: recommendations.artists || [],
    songs,
    mood: matchedMood
  };
}