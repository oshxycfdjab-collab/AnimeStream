
export interface Anime {
  id: string;
  title: string;
  image: string;
  cover?: string; // Large hero image
  rating: number;
  year: number;
  type: 'TV Series' | 'Movie' | 'OVA' | 'ONA';
  genres: string[];
  episodes: number;
  episodesAired?: number; // New field
  status: 'Ongoing' | 'Completed' | 'Upcoming';
  description: string;
  studio: string;
}

export interface Episode {
  id: string;
  number: number;
  title: string;
  duration: string;
  thumbnail: string;
  isFiller?: boolean;
}

export interface User {
  name: string;
  email: string; // Required for cloud auth
  avatar: string;
  isPremium: boolean;
  watchedTime: string;
  episodesWatched: number;
}

export interface ScheduleItem {
  day: string;
  animes: { id: string; time: string; title: string }[];
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  html_body?: string; // Full content
}

export interface Comment {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  text: string;
  date: string;
}
