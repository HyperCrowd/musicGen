import React, { createContext, useContext, useReducer } from 'react';
import { generateSong, Song } from './song';

export const trackerReducer = (
  state: Song,
  action: { type: string } & Song
) => {
  switch (action.type) {
    case 'GENERATE_MOD_DATA':
      return {
        ...state,
        modData: generateSong(),
      };
    default:
      return state;
  }
};
