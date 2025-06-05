export interface AlbumLink {
  service: 'spotify' | 'appleMusic' | 'youtubeMusic' | 'tidal';
  url: string;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  year: number;
  albumArtSrc: string; // Path to publicly served album art, e.g., /img/album/artwork.png
  backgroundSrc: string; // Path to background image, e.g., /src/assets/img/background.png
  links: AlbumLink[]; // Array of links to the album on different services
}
