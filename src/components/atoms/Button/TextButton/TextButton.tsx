import React from 'react'
import styled from 'styled-components'
import { IButton } from '../Button.interface'
import { COLOR } from '../../../../constants'

type TextDecoration =
    | 'underline'
    | 'overline red'
    | 'none'
    | 'revert visible'
    | 'inherit'
    | 'initial'
    | 'unset'

interface TextButtonProps extends Partial<IButton> {
    color: COLOR
    textDecoration: TextDecoration
}

interface ITextButtonStyle {
    width: string
    height: string
    margin: string
    color: COLOR
    textDecoration: TextDecoration
}

export const TextButton = ({
    width = '100%',
    height = '3.25rem',
    margin = '1rem 0 0.5rem 0',
    textDecoration = 'none',
    color = COLOR.GRAY900,
    onClick: handleClick,
    children = 'Button',
}: TextButtonProps) => {
    return (
        <TextButtonStyle
            width={width}
            height={height}
            margin={margin}
            color={color}
            textDecoration={textDecoration}
            onClick={handleClick}
        >
            {children}
        </TextButtonStyle>
    )
}

const TextButtonStyle = styled.a<ITextButtonStyle>`
    width: auto;
    color: ${props => props.color};
    height: ${props => props.height};
    margin: ${props => props.margin};
    text-decoration: ${props => props.textDecoration};
    cursor: pointer;
`
