import React, {
  FC,
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  AnchorHTMLAttributes
} from 'react'
import classNames from 'classnames'

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

export interface BaseButtonProps extends ComponentPropsWithoutRef<'button'> {
  /**
   * class name
   */
  className?: string
  /**
   * button disabled
   */
  disabled?: boolean
  /**
   * button size
   */
  size?: ButtonSize
  /**
   * button type
   */
  btnType?: ButtonType
  /**
   * button children
   */
  children: React.ReactNode
  /**
   * href
   */
  href?: string
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ```js
 * import { Button } from 'dd-react-components'
 * ```
 */
export const Button: FC<ButtonProps> = (props) => {
  const { btnType, className, disabled, size, children, href, ...restProps } =
    props

  // btn, btn-lg, btn-primary
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === 'link' && disabled
  })

  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} disabled={disabled} {...restProps}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}

export default Button
