export class Note {
  index: number = 0;
  note: string = 'C';
  octave: number = 3;
  instrument: number = 0;
  volume: number = 64;
  effect: string = '';
  effectValue: number = -1;
  active: boolean = true;

  constructor(instrument = -1, note = '', octave = -1, volume = 64) {
    this.instrument = instrument;
    this.note = note;
    this.octave = octave;
    this.volume = volume;
  }

  /**
   *
   */
  asNotation() {
    let result = '|';
    if (this.active === false) {
      result += '...........';
    } else {
      // Notes
      if (this.note === '' || this.octave === -1 || this.instrument === -1) {
        result += '.....';
      } else {
        result += `${this.note}-${this.octave}${this.instrument
          .toString()
          .padStart(2, '0')}`;
      }

      // Instrument
      if (this.volume === -1) {
        result += '...';
      } else {
        result += `v${this.volume.toString().padStart(2, '0')}`;
      }

      // Effects
      if (this.effect === '') {
        result += '...';
      } else {
        result += `${this.effect}${this.effectValue.toString(16)}`;
      }
    }

    return result;
  }
}
