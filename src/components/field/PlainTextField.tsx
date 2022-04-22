/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'

import { selectField, useAppSelector } from '../../module'

const fieldStyle = css`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  font-size: 12px;
  font-family: monospace;
`

const rowStyle = css`
  display: flex;
  flex-direction: row;
  height: 22px;
`

const colStyle = css`
  width: 22px;
  text-align: center;
`

export const PlainTextField = () => {
  const field = useAppSelector(selectField)

  return (
    <div css={fieldStyle}>
      {field.map((row, i) => {
        return (
          <div css={rowStyle} key={i}>
            {row.map((col, j) => {
              return (
                <div css={colStyle} key={`${i}-${j}`}>
                  {field[i][j].numBombs}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
