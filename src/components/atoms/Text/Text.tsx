import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { COLOR } from '../../../constants/color'

type TextProps = {
    children: ReactNode
    color: string
    margin: string
    fontWeight: number
    fontSize: string
    lineHeight: string
}

interface ITextStyle {
    color: string
    margin: string
    fontWeight: number
    fontSize: string
    lineHeight: string
}

export const Text = ({
    children = '프리텐다드 가나다라마바사 ABCDEFG',
    fontWeight,
    fontSize,
    lineHeight,
    margin,
    color = COLOR.GRAY900,
}: TextProps) => {
    return (
        <TextStyle
            color={color}
            margin={margin}
            fontSize={fontSize}
            fontWeight={fontWeight}
            lineHeight={lineHeight}
        >
            {children}
        </TextStyle>
    )
}

const TextStyle = styled.p<ITextStyle>`
    color: ${props => props.color};
    margin: ${props => props.margin};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    line-height: ${props => props.lineHeight};
    letter-spacing: -0.1rem;
`

export default Text
