import { StoryObj, Meta } from '@storybook/react'
import Icon from './Icon'

const meta: Meta<typeof Icon> = {
  title: 'Example/Icon',
  component: Icon,
  tags: ['autodocs']
}
export default meta

export const DefaultIcon: StoryObj<typeof Icon> = {
  args: {
    icon: 'check',
    size: '3x',
    theme: 'success'
  }
}

export const IconWithTheme: StoryObj<typeof Icon> = {
  args: {
    icon: 'exclamation-circle',
    size: '3x',
    theme: 'warning'
  }
}

export const IconWithAction: StoryObj<typeof Icon> = {
  args: {
    icon: 'spinner',
    pulse: true,
    size: '3x',
    theme: 'success'
  }
}
