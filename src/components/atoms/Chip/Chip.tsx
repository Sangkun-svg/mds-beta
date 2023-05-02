import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../../constants'

interface ChipProps {
    width: string
    height: string
    children: string | React.ReactNode
    margin: string
    border: string
    borderRadius: string
    backgroundColor: COLOR
    isDisabled: boolean
    onClick: (
        event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
    ) => void
}

interface IChiptyle {
    width: string
    height: string
    margin: string
    border: string
    borderRadius: string
    backgroundColor: COLOR
}

export const Chip = ({
    width = '4.0625rem',
    height = '2rem',
    children = 'chip',
    margin = 'none',
    border = 'none',
    borderRadius = '1.25rem',
    backgroundColor = COLOR.GRAY100,
    isDisabled = false,
    onClick: handleClick,
}: ChipProps) => {
    return (
        <Chiptyle
            width={width}
            height={height}
            margin={margin}
            border={border}
            borderRadius={borderRadius}
            backgroundColor={backgroundColor}
            disabled={isDisabled}
            onClick={handleClick}
        >
            {children}
        </Chiptyle>
    )
}

const Chiptyle = styled.button<IChiptyle>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius};
    background-color: ${props => props.backgroundColor};
`
