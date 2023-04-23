import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { COLOR } from '../../../constants'

type Overflow =
    | 'visible'
    | 'hidden'
    | 'clip'
    | 'scroll'
    | 'auto'
    | 'hidden visible'
    | 'inherit'
    | 'initial'
    | 'unset'

type TextOverflow =
    | 'clip'
    | 'ellipsis'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'unset'

type WhiteSpace =
    | 'normal'
    | 'nowrap'
    | 'pre'
    | 'pre-wrap'
    | 'pre-line'
    | 'break-spaces'
    | 'inherit'
    | 'initial'
    | 'unset'

interface TextProps {
    children: ReactNode
    color: string
    margin: string
    fontWeight: number
    fontSize: string
    lineHeight: string
    overflow?: Overflow
    textOverflow?: TextOverflow
    whiteSpace?: WhiteSpace
}

interface ITextStyle {
    color: string
    margin: string
    fontWeight: number
    fontSize: string
    lineHeight: string
    overflow?: Overflow
    textOverflow?: TextOverflow
    whiteSpace?: WhiteSpace
}

export const Text = ({
    children = '프리텐다드 가나다라마바사 ABCDEFG',
    margin,
    color = COLOR.GRAY900,
    fontSize,
    fontWeight,
    lineHeight,
    overflow,
    textOverflow,
    whiteSpace,
}: TextProps) => {
    return (
        <TextStyle
            color={color}
            margin={margin}
            fontSize={fontSize}
            fontWeight={fontWeight}
            lineHeight={lineHeight}
            overflow={overflow}
            textOverflow={textOverflow}
            whiteSpace={whiteSpace}
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
    overflow: ${props => props.overflow};
    text-overflow: ${props => props.textOverflow};
    white-space: ${props => props.whiteSpace};
`

export default Text
