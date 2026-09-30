// Design tokens — the single source of truth for the app's look.
// Values are read from DESIGN.md; do not improvise colours or spacings elsewhere.

export const colors = {
  bg: '#F4F5FA',
  bgAlt: '#F4F4F4',
  bgTint: '#ECF1FA',
  surface: '#FFFFFF',
  surfaceCard: '#DCE5F4',
  fg: '#23233C',
  fgStrong: '#1C1C1C',
  fgBlack: '#000000',
  accent: '#6CC57C',
  accentSoft: '#61D27C33',
  accentDim: '#6CC57CD9',
  accentBar: '#6CC57CA3',
  accentLight: '#61D27C',
  accentDeep: '#179F2F',
  onAccent: '#FFFFFF',
  secondary: '#23233C',
  muted: '#A5A5A5',
  muted2: '#8D8D8D',
  muted3: '#898888C9',
  muted4: '#B4B4B4',
  navInactive: '#BBC7DB',
  border: '#707070',
  divider: '#1C1C1C33',
  chevron: '#181461',
  warnLine: '#C48B302E',
  dot: '#E3E3E3',
} as const;

export const spacing = {
  0: 4,
  1: 8,
  2: 12,
  3: 16,
  4: 20,
  5: 24,
  6: 40,
} as const;

export const radii = {
  sm: 3,
  md: 5,
  lg: 8,
  xl: 10,
  fieldNote: 12,
  buttonDark: 18,
  panel: 20,
  pill: 999,
  square: 0,
} as const;

// Font family names as registered by useFonts (see App.tsx).
export const fonts = {
  aleo700: 'Aleo_700Bold',
  inter100: 'Inter_100Thin',
  inter400: 'Inter_400Regular',
  inter500: 'Inter_500Medium',
  ubuntu400: 'Ubuntu_400Regular',
  ubuntu700: 'Ubuntu_700Bold',
} as const;

export const typography = {
  text25: { fontFamily: fonts.aleo700, fontSize: 25, lineHeight: 30 },
  text16: { fontFamily: fonts.aleo700, fontSize: 16, lineHeight: 19 },
  text16Alt: { fontFamily: fonts.inter400, fontSize: 16, lineHeight: 19 },
  text14: { fontFamily: fonts.aleo700, fontSize: 14, lineHeight: 17 },
  text14Alt: { fontFamily: fonts.inter400, fontSize: 14, lineHeight: 17 },
  text12: { fontFamily: fonts.inter100, fontSize: 12, lineHeight: 15 },
  text12Alt: { fontFamily: fonts.inter400, fontSize: 12, lineHeight: 14 },
  text10: { fontFamily: fonts.inter400, fontSize: 10, lineHeight: 13 },
  text9: { fontFamily: fonts.inter100, fontSize: 9, lineHeight: 11 },
  text7: { fontFamily: fonts.aleo700, fontSize: 7, lineHeight: 5 },
  sectionLabel: {
    fontFamily: fonts.inter100,
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 2.4,
    textTransform: 'uppercase' as const,
  },
  pageLabel: {
    fontFamily: fonts.inter100,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 2.8,
    textTransform: 'uppercase' as const,
  },
  heroNumber: {
    fontFamily: fonts.inter500,
    fontSize: 45,
    lineHeight: 57,
    textTransform: 'uppercase' as const,
  },
  screenTitle: { fontFamily: fonts.aleo700, fontSize: 24, lineHeight: 29 },
} as const;
