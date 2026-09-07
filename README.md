# 🎬 Netflix GPT

> **AI-powered movie discovery, built for people who never know what to watch.**

---

## ⚠️ Important — TMDB Access Issue in India

> **If the movies are not loading in India, the problem may be your ISP and not the application.**

TMDB has had known connectivity/blocking issues with some Indian ISPs, including reports involving Jio, Airtel, BSNL and others. TMDB staff have specifically acknowledged ISP-level access problems in India.

### 💻 On Laptop / PC

Try changing your DNS server to Google's public DNS:

```text
Preferred DNS:
8.8.8.8

Alternate DNS:
8.8.4.4
```

### 📱 On Android

Go to:

```text
Settings
→ Network & Internet
→ Private DNS
→ Private DNS provider hostname
```

Use:

```text
dns.google
```

> **Note:** `8.8.8.8` is an IP address, while Android's **Private DNS** setting generally expects a hostname such as `dns.google`.

After changing DNS, restart the browser and try the application again.

---

## 🚀 Live Demo

### 👉 [Open Netflix GPT](https://netfliixgpt.vercel.app/)

**Please give it a try and let me know what you think. 🍿**

---

## ⭐ Like the Project?

If you enjoyed the project, **please consider giving the repository a ⭐ Star**.

It genuinely helps the project get more visibility and keeps the motivation alive. ❤️

### ⭐ Star this repository

