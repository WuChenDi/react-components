import React from 'react';
import type { Preview } from '@storybook/react'
import '../src/styles/index.scss'

const wrapperStyle: React.CSSProperties = {
  padding: '20px 40px'
  // width: '500px'
  // background: 'pink'
}

const preview: Preview = {
  decorators: [
    (Story) => (
      <div style={wrapperStyle}>
        <h3>👇 Component Demo</h3>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
}

export default preview
