import React from 'react'
import styled from 'styled-components'

type TextDecoration =
    | 'underline'
    | 'overline red'
    | 'none'
    | 'revert visible'
    | 'inherit'
    | 'initial'
    | 'unset'

interface TextButtonProps {
    width: string
    height: string
    color: string
    margin: string
    textDecoration: TextDecoration
    children: string | React.ReactNode
    onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

interface IButtonStyle {
    width: string
    height: string
    margin: string
    textDecoration: TextDecoration
}

export const TextButton = ({
    width = '100%',
    height = '3.25rem',
    margin = '1rem 0 0.5rem 0',
    children = 'Button',
    textDecoration = 'none',
    onClick: handleClick,
}: TextButtonProps) => {
    return (
        <TextButtonStyle
            width={width}
            height={height}
            margin={margin}
            textDecoration={textDecoration}
            onClick={handleClick}
        >
            {children}
        </TextButtonStyle>
    )
}

const TextButtonStyle = styled.a<IButtonStyle>`
    width: auto;
    height: ${props => props.height};
    margin: ${props => props.margin};
    text-decoration: ${props => props.textDecoration};
    cursor: pointer;
`
