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
    color: COLOR
    margin?: string
    fontWeight: number
    fontSize: string
    lineHeight: string
    overflow?: Overflow
    textOverflow?: TextOverflow
    whiteSpace?: WhiteSpace
}

interface ITextStyle {
    color: COLOR
    margin?: string
    fontWeight: number
    fontSize: string
    lineHeight: string
    overflow?: Overflow
    textOverflow?: TextOverflow
    whiteSpace?: WhiteSpace
}

/**
 * [투두몰]은 공통된 타입 페이스를 사용합니다. 각 OS 및 국문과 영문, 숫자, 특수문자까지 공통된 Pretendard를 사용합니다.
 */
export const Text = ({
    children = '프리텐다드 가나다라마바사 ABCDEFG',
    margin = '0',
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

const TextStyle = styled.a<ITextStyle>`
    display: flex;
    justify-content: center;
    align-items: center;
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