👉 [**Give Netflix GPT a Star**](https://github.com/AmitFrontEnd/Netflix-GPT)

---

## ✨ What Makes Netflix GPT Different?

Netflix GPT isn't just another movie listing application.

It combines **AI + real-time movie data + personalization + modern UI** into one cinematic experience.

### 🤖 AI Movie Search

Describe the kind of movie you're looking for in natural language.

Examples:

* `Movies like Interstellar but more emotional`
* `Funny movies to watch with friends`
* `Dark psychological thrillers`
* `Best Indian movies about college life`

The AI generates movie recommendations based on your query.

### 🎥 Netflix-Inspired Experience

The application provides a cinematic interface with:

* Featured movie trailer
* Movie information
* Horizontal movie carousels
* Interactive movie cards
* Movie detail modal
* Responsive design
* Loading and error states

### 🌍 Multi-Language Interface

The interface supports multiple languages:

**English · हिन्दी · Español · Français · Deutsch · Italiano · Português · Русский · 中文 · 日本語 · 한국어 · العربية · বাংলা · मराठी · తెలుగు · தமிழ் · ગુજરાતી · ਪੰਜਾਬੀ · اردو**

### 🔐 Firebase Authentication

Users can:

* Create an account
* Sign in
* Sign out
* Maintain authentication state across refreshes

### 🎞️ Movie Discovery

Movie information comes from **TMDB**, including:

* Now Playing
* Popular
* Top Rated
* Movie posters
* Ratings
* Release dates
* Overview
* Trailers
* Movie metadata

---

## 🧠 How AI Search Works

The AI recommendation flow is built as a simple pipeline:

```text
User Query
    ↓
Gemini AI
    ↓
20 Movie Recommendations
    ↓
Movie Titles
    ↓
TMDB Search API
    ↓
Movie Details
    ↓
Movie Cards
```

Example:

```text
"I want mind-bending sci-fi movies"
                ↓
             Gemini
                ↓
 Inception, Interstellar, Tenet...
                ↓
              TMDB
                ↓
 Posters + Ratings + Metadata
                ↓
          Netflix GPT UI
```

This separates **AI recommendation generation** from **movie data retrieval**, allowing Gemini to understand the user's intent while TMDB provides structured movie information.

---

## 🛠️ Tech Stack

### Frontend

* React
* React Router
* Tailwind CSS
* Vite

### State Management

* Redux Toolkit
* React Redux

### Authentication

* Firebase Authentication

### APIs

* Google Gemini API
* TMDB API
* YouTube trailer embeds

### Development

* JavaScript
* ESLint
* Git & GitHub

---

## 🏗️ Architecture

The application follows a modular React architecture using reusable components and custom hooks.

```text
src/
│
├── components/
│   ├── Header
│   ├── MainContainer
│   ├── BrowsePageLoading
│   │
│   ├── MovieComponent/
│   │   ├── MovieCard
│   │   ├── MovieList
│   │   ├── MovieModal
│   │   ├── VideoInfo
│   │   ├── VideoPlayer
│   │   └── ...
│   │
│   └── GPTComponets/
│       ├── GPTSearch
│       ├── GPTSearchPage
│       ├── GPTSearchLoading
│       └── GPTRateError
│
├── hooks/
│   ├── useNowPlayingMovies
│   ├── usePopularMovies
│   ├── useTopRatedMovies
│   ├── useTrailer
│   ├── useGptSearchMovies
│   ├── useGetMoviesResults
│   ├── useLanguage
│   └── useMovieListDetails
│
├── utils/
│   ├── appStore
│   ├── firebase
│   ├── constants
│   ├── languages
│   ├── movieSlice
│   ├── userSlice
│   ├── userConfigSlice
│   ├── toggleButtonSlice
│   └── validation
│
└── pages/
    ├── Login
    └── Browse
```

---

## 🔄 Authentication Flow

Firebase manages authentication while Redux keeps application state synchronized.

```text
User Login / Signup
        ↓
Firebase Authentication
        ↓
onAuthStateChanged()
        ↓
Redux Store
        ↓
Authenticated User
        ↓
Browse Page
```

Firebase restores the authentication state on refresh, allowing the application to keep the user session synchronized with Redux.

---

## 🎨 UI & UX

The UI is designed around a dark cinematic aesthetic inspired by modern streaming platforms.

### Design principles

* Dark cinematic backgrounds
* Netflix-style red accents
* Glassmorphism
* Responsive layouts
* Smooth transitions
* Hover interactions
* Skeleton/loading states
* Mobile-friendly navigation

Movie cards provide interactive feedback with:

* Poster zoom
* Rating badge
* Play indicator
* Smooth transitions

---

## 🚨 Error Handling

Netflix GPT also handles API failures gracefully.

For example, when Gemini reaches its rate limit:

```text
429 · Rate limit exceeded
```

the application shows a dedicated error screen with a retry action instead of leaving the user with a broken interface.

---

## ⚡ Performance Considerations

The application uses:

* Reusable custom hooks
* Redux state caching
* Conditional API requests
* Horizontal scrolling movie lists
* Responsive Tailwind breakpoints
* Loading states during API operations

---

## 🎯 Core User Journey

```text
              Login
                ↓
              Browse
                ↓
        ┌───────┴────────┐
        ↓                ↓
     Explore          GPT Search
        ↓                ↓
  Movie Categories   AI Recommendations
        ↓                ↓
    Movie Cards       TMDB Search
        └───────┬────────┘
                ↓
          Movie Details
                ↓
             Trailer
```

---

## 💡 Try These AI Queries

```text
Movies like Interstellar

Best psychological thrillers

Movies that will make me cry

Funny movies for a weekend

Best time travel movies

Underrated Indian movies

Movies like The Dark Knight

Romantic movies with unexpected endings
```

---

## 🔥 Highlights

> 🤖 **AI-powered movie discovery**

> 🎬 **Netflix-inspired cinematic UI**

> 🔐 **Firebase authentication**

> 🎞️ **TMDB movie ecosystem**

> ▶️ **YouTube trailer integration**

> 🌍 **20-language interface**

> ⚛️ **Modern React architecture**

> 🧠 **Redux Toolkit state management**

> 📱 **Responsive design**

> 🚨 **Custom loading & error experiences**

---

## ❤️ Built With Passion

This project was built to explore what happens when **AI meets modern frontend development**.

Not just a movie clone.

Not just an API project.

A complete movie discovery experience where you can **describe what you feel like watching — and let AI do the searching.**

---

# 🎬 Netflix GPT

### **Search less. Discover more.**

⭐ **Star the repository if you enjoyed it.**

🍿 **And go find your next movie.**
