/** @jsxImportSource @emotion/react */

import * as styles from './styles'

export const Menu = () => {
  return (
    <div css={styles.menu}>
      <button css={styles.button}>
        <span>G</span>ame
      </button>
      <button css={styles.button}>
        <span>H</span>elp
      </button>
    </div>
  )
}
