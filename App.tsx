import React from 'react';
import { useTracker } from './src/context';
import './style.css';

export default function App() {
  const { title } = useTracker();

  return (
    <div>
      <button>Generate MOD Data</button>
      <div>{title}</div>
    </div>
  );
}
