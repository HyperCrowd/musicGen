export interface Song {
  title: string;
}

// Step 2: Define the initial state
export const initialSongState: Song = {
  title: '',
};

export const generateSong = () => {
  // Generate your random MODTracker data here
  // Replace this with your own logic
  const modData = [
    { id: 1, name: 'MOD1' },
    { id: 2, name: 'MOD2' },
    { id: 3, name: 'MOD3' },
  ];
  return modData;
};
