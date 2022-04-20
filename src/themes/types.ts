export type ColorTypes =
  | 'background'
  | 'black'
  | 'blue'
  | 'darkBlue'
  | 'darkCyan'
  | 'darkGray'
  | 'darkGreen'
  | 'darkRed'
  | 'darkViolet'
  | 'gray'
  | 'lightGray'
  | 'red'
  | 'teal'
  | 'white'

export interface Colors extends Record<ColorTypes, string> {}

export interface MineSweeperTheme {
  colors: Colors
  name: string
}
