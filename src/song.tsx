export interface Song {
  title: string;
}

// Step 2: Define the initial state
export const initialSongState: Song = {
  title: '',
};

export const generateSong = (song: Song) => {
  return song;
};
