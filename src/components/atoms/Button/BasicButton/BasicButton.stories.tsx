import React from 'react'
import type { StoryObj } from '@storybook/react'
import { BasicButton } from './BasicButton'
import { Text } from '../../Text/Text'
import { COLOR } from '../../../../constants'

const meta = {
    title: 'Atoms/Button/BasicButton',
    component: BasicButton,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BasicButton>

export const Default: Story = {
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

export const Default_Error: Story = {
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
export const Default_Success: Story = {
    args: {
        backgroundColor: COLOR.SUCCESS500,
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
