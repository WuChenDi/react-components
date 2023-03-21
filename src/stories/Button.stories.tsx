import { StoryObj, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button
}
export default meta

export const DefaultButton: StoryObj<typeof Button> = {
  args: {
    children: 'default button',
    onClick: action('clicked')
  }
}

export const ButtonWithSize: StoryObj<typeof Button> = {
  args: {
    children: 'large button',
    size: 'lg'
  }
}

export const ButtonWithType: StoryObj<typeof Button> = {
  args: {
    children: 'primary button',
    btnType: 'primary'
  }
}
