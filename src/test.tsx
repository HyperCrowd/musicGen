import { scales, getProgressionChords } from './music';

/**
 *
 */
function assert(
  a: string,
  b: string,
  x: number,
  y: number,
  progression: string
) {
  if (a !== b) {
    throw new Error(`${progression}: Chord ${a} !== Test ${b} @ ${x}/${y}`);
  }
}

/**
 *
 */
function test(
  progression: string,
  note: string,
  scale: number[],
  octave: number,
  instrument: number,
  test: string[][]
) {
  const chords = getProgressionChords(
    progression,
    note,
    scale,
    octave,
    instrument
  );

  for (let i = 0; i < test.length; i++) {
    for (let j = 0; j < test[i].length; j++) {
      assert(chords[i][j].note, test[i][j], i, j, progression);
    }
  }
}

/**
 *
 */
export default function validate() {
  test('i-bVII-bVI-V7', 'A-', scales.melodicMinor, 3, 1, [
    ['A-', 'C-', 'E-'],
    ['G-', 'B-', 'D-'],
    ['F-', 'A-', 'C-'],
    ['E-', 'G#', 'B-', 'D-'],
  ]);

  test('I-VI-IV-V', 'B-', scales.major, 3, 1, [
    ['B-', 'D#', 'F#'],
    ['G#', 'B-', 'D#'],
    ['E-', 'G#', 'B-'],
    ['F#-', 'A#', 'C#'],
  ]);
}

/*
B- D# F#
G# B- D#
E- G# B-
F# A# C#
*/
