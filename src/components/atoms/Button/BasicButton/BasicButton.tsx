import React from 'react'
import { IButton, BorderRadiusEnum } from '../Button.interface'
import styled from 'styled-components'
import { COLOR } from '../../../../constants'

interface BasicButtonProps extends IButton {}

interface IBasicButtonStyle {
    width: string
    height: string
    margin: string
    borderRadius: string
    backgroundColor: COLOR
}

export const BasicButton = ({
    width = '100%',
    height = '3.25rem',
    margin = '1rem 0 0.5rem 0',
    borderRadius = BorderRadiusEnum.WEB,
    isDisabled = false,
    backgroundColor = COLOR.BRAND_COLOR,
    children = 'Button',
    onClick: handleClick,
}: BasicButtonProps) => {
    return (
        <BasicButtonStyle
            width={width}
            height={height}
            margin={margin}
            borderRadius={borderRadius}
            disabled={isDisabled}
            backgroundColor={backgroundColor}
            onClick={handleClick}
        >
            {children}
        </BasicButtonStyle>
    )
}

const BasicButtonStyle = styled.button<IBasicButtonStyle>`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    background-color: ${props => props.backgroundColor};
    border-radius: ${props => props.borderRadius};
`
