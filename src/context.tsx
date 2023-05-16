import { createContext, useContext } from 'react';
import { initialSongState } from './song';

export const trackerContext = createContext(initialSongState);

export const useTracker = () => useContext(trackerContext);
