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

export const progressions = {
  fifties1: 'I-VI-IV-V',
  fifties2: 'I-vi-IV-V',
  andalusianCadence: 'vi-V-IV-III',
  axisOfAwesome: 'I-V-vi-IV',
  backdoor: 'I-bVII-bVI-V',
  blues: 'I-IV-I-V',
  bluesRock: 'I-bIII-bVII-IV',
  chromaticMediant: 'I-bIII-bVI',
  circleOfFifths: 'I-IV-vii-iii-vi-ii-V-I',
  coltraneChanges: 'I-bIII-bVI-II-V-I',
  dooWop: 'I-III-IV-V',
  flamenco: 'i-bVII-bVI-V',
  folkCountry: 'I-IV-V-IV',
  hardRockMetal: 'I-bVI-bVII-I',
  jazz: 'ii-V-I',
  jazzBlues: 'I-ii-V-I',
  jazzPopRock: 'I-IV-ii-V',
  ladyMadonna: 'I-bVII-IV-bVI-V',
  major: 'I-IV-V',
  minor: 'i-iv-v',
  modalInterchange: 'I-bVI-bVII-IV',
  montgomeryWard: 'I-III7-IV-iv',
  pachelbelsCanon: 'vi-IV-I-V',
  pop: 'I-V-vi-iii-IV-I-IV-V',
  popRock3: 'I-iii-IV-V',
  popRock1: 'I-IV-vi-V',
  popRock2: 'I-VII-IV',
  ragtime: 'I-I7-IV-IV7-I-V7-I',
  rhythmAndBlues: 'I-IV-V-I',
  rhythmChanges: 'I-VI-II-V',
  rock: 'I-bVII-IV',
  sensitiveFemale: 'vi-IV-I-V',
  surfRock: 'I-II-IV-V',
  turnaround: 'I-VI-ii-V',
  walkdown: 'I-VI-IV-III',
};

const romansOnly = /[^vi]*/gi;
const romanFive = /v/i;

/**
 *
 */
export function getProgressionChords(
  notation: string,
  rootNote: string,
  scale: number[],
  octave: number,
  instrument: number
) {
  const result: Note[][] = [];
  const rootNoteOffset = noteNames.indexOf(rootNote);
  const notes = scale.map(
    (offset) => noteNames[(offset + rootNoteOffset) % noteNames.length]
  );

  const progression = notation.split('-').map((notation) => {
    const result = {
      flatten: notation[0] === 'b',
      dominant: notation[notation.length - 1] === '7',
      mode: '',
      notesIndex: 0,
    };

    const symbols = notation.replace(romansOnly, '').split(romanFive);

    for (const symbol of symbols) {
      if (symbol === '' && result.notesIndex < 5) {
        result.notesIndex += 5;
        continue;
      } else {
        result.notesIndex += symbol.length;
      }

      if (symbol[0] === 'i') {
        result.mode = 'minor';
      } else {
        result.mode = 'major';
      }
    }

    result.notesIndex -= 1;
    return result;
  });
  console.log(notes);
  for (const details of progression) {
    console.log(details);
    const flattenOffset = details.flatten ? 1 : 0;
    const noteName =
      flattenOffset === 0
        ? notes[details.notesIndex]
        : noteNames[noteNames.indexOf(notes[details.notesIndex]) - 1];

    const octaveChange = Math.floor(
      (details.notesIndex - flattenOffset) / notes.length
    );

    const note = new Note(instrument, noteName, octave + octaveChange);
    const chord = chords[details.mode];
    result.push(generateChord(note, chord));
  }

  console.log(result.map((notes) => notes.map((note) => note.note)));
  return result;
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
