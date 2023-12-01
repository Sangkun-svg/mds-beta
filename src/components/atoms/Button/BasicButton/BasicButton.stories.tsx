import React from 'react'
import type { StoryObj } from '@storybook/react'
import { BasicButton } from './BasicButton'
import { Text } from '../../Text/Text'
import { COLOR } from '../../../../constants'
import NextArrowIcon from '../../../../asset/icon/NextArrowIcon'

const meta = {
    title: 'Atoms/Button/BasicButton',
    component: BasicButton,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BasicButton>

/**
 * 텍스트 및 아이콘과 조합하여 사용 가능하며, 아이콘의 독립사용은 불가합니다. 메인 컬러 및 스테이터스 컬러를 상황에 맞춰 적용하여 사용합니다.
 */
export const Basic_Button: Story = {
    args: {
        backgroundColor: COLOR.BRAND_COLOR,
        children: (
            <Text
                color={COLOR.WHITE}
                fontWeight={700}
                fontSize={'16px'}
                lineHeight={'24px'}
            >
                확인
            </Text>
        ),
    },
}

export const Basic_Icon_Button: Story = {
    args: {
        backgroundColor: COLOR.BRAND_COLOR,
        children: (
            <Text
                color={COLOR.WHITE}
                fontWeight={700}
                fontSize={'16px'}
                lineHeight={'24px'}
            >
                확인
                <NextArrowIcon color={COLOR.WHITE} />
            </Text>
        ),
    },
}

export const Line_Button: Story = {
    args: {
        backgroundColor: COLOR.WHITE,
        border: `1px solid ${COLOR.BRAND_COLOR}`,
        children: (
            <Text
                color={COLOR.BRAND_COLOR}
                fontWeight={700}
                fontSize={'16px'}
                lineHeight={'24px'}
            >
                확인
            </Text>
        ),
    },
}

export const Line_Icon_Button: Story = {
    args: {
        backgroundColor: COLOR.WHITE,
        border: `1px solid ${COLOR.BRAND_COLOR}`,
        children: (
            <Text
                color={COLOR.BRAND_COLOR}
                fontWeight={700}
                fontSize={'16px'}
                lineHeight={'24px'}
            >
                확인
                <NextArrowIcon color={COLOR.BRAND_COLOR} />
            </Text>
        ),
    },
}

export const Disable_Button: Story = {
    args: {
        backgroundColor: COLOR.DISABLED,
        disable: true,
        children: (
            <Text
                color={COLOR.WHITE}
                fontWeight={700}
                fontSize={'16px'}
                lineHeight={'24px'}
            >
                확인
            </Text>
        ),
    },
}

export const Disable_Icon_Button: Story = {
    args: {
        backgroundColor: COLOR.DISABLED,
        disable: true,
        children: (
            <Text
                color={COLOR.WHITE}
                fontWeight={700}
                fontSize={'16px'}
                lineHeight={'24px'}
            >
                확인
                <NextArrowIcon color={COLOR.WHITE} />
            </Text>
        ),
    },
}

export const Error_Button: Story = {
    args: {
        backgroundColor: COLOR.ERROR500,
        children: (
            <Text
                color={COLOR.WHITE}
                fontWeight={700}
                fontSize={'16px'}
                lineHeight={'24px'}
            >
                취소
            </Text>
        ),
    },
}

export const Error_Icon_Button: Story = {
    args: {
        backgroundColor: COLOR.ERROR500,
        children: (
            <Text
                color={COLOR.WHITE}
                fontWeight={700}
                fontSize={'16px'}
                lineHeight={'24px'}
            >
                취소
                <NextArrowIcon color={COLOR.WHITE} />
            </Text>
        ),
    },
}
export const Error_Line_Button: Story = {
    args: {
        backgroundColor: COLOR.WHITE,
        border: `1px solid ${COLOR.ERROR500}`,
        children: (
            <Text
                color={COLOR.ERROR500}
                fontWeight={700}
                fontSize={'16px'}
                lineHeight={'24px'}
            >
                취소
            </Text>
        ),
    },
}
export const Error_Line_Icon_Button: Story = {
    args: {
        backgroundColor: COLOR.WHITE,
        border: `1px solid ${COLOR.ERROR500}`,
        children: (
            <Text
                color={COLOR.ERROR500}
                fontWeight={700}
                fontSize={'16px'}
                lineHeight={'24px'}
            >
                취소
                <NextArrowIcon color={COLOR.ERROR500} />
            </Text>
        ),
    },
}

export const Success_Button: Story = {
    args: {
        backgroundColor: COLOR.SUCCESS500,
        height: '48px',
        children: (
            <Text
                color={COLOR.WHITE}
                fontWeight={700}
                fontSize={'16px'}
                lineHeight={'24px'}
            >
                확인
            </Text>
        ),
    },
}
export const Success_Icon_Button: Story = {
    args: {
        backgroundColor: COLOR.SUCCESS500,
        height: '48px',
        children: (
            <Text
                color={COLOR.WHITE}
                fontWeight={700}
                fontSize={'16px'}
                lineHeight={'24px'}
            >
                확인
                <NextArrowIcon color={COLOR.WHITE} />
            </Text>
        ),
    },
}

export const Success_Line_Button: Story = {
    args: {
        backgroundColor: COLOR.WHITE,
        border: `1px solid ${COLOR.SUCCESS500}`,
        children: (
            <Text
                color={COLOR.SUCCESS500}
                fontWeight={700}
                fontSize={'16px'}
                lineHeight={'24px'}
            >
                확인
            </Text>
        ),
    },
}
export const Success_Icon_Line_Button: Story = {
    args: {
        backgroundColor: COLOR.WHITE,
        border: `1px solid ${COLOR.SUCCESS500}`,
        children: (
            <Text
                color={COLOR.SUCCESS500}
                fontWeight={700}
                fontSize={'16px'}
                lineHeight={'24px'}
            >
                확인
                <NextArrowIcon color={COLOR.SUCCESS500} />
            </Text>
        ),
    },
}
