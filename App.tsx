import React from 'react';
import { useTracker } from './src/context';
import {
  chords,
  generateChord,
  getProgressionChords,
  scales,
} from './src/music';
import { Note } from './src/note';
import './style.css';

// console.log(scales.major);
// console.log(chords.major);
// console.log(generateChord(new Note(0, 'G-', 3), chords.major));
console.log(getProgressionChords('i-bVII-bVI-V7', []));

export default function App() {
  const { title } = useTracker();

  return (
    <div>
      <button>Generate MOD Data</button>
      <div>{title}</div>
    </div>
  );
}
