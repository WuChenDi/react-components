import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <h1>Welcome</h1>
        <h2>Use Storybook+ React to build component library projects</h2>
      </>
    )
  }, { info : { disable: true }})
