import React from 'react'
import { COLOR } from '../../../constants'

export enum BorderRadiusEnum {
    WEB = '0.5rem',
    MOBILE = '1.5rem',
}
enum BUTTON_HEIGHT {
    LARGE = "52px",
    MEDIUM = "48px",
    SMALL= "40px"
}
export interface IButton {
    width?: string
    maxWidth?: string
    height?: string | BUTTON_HEIGHT
    margin?: string
    padding?:  string
    border?:string
    borderRadius?: BorderRadiusEnum
    isDisabled?: boolean
    backgroundColor?: COLOR
    onClick?: (
        event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
    ) => void
    children: string | React.ReactNode
    disable?: boolean
}
