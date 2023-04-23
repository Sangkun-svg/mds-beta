import React from 'react'
import { COLOR } from '../../../constants'

interface ButtonProps {
    disabled: boolean
    backgroundColor?: string
    children: string | React.ReactNode
    onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    backgroundColor = COLOR.BRAND_COLOR,
    children = 'Button',
}: ButtonProps) => {
    return <button style={{ backgroundColor }}>{children}</button>
}
