import { Note } from './note';

const noteNames = [
  'C-',
  'C#',
  'D-',
  'D#',
  'E-',
  'F-',
  'F#',
  'G-',
  'G#',
  'A-',
  'A#',
  'B-',
];

export const scales = {
  major: [0, 2, 4, 5, 7, 9, 11],
  naturalMinor: [0, 2, 3, 5, 7, 8, 10],
  harmonicMinor: [0, 2, 3, 5, 7, 8, 11],
  melodicMinor: [0, 2, 3, 5, 7, 9, 11],
  dorian: [0, 2, 3, 5, 7, 9, 10],
  phrygian: [0, 1, 3, 5, 7, 8, 10],
  lydian: [0, 2, 4, 6, 7, 9, 11],
  mixolydian: [0, 2, 4, 5, 7, 9, 10],
  locrian: [0, 1, 3, 5, 6, 8, 10],
  blues: [0, 3, 5, 6, 7, 10],
  wholeTone: [0, 2, 4, 6, 8, 10],
  pentatonicMajor: [0, 2, 4, 7, 9],
  pentatonicMinor: [0, 3, 5, 7, 10],
  phrygianDominant: [0, 1, 4, 5, 7, 8, 10],
  doubleHarmonic: [0, 1, 4, 5, 7, 8, 11],
  ionian: [0, 2, 4, 5, 7, 9, 11],
  aeolian: [0, 2, 3, 5, 7, 8, 10],
  phrygianMajor: [0, 1, 3, 5, 7, 9, 10],
  lydianMinor: [0, 2, 4, 6, 7, 8, 10],
  mixolydianB6: [0, 2, 4, 5, 7, 8, 10],
};

export const chords = {
  major: [4, 7],
  minor: [3, 7],
  diminished: [3, 6],
  augmented: [4, 8],
  dom7: [4, 7, 10],
  maj7: [4, 7, 11],
  min7: [3, 7, 10],
  sus2: [2, 7],
  sus4: [5, 7],
  power: [7],
  sixth: [4, 7, 9],
  min6: [3, 7, 9],
  ninth: [4, 7, 10, 14],
  eleventh: [4, 7, 10, 14, 17],
  thirteenth: [4, 7, 10, 14, 17, 21],
  altered1: [7, 6, 10, 13],
  altered2: [7, 6, 10, 15],
  altered3: [7, 8, 10, 13],
  altered4: [7, 8, 10, 15],
  quartal: [5, 10, 15],
  quintal: [7, 14, 21],
  cluster: [1, 2, 3, 4, 6],
  addedTone9: [4, 7, 14],
  addedTone11: [4, 7, 11, 17],
  addedTone13: [4, 7, 11, 14, 21],
  neapolitan: [1, 5, 8],
  // polychordalArp: [], // Polychordal arpeggio
  // split: [], // Split chord
  // slash: [], // Slash chord
  // alteredDom: [], // Altered dominant chord
  // polyrhythm: [], // Polyrhythm
  // ostinato: [], // Ostinato
  // secondaryDom: [], // Secondary dominant chord
  // secondaryLeadingTone: [], // Secondary leading-tone chord
  // chromaticMediant: [], // Chromatic mediant chord
  // polyradial: [], // Polyradial chord
  // enharmonic: [], // Enharmonic chord
  // quartalHarmony: [], // Quartal harmony
};

export function generateChord(
  rootNote: Note,
  scale: number[],
  chords: number[]
): Note[] {
  const rootNoteIndex = noteNames.indexOf(rootNote.note);
  const notesInChord = [rootNote];

  for (const chordOffset of chords) {
    const noteIndex = (rootNoteIndex + chordOffset) % scale.length;
    const octaveChange = Math.floor(
      (rootNoteIndex + chordOffset) / scale.length
    );
    const newNoteValue = scale[noteIndex];

    const newNote: Note = new Note(
      rootNote.instrument,
      noteNames[newNoteValue],
      rootNote.octave + octaveChange,
      rootNote.volume
    );
    notesInChord.push(newNote);
  }

  return notesInChord;
}
