import React from 'react';
import { useTracker } from './src/context';
import {
  chords,
  generateChord,
  getProgressionChords,
  scales,
} from './src/music';
import { Note } from './src/note';
import validate from './src/test';
import './style.css';

validate();

export default function App() {
  const { title } = useTracker();

  return (
    <div>
      <button>Generate MOD Data</button>
      <div>{title}</div>
    </div>
  );
}
