import React, { useState } from 'react'
import './styles/index.scss'

import Button from './components/Button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Transition from './components/Transition'

import Icon from './components/Icon'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const App: React.FC = () => {
  const [show, setShow] = useState(false)
  return (
    <div className='App'>
      <header className='App-header'>
        <Button size='sm'>button</Button>
        <Button>button</Button>
        <Button size='lg'>button</Button>

        <Menu defaultIndex={'0'} onSelect={index => alert(index)} mode='horizontal'>
          <MenuItem>link0</MenuItem>
          <MenuItem disabled>link1</MenuItem>
          <MenuItem>link2</MenuItem>
          <SubMenu title='dropdown'>
            <MenuItem>link3-1</MenuItem>
            <MenuItem>link3-2</MenuItem>
            <MenuItem>link3-3</MenuItem>
          </SubMenu>
        </Menu>

        <Icon icon='arrow-down' theme='primary' size='10x' />
        <br />
        <Button
          size='lg'
          onClick={() => {
            setShow(!show)
          }}
        >
          Toggle
        </Button>

        <Transition in={show} timeout={300} animation='zoom-in-left'>
          <div>
            <div>Transition</div>
            <div>Transition</div>

            <Button size='lg' btnType='primary'>
              A Large Button
            </Button>
          </div>
        </Transition>
      </header>
    </div>
  )
}

export default App
