import { generateTrack, Track } from './track';

export interface Song {
  title: string;
  tracks: Track[];
}

// Step 2: Define the initial state
export const initialSongState: Song = {
  title: '',
  tracks: [
    {
      name: 'Kick',
      notes: generateTrack(0),
    },
    {
      name: 'Closed Hats',
      notes: generateTrack(1),
    },
    {
      name: 'Open Hats',
      notes: generateTrack(2),
    },
    {
      name: 'Snare1',
      notes: generateTrack(3),
    },
    {
      name: 'Snare2',
      notes: generateTrack(4),
    },
    {
      name: 'Snare3',
      notes: generateTrack(5),
    },
    {
      name: 'Bass',
      notes: generateTrack(6),
    },
    {
      name: 'Lead1',
      notes: generateTrack(7),
    },
    {
      name: 'Lead2',
      notes: generateTrack(8),
    },
    {
      name: 'Pad1',
      notes: generateTrack(9),
    },
    {
      name: 'Pad2',
      notes: generateTrack(10),
    },
    {
      name: 'SFX1',
      notes: generateTrack(11),
    },
    {
      name: 'SFX2',
      notes: generateTrack(12),
    },
  ],
};

export const generateSong = (song: Song) => {
  return song;
};
