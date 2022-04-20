/** @jsxImportSource @emotion/react */

import { Meta, Story } from '@storybook/react'

import { Panel } from '../components'

import { withTheme } from './withTheme'

const PanelStory: Meta = {
  component: Panel,
  title: 'Panel',
}

const Template: Story = withTheme(() => {
  return (
    <div>
      <Panel>This is a panel</Panel>
    </div>
  )
})

export const Default = Template.bind({})

export default PanelStory
