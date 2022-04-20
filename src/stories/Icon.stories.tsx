/** @jsxImportSource @emotion/react */

import { Meta, Story } from '@storybook/react'
import { useState } from 'react'

import { Icon, IconNames } from '../icons'

import { withTheme } from './withTheme'

const IconStory: Meta = {
  component: Icon,
  title: 'Icon',
}

const Template: Story = withTheme(() => {
  const icons: IconNames[] = [
    'bomb',
    'bombRed',
    'flag',
    'question',
    'questionFlat',
    'eight',
    'seven',
    'six',
    'five',
    'four',
    'three',
    'two',
    'one',
    'cross',
  ]
  const [selectedIcon, setSelectedIcon] = useState<IconNames>('bomb')
  return (
    <div>
      <div style={{ display: 'flex' }}>
        {icons.map((name) => (
          <button key={name} onClick={() => setSelectedIcon(name)} style={{ margin: 5 }}>
            <Icon name={name} />
          </button>
        ))}
      </div>
      <div style={{ margin: '40px 20px', transform: 'scale(5)', display: 'inline-block' }}>
        <Icon name={selectedIcon} />
      </div>
    </div>
  )
})

export const Default = Template.bind({})

export default IconStory
