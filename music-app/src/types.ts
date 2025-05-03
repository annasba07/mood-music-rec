export interface Song {
  title: string;
  artist: string;
  link?: string;
}

export interface Recommendation {
  genres: string[];
  artists: string[];
  songs: Song[];
  mood: string;
}