import React from 'react'
import { COLOR } from '../../../constants'
export interface IButton {
    width?: string
    height?: string
    margin?: string
    borderRadius?: BorderRadiusEnum
    isDisabled?: boolean
    backgroundColor?: COLOR
    onClick: (
        event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
    ) => void
    children: string | React.ReactNode
}

export enum BorderRadiusEnum {
    WEB = '0.5rem',
    MOBILE = '1.5rem',
}
