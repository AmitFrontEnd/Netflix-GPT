export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500"

export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY

export const AVAILABLE_LANGUAGES = [
  {
    identifier: 'english',
    language: 'English'
  },
  {
    identifier: 'hindi',
    language: 'हिन्दी'
  },
  {
    identifier: 'spanish',
    language: 'Español'
  },
  {
    identifier: 'french',
    language: 'Français'
  },
  {
    identifier: 'german',
    language: 'Deutsch'
  },
  {
    identifier: 'italian',
    language: 'Italiano'
  },
  {
    identifier: 'portuguese',
    language: 'Português'
  },
  {
    identifier: 'russian',
    language: 'Русский'
  },
  {
    identifier: 'chinese',
    language: '中文'
  },
  {
    identifier: 'japanese',
    language: '日本語'
  },
  {
    identifier: 'korean',
    language: '한국어'
  },
  {
    identifier: 'arabic',
    language: 'العربية'
  },
  {
    identifier: 'bengali',
    language: 'বাংলা'
  },
  {
    identifier: 'marathi',
    language: 'मराठी'
  },
  {
    identifier: 'telugu',
    language: 'తెలుగు'
  },
  {
    identifier: 'tamil',
    language: 'தமிழ்'
  },
  {
    identifier: 'gujarati',
    language: 'ગુજરાતી'
  },
  {
    identifier: 'punjabi',
    language: 'ਪੰਜਾਬੀ'
  },
  {
    identifier: 'urdu',
    language: 'اردو'
  }
];