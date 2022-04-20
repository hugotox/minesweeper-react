/** @jsxImportSource @emotion/react */

import { Meta, Story } from '@storybook/react'

import { Field, Panel, Window, WindowProps } from '../components'

import { withTheme } from './withTheme'

const WindowStory: Meta = {
  component: Window,
  title: 'Window',
}

const Template: Story = withTheme((props: WindowProps) => {
  return (
    <div>
      <Window {...props}>
        <h1>Hello</h1>
        <p>world</p>
      </Window>
    </div>
  )
})

const WithFieldTmpl: Story = withTheme(() => {
  return (
    <Window title="Minesweeper">
      <Panel>
        <Field columns={8} onClick={() => {}} onRightClick={() => {}} rows={8} />
      </Panel>
    </Window>
  )
})

export const Default = Template.bind({})
export const WithField = WithFieldTmpl.bind({})

export default WindowStory
