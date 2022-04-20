/** @jsxImportSource @emotion/react */

import { Meta, Story } from '@storybook/react'

import { Cell, CellProps } from '../components'
import { Icon } from '../icons'

import { withTheme } from './withTheme'

const CellStory: Meta = {
  component: Cell,
  title: 'Cell',
}

const Template: Story = withTheme(({ isPressed }: CellProps) => {
  return (
    <div>
      <Cell isPressed={isPressed} />
    </div>
  )
})

const TemplateWithIcon: Story = withTheme(({ isPressed }: CellProps) => {
  return (
    <div>
      <Cell isPressed={isPressed}>
        <Icon name="flag" />
      </Cell>
    </div>
  )
})

export const Default = Template.bind({})
export const WithIcon = TemplateWithIcon.bind({})

export default CellStory
