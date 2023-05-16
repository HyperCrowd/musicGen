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

interface Intervals {
  [key: string]: number[];
}

export const scales: Intervals = {
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

export const chords: Intervals = {
  major: [0, 4, 7],
  minor: [0, 3, 7],
  diminished: [0, 3, 6],
  augmented: [0, 4, 8],
  sus2: [0, 2, 7],
  sus4: [0, 5, 7],
  major6: [0, 4, 7, 9],
  minor6: [0, 3, 7, 9],
  dominant7: [0, 4, 7, 10],
  major7: [0, 4, 7, 11],
  minor7: [0, 3, 7, 10],
  diminished7: [0, 3, 6, 9],
  halfDiminished7: [0, 3, 6, 10],
  augmented7: [0, 4, 8, 10],
  sus2sus4: [0, 2, 5, 7],
  major9: [0, 4, 7, 11, 14],
  minor9: [0, 3, 7, 10, 14],
  dominant9: [0, 4, 7, 10, 14],
  major11: [0, 4, 7, 11, 14, 17],
  minor11: [0, 3, 7, 10, 14, 17],
  dominant11: [0, 4, 7, 10, 14, 17],
  major13: [0, 4, 7, 11, 14, 17, 21],
  minor13: [0, 3, 7, 10, 14, 17, 21],
  dominant13: [0, 4, 7, 10, 14, 17, 21],
  sus2add4: [0, 2, 5, 7],
  sus2add9: [0, 2, 7, 14],
  sus4add9: [0, 5, 7, 14],
  sus2sus4add9: [0, 2, 5, 7, 14],
  dominant6: [0, 4, 7, 9],
  minormajor6: [0, 3, 7, 9],
  add6: [0, 4, 7, 9],
  minormajor7: [0, 3, 7, 11],
  power: [0, 7],
  altered1: [0, 7, 6, 10, 13],
  altered2: [0, 7, 6, 10, 15],
  altered3: [0, 7, 8, 10, 13],
  altered4: [0, 7, 8, 10, 15],
  quartal: [0, 5, 10, 15],
  quintal: [0, 7, 14, 21],
  cluster: [0, 1, 2, 3, 4, 6],
  addedTone9: [0, 4, 7, 14],
  addedTone11: [0, 4, 7, 11, 17],
  addedTone13: [0, 4, 7, 11, 14, 21],
  neapolitan: [0, 1, 5, 8],
};

export const chordNames = Object.keys(chords);

export function generateProgression(
  rootNode: Note,
  scale: number[],
  chord: number[]
) {}

/**
 *
 */
export function getChordName(
  rootNote: number,
  scale: number[],
  chordType: string
): string {
  const chordIntervals = chords[chordType];
  if (!chordIntervals) {
    throw new Error(`Invalid chord type: ${chordType}`);
  }

  const chordNotes = chordIntervals.map(
    (interval) => (rootNote + interval) % 12
  );
  const chordName = chordNotes.map((note) => noteNames[note]).join('');
  return chordName;
}

/**
 *
 */
export function generateChord(rootNote: Note, chords: number[]): Note[] {
  const rootNoteIndex = noteNames.indexOf(rootNote.note);
  const notesInChord = [];

  for (const chordOffset of chords) {
    const noteIndex = (rootNoteIndex + chordOffset) % noteNames.length;
    const octaveChange = Math.floor(
      (rootNoteIndex + chordOffset) / noteNames.length
    );
    const newNoteValue = noteNames[noteIndex];

    const newNote: Note = new Note(
      rootNote.instrument,
      newNoteValue,
      rootNote.octave + octaveChange,
      rootNote.volume
    );
    notesInChord.push(newNote);
  }

  return notesInChord;
}
