import React from 'react'
import { IButton, BorderRadiusEnum } from '../Button.interface'
import styled from 'styled-components'
import { COLOR } from '../../../../constants'

interface BasicButtonProps extends IButton {}

interface IBasicButtonStyle {
    width: string
    maxWidth:string
    height: string
    margin: string
    padding:  string
    border?:string
    borderRadius: string
    disable?: boolean
    backgroundColor: COLOR
}

/**
 * 버튼은 프로덕트의 주요 컴포넌트입니다.
 *
 * 사용자가 성공적 작업 수행을 위해 버튼에 따른 시각적 계층 구조에 차이가 있습니다.
 *
 * 계층 구조에 따른 스타일 가이드에 유의하며, 임의 스타일 추가 및 사용은 제한합니다.
 *
 * 텍스트 및 아이콘과 조합하여 사용 가능하며, 아이콘의 독립사용은 불가합니다.
 *
 * 메인 컬러 및 스테이터스 컬러를 상황에 맞춰 적용하여 사용합니다.
 */
export const BasicButton = ({
    width = '100%',
    maxWidth = "160px",
    height = '48px',
    margin = 'auto',
    padding = "0 24px",
    border = "none",
    borderRadius = BorderRadiusEnum.WEB,
    isDisabled = false,
    backgroundColor = COLOR.BRAND_COLOR,
    children = 'Button',
    disable = false,
    onClick: handleClick,
}: BasicButtonProps) => {
    return (
        <BasicButtonStyle
            width={width}
            maxWidth={maxWidth}
            height={height}
            margin={margin}
            padding={padding}
            border={border}
            borderRadius={borderRadius}
            disabled={isDisabled}
            backgroundColor={backgroundColor}
            disable={disable}
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
    border: ${props => props.border};
    cursor: ${props => props.disable ? "not-allowed" : "pointer"};
    width: ${props => props.width};
    max-width: ${props => props.maxWidth};
    height: ${props => props.height};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    background-color: ${props => props.backgroundColor};
    border-radius: ${props => props.borderRadius};
`
