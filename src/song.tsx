import { Track } from './track';

export class Song {
  title: string = '';
  tracks: Track[] = [];
  key: number[] = []

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
  new Track('Lead1.1', 7),
  new Track('Lead1.2', 7),
  new Track('Lead1.3', 7),
  new Track('Lead1.4', 7),
  new Track('Lead2.1', 8),
  new Track('Lead2.2', 8),
  new Track('Lead2.3', 8),
  new Track('Lead2.4', 8),
  new Track('Pad1.1', 9),
  new Track('Pad1.2', 9),
  new Track('Pad1.3', 9),
  new Track('Pad1.4', 9),
  new Track('Pad2.1', 10),
  new Track('Pad2.2', 10),
  new Track('Pad2.3', 10),
  new Track('Pad2.4', 10),
  new Track('SFX1', 11),
  new Track('SFX2', 12),
]);
