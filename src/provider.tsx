import React, { createContext, ReactNode, useContext, useReducer } from 'react';
import { trackerReducer } from './reducer';
import { trackerContext } from './context';
import { initialSongState } from './song';

interface Props {
  children: ReactNode[];
}

const TrackerProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(trackerReducer, initialSongState);

  // Define any other actions you need

  const startSong = () => {
    dispatch({ type: 'GENERATE_MOD_DATA', title: 'Bob' });
  };

  const trackerContextValue = {
    tracker: state,
    startSong,
  };

  return (
    <trackerContext.Provider value={trackerContextValue}>
      {children}
    </trackerContext.Provider>
  );
};
