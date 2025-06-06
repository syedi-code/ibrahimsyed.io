# Website

## SUPERCOMPLEX

Exercise in mobile-first design with Tailwind v4.

## Features
- Vertical snap-scroll for seamless navigation
- Entry animations powered by `@vueuse/motion`
- Responsive layouts for desktop and mobile
- Easily extendable album data via TypeScript interfaces

## Installation
1. Install dependencies:
   ```powershell
   npm install
   ```
2. Start the development server:
   ```powershell
   npm run dev
   ```

## Usage
- Open the local URL displayed by the dev server.
- Scroll through the header and album sections.
- Click on the streaming icons to open the album in your preferred service.

## Project Structure
```text
src/
├── App.vue           # Root component with snap-scroll setup
├── main.ts           # App entry point
├── types.ts          # TypeScript types for albums and links
├── components/       # Reusable UI components
│   ├── Header.vue         # Animated header
│   ├── AlbumList.vue      # Scroll container for albums
│   ├── Album.vue          # Individual album card with embeds
│   └── LinkContainer.vue  # Streaming service links
└── assets/           # Images and SVG assets
```

## Technologies
- Vue 3 (Composition API)
- TypeScript
- Vite
- Tailwind CSS
- @vueuse/motion

## Which DOOMBOT?
The socialeating.studio public mirror is maintained by `doombot-v1`.