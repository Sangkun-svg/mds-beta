import React, { ReactNode } from 'react'
import { IButton } from '../Button.interface'
import styled from 'styled-components'
import { COLOR } from '../../../../constants'

export enum Size {
    SMALL = '1.5rem', // 24px
    MEDIUM = '2.25rem', // 36px
    LARGE = '3rem', // 48px
}

type SvgInHtml = HTMLElement & SVGElement

interface IconButtonProps extends Omit<IButton, 'children'> {
    width: Size
    height: Size
    children: SvgInHtml | ReactNode
}

interface IIconButtonStyle {
    width: Size
    height: Size
    backgroundColor: COLOR
}

export const IconButton = ({
    width = Size.MEDIUM,
    height = Size.MEDIUM,
    backgroundColor = COLOR.WHITE,
    children = null,
    onClick: handleClick,
}: IconButtonProps) => {
    return (
        <IconButtonStyle
            width={width}
            height={height}
            backgroundColor={backgroundColor}
            onClick={handleClick}
        >
            {children as ReactNode}
        </IconButtonStyle>
    )
}

const IconButtonStyle = styled.button<IIconButtonStyle>`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.backgroundColor};
    cursor: pointer;
`
