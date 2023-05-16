import { Note } from './note';

export interface Track {
  name: string;
  notes: Note[];
}

/**
 *
 */
export const generateTrack = (
  instrument = 0,
  note = 'C',
  octave = 3,
  volume = 64
) => {
  const result: Note[] = [];
  for (let i = 0; i < 64; i++) {
    result.push({
      effect: '',
      effectValue: '',
      active: false,
      index: i,
      instrument,
      note,
      octave,
      volume,
    });
  }
  return result;
};
