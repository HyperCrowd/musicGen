import React, { ReactNode, useReducer } from 'react';
import { trackerReducer } from './reducer';
import { trackerContext } from './context';
import { initialSongState } from './song';

interface Props {
  children: ReactNode;
}

export const TrackerProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(trackerReducer, initialSongState);

  // Define any other actions you need

  const startSong = () => {
    dispatch({ type: 'GENERATE_MOD_DATA', title: 'Bob' });
  };

  return (
    <trackerContext.Provider value={state}>{children}</trackerContext.Provider>
  );
};
