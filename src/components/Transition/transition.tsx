import React, { FC, ReactNode } from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'

type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName
  /** 添加一层dom, 避免 内置 transition冲突 */
  wrapper?: boolean
}

const Transition: FC<TransitionProps> = props => {
  const { children, classNames, animation, wrapper, ...restProps } = props

  return (
    <CSSTransition classNames={classNames ? classNames : animation} {...restProps}>
      {wrapper ? <div>{children as ReactNode}</div> : children}
    </CSSTransition>
  )
}

Transition.defaultProps = {
  unmountOnExit: true, // 进入时挂载, 离开时卸载
  appear: true // 初次加载时也有动画
}

export default Transition
