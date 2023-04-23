import React from 'react'

export interface IButton {
    isDisabled?: boolean
    backgroundColor?: string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
    children: string | React.ReactNode
}
