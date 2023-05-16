import { Track } from './track';

export class Song {
  title: string = '';
  tracks: Track[] = [];

  /**
   *
   */
  constructor(title = '', tracks: Track[] = []) {
    this.title = title;
    this.tracks = tracks;
  }
}

export const initialSongState: Song = new Song('', [
  new Track('Kick', 0),
  new Track('Closed Hats', 1),
  new Track('Open Hats', 2),
  new Track('Snare1', 3),
  new Track('Snare2', 4),
  new Track('Snare3', 5),
  new Track('Bass', 6),
  new Track('Lead1', 7),
  new Track('Lead2', 8),
  new Track('Pad1', 9),
  new Track('Pad2', 10),
  new Track('SFX1', 11),
  new Track('SFX2', 12),
]);
