import React from 'react'
import { COLOR } from '../../../../constants'
import { IButton, BorderRadiusEnum } from '../Button.interface'
import styled from 'styled-components'

interface BasicButtonProps extends IButton {}

interface IButtonStyle {
    width: string
    height: string
    margin: string
    border: string
    borderRadius: string
    backgroundColor: string
}

export const BasicButton = ({
    width = '100%',
    height = '3.25rem',
    margin = '1rem 0 0.5rem 0',
    border = '0',
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
            border={border}
            borderRadius={borderRadius}
            disabled={isDisabled}
            backgroundColor={backgroundColor}
            onClick={handleClick}
        >
            {children}
        </BasicButtonStyle>
    )
}

const BasicButtonStyle = styled.button<IButtonStyle>`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    background-color: ${props => props.backgroundColor};
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius};
`
