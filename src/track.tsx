import { Note } from './note';

export class Track {
  name: string = '';
  notes: Note[] = [];

  /**
   *
   */
  constructor(name: string, instrument: number) {
    this.name = name;
    this.notes = this.populate(instrument);
  }

  /**
   *
   */
  private populate = (instrument = -1, note = '', octave = -1, volume = -1) => {
    const result: Note[] = [];
    for (let i = 0; i < 64; i++) {
      result.push(new Note(instrument, note, octave, volume));
    }
    return result;
  };
}
