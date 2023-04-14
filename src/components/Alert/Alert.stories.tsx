import { StoryObj, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Alert from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'Example/Alert',
  component: Alert,
  tags: ['autodocs']
}
export default meta

export const AlertWithType: StoryObj<typeof Alert> = {
  args: {
    type: 'success',
    closable: true,
    title: 'this is Success'
  }
}

export const AlertWithChildren: StoryObj<typeof Alert> = {
  args: {
    type: 'success',
    closable: true,
    title: 'Prompt title',
    children: 'this is a long description',
    onClose: action('clicked')
  }
}
