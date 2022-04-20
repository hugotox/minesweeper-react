/** @jsxImportSource @emotion/react */

import { Meta, Story } from '@storybook/react'

import { Button } from '../components'

import { withTheme } from './withTheme'

const ButtonStory: Meta = {
  component: Button,
  title: 'Button',
}

const Template: Story = withTheme(() => {
  return (
    <div>
      <Button type="close" />
      <br />
      <Button type="minimize" />
      <br />
      <Button type="maximize" />
    </div>
  )
})

export const Default = Template.bind({})

export default ButtonStory
