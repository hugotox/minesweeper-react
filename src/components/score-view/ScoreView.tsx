/** @jsxImportSource @emotion/react */

import * as numbers from './numbers'
import * as styles from './styles'

export interface ScoreViewProps {
  value: number
}

const numberMap: Record<string, any> = {
  '0': numbers.zero,
  '1': numbers.one,
  '2': numbers.two,
  '3': numbers.three,
  '4': numbers.four,
  '5': numbers.five,
  '6': numbers.six,
  '7': numbers.seven,
  '8': numbers.eight,
  '9': numbers.nine,
}

export const ScoreView = ({ value }: ScoreViewProps) => {
  const [cent, dec, unit] = String(value).padStart(3, '0').split('')
  return (
    <div css={styles.scoreView}>
      <div css={[styles.digital, numberMap[cent]]} />
      <div css={[styles.digital, numberMap[dec]]} />
      <div css={[styles.digital, numberMap[unit]]} />
    </div>
  )
}
