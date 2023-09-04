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

type Target = '_blank' | '_parent' | '_self' | '_top'

interface TextButtonProps extends Partial<IButton> {
    src: string
    target?: Target
    color: COLOR
    textDecoration: TextDecoration
    textDecorationColor?: COLOR
}

interface ITextButtonStyle {
    width: string
    height: string
    margin: string
    color: COLOR
    textDecoration: TextDecoration
    textDecorationColor?: COLOR
}

/**
 * 예외적으로 강조할 필요가 없어 텍스트만을 이용하여 버튼의 역할을 명확하게 전달할 수 있을 경우 사용합니다.
 *
 * 텍스트 버튼의 모바일 터치 영역은 heigth 기준 최소 40px 이상 사용을 권장하며, 터치 영역의 중복은 불가합니다.
 */
export const TextButton = ({
    src = '',
    target,
    width = '100%',
    height = '3.25rem',
    margin = '1rem 0 0.5rem 0',
    textDecoration = 'none',
    color = COLOR.GRAY900,
    textDecorationColor = COLOR.GRAY900,
    onClick: handleClick,
    children = 'Button',
}: TextButtonProps) => {
    return (
        <TextButtonStyle
            href={src}
            target={target}
            width={width}
            height={height}
            margin={margin}
            color={color}
            textDecoration={textDecoration}
            textDecorationColor={textDecorationColor}
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
    text-decoration-color: ${props => props.textDecorationColor};
    cursor: pointer;
    padding: 10px;
`
