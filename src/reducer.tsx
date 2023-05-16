import { generateSong, initialSongState, Song } from './song';

export const trackerReducer = (
  state: Song,
  action: { type: string } & Song
) => {
  switch (action.type) {
    case 'GENERATE_MOD_DATA':
      return {
        ...state,
        modData: generateSong(state),
      };
    default:
      return state;
  }
};
