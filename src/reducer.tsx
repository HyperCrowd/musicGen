import { Song } from './song';

export const trackerReducer = (
  state: Song,
  action: { type: string } & Song
) => {
  switch (action.type) {
    case 'GENERATE_MOD_DATA':
      return {
        ...state,
      };
    default:
      return state;
  }
};
