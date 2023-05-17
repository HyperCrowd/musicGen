type ChordQuality = 'major' | 'minor' | 'diminished' | 'augmented';

interface Chord {
  numeral: string;
  quality: ChordQuality;
  borrowed?: boolean;
  harmonicFunction?: string;
}

function analyzeChordProgression(
  key: string,
  progression: string[],
  outputFormat: 'lowercase' | 'uppercase' | 'detailed'
): string[] {
  const majorKeyProgression: ChordQuality[] = [
    'major',
    'minor',
    'minor',
    'major',
    'major',
    'minor',
    'diminished',
  ];
  const minorKeyProgression: ChordQuality[] = [
    'minor',
    'diminished',
    'major',
    'minor',
    'minor',
    'major',
    'major',
  ];

  const isMajorKey = key.toLowerCase() === key;
  const progressionPattern = isMajorKey
    ? majorKeyProgression
    : minorKeyProgression;
  const progressionLength = progressionPattern.length;

  return progression.map((chordSymbol, index) => {
    const chordIndex = index % progressionLength;
    const chord: Chord = {
      numeral: chordSymbol.toUpperCase(),
      quality: progressionPattern[chordIndex],
    };

    if (outputFormat === 'lowercase') {
      chord.numeral = chord.numeral.toLowerCase();
    } else if (outputFormat === 'detailed') {
      chord.harmonicFunction = getHarmonicFunction(chord, isMajorKey);
      chord.borrowed = isBorrowedChord(chordSymbol, isMajorKey);
    }

    return formatChord(chord, outputFormat);
  });
}

function getHarmonicFunction(chord: Chord, isMajorKey: boolean): string {
  // Add custom rules for assigning harmonic functions to chords
  // based on the chord's scale degree and quality
  // For example:
  if (chord.numeral === 'I') {
    return isMajorKey ? 'Tonic' : 'Tonic (Minor)';
  } else if (chord.numeral === 'V') {
    return 'Dominant';
  } else if (chord.numeral === 'VI') {
    return 'Submediant';
  }
  // ...

  return '';
}

function isBorrowedChord(chordSymbol: string, isMajorKey: boolean): boolean {
  // Add custom rules to determine if a chord is borrowed
  // based on the chord symbol and the major/minor key context
  // For example:
  if (isMajorKey && chordSymbol === 'bVI') {
    return true;
  } else if (!isMajorKey && chordSymbol === 'III') {
    return true;
  }
  // ...

  return false;
}

function formatChord(
  chord: Chord,
  outputFormat: 'lowercase' | 'uppercase' | 'detailed'
): string {
  if (outputFormat === 'detailed') {
    let formattedChord = chord.numeral;
    if (chord.quality === 'diminished') {
      formattedChord += '°';
    } else if (chord.quality === 'augmented') {
      formattedChord += '+';
    }
    if (chord.borrowed) {
      formattedChord += ' (Borrowed)';
    }
    if (
      chord.numeral.includes('/') ||
      chord.numeral.includes('b') ||
      chord.numeral.includes('#')
    ) {
      formattedChord += ` (${chord.numeral})`;
    }
    if (chord.harmonicFunction) {
      formattedChord += ` - ${chord.harmonicFunction}`;
    }
    return formattedChord;
  }

  return outputFormat === 'lowercase'
    ? chord.numeral
    : chord.numeral.toUpperCase();
}

// Example usage
const key = 'G'; // Key of C major
const progression = ['I', 'bIII', 'bVI', 'II', 'V', 'I'];
const outputFormat = 'detailed';

const analyzedProgression = analyzeChordProgression(
  key,
  progression,
  outputFormat
);
console.log(analyzedProgression);
