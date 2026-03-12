# Rendered Realities

An AI-powered image gallery built with vanilla JavaScript (ES6 modules) and Google Gemini 2.5 Pro for automatic image metadata generation.

**[Live Demo](https://iremstalbrand.github.io/the-fundamentals-submission-group-4/)**

## Features

- **Dual gallery modes** — grid view (20 images/page) and 3D rotating carousel (10 images/page)
- **AI metadata generation** — Gemini 2.5 Pro analyzes images and generates categories, descriptions, and author names
- **Dynamic filtering** — filter images by AI-generated categories
- **Pagination** — page caching, mode-specific page calculations, numbered navigation
- **Lightbox** — full-screen image viewer with commenting
- **Light/dark theme** — toggle with localStorage persistence
- **Responsive** — mobile-first with hamburger menu and touch-optimized carousel

## Tech Stack

- Vanilla JavaScript (ES6 modules)
- Google Gemini 2.5 Pro Vision API
- Vite
- CSS Grid / Flexbox / 3D Transforms

## Getting Started

```bash
git clone https://github.com/iremstalbrand/the-fundamentals-submission-group-4.git
cd the-fundamentals-submission-group-4
npm install
```

Create a `.env` file:

```
VITE_GEMINI_API_KEY=your_key_here
```

```bash
npm run dev
```

## API Note

The external image feed API (`image-feed-api.vercel.app`) is currently unavailable. The app automatically falls back to mock data with placeholder images from [picsum.photos](https://picsum.photos). All features work as expected. If the API comes back online, the app switches to real data automatically.

## Project Structure

```
├── index.html
└── src/
    ├── main.js                # State management & DOM coordination
    ├── api.js                 # API integration with mock data fallback
    ├── pagination.js          # Dual-mode pagination system
    ├── gemini-api.js          # Gemini AI integration
    ├── image-categories.js    # Category filtering
    ├── header-functionality.js
    ├── lightbox.js
    ├── grid-carousel.js       # 3D carousel
    ├── likes-function.js
    └── style.css
```

## Team — The DOMinators

Built as part of The Fundamentals program at [Hyper Island](https://www.hyperisland.com/).

- [Emma Wikström](https://github.com/EmmaWikstrom)
- [Irem Stalbrand](https://github.com/iremstalbrand)
- [Vladislav Zhuravskii](https://github.com/Tratatemium)
- [Raheel Shan](https://github.com/raheel1435)
