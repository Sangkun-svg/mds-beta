import React from 'react'
export interface IButton {
    width: string
    height: string
    margin: string
    border: string
    borderRadius?: BorderRadiusEnum
    isDisabled?: boolean
    backgroundColor?: string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
    children: string | React.ReactNode
}

export enum BorderRadiusEnum {
    WEB = '0.5rem',
    MOBILE = '1.5rem',
}
