import { StoryObj, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from './Button'
import Icon from '../Icon'

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof Button>

export const DefaultButton: Story = {
  args: {
    children: 'default button',
    onClick: action('clicked')
  }
}

export const ButtonWithSize: Story = {
  args: {
    children: 'large button',
    size: 'lg'
  }
}

export const ButtonWithType: Story = {
  args: {
    children: 'primary button',
    btnType: 'primary'
  }
}

export const ButtonIcon: Story = {
  args: {
    btnType: 'primary',
    disabled: false,
    size: 'lg',
    children: (
      <>
        <Icon icon='check' />
        check
      </>
    )
  }
}
