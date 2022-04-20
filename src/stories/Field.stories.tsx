/** @jsxImportSource @emotion/react */

import { Meta, Story } from '@storybook/react'

import { Field, FieldProps } from '../components'

import { withTheme } from './withTheme'

const FieldStory: Meta = {
  component: Field,
  title: 'Field',
}

const Template: Story = withTheme(({}: FieldProps) => {
  return (
    <div>
      <Field onClick={() => {}} onRightClick={() => {}} />
    </div>
  )
})

export const Default = Template.bind({})
Default.args = {
  columns: 10,
  rows: 10,
}

export default FieldStory
