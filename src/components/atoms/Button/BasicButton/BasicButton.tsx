import React from 'react'
import { COLOR } from '../../../../constants'
import { IButton } from '../Button.interface'

interface BasicButtonProps extends IButton {}

export const BasicButton = ({
    backgroundColor = COLOR.BRAND_COLOR,
    children = 'Button',
}: BasicButtonProps) => {
    return <button style={{ backgroundColor }}>{children}</button>
}
