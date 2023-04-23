import type { StoryObj } from '@storybook/react'
import { FONT_STYLES } from '../../../constants'
import { Text } from './Text'

const meta = {
    title: 'Atoms/Text',
    component: Text,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Text>

export const HeadingXXL: Story = {
    args: {
        fontSize: FONT_STYLES.PRETENDARD_500.size,
        fontWeight: FONT_STYLES.PRETENDARD_500.weight,
        lineHeight: FONT_STYLES.PRETENDARD_500.height,
    },
}

export const HeadingXL: Story = {
    args: {
        fontSize: FONT_STYLES.PRETENDARD_450.size,
        fontWeight: FONT_STYLES.PRETENDARD_450.weight,
        lineHeight: FONT_STYLES.PRETENDARD_450.height,
    },
}
export const HeadingL: Story = {
    args: {
        fontSize: FONT_STYLES.PRETENDARD_400.size,
        fontWeight: FONT_STYLES.PRETENDARD_400.weight,
        lineHeight: FONT_STYLES.PRETENDARD_400.height,
    },
}
export const BodyXXXL: Story = {
    args: {
        fontSize: FONT_STYLES.PRETENDARD_350.size,
        fontWeight: FONT_STYLES.PRETENDARD_350.weight,
        lineHeight: FONT_STYLES.PRETENDARD_350.height,
    },
}
export const BodyXXL: Story = {
    args: {
        fontSize: FONT_STYLES.PRETENDARD_300.size,
        fontWeight: FONT_STYLES.PRETENDARD_300.weight,
        lineHeight: FONT_STYLES.PRETENDARD_300.height,
    },
}
export const BodyXL: Story = {
    args: {
        fontSize: FONT_STYLES.PRETENDARD_250.size,
        fontWeight: FONT_STYLES.PRETENDARD_250.weight,
        lineHeight: FONT_STYLES.PRETENDARD_250.height,
    },
}
export const BodyL: Story = {
    args: {
        fontSize: FONT_STYLES.PRETENDARD_225.size,
        fontWeight: FONT_STYLES.PRETENDARD_225.weight,
        lineHeight: FONT_STYLES.PRETENDARD_225.height,
    },
}
export const BodyM: Story = {
    args: {
        fontSize: FONT_STYLES.PRETENDARD_200.size,
        fontWeight: FONT_STYLES.PRETENDARD_200.weight,
        lineHeight: FONT_STYLES.PRETENDARD_200.height,
    },
}
export const BodyS: Story = {
    args: {
        fontSize: FONT_STYLES.PRETENDARD_150.size,
        fontWeight: FONT_STYLES.PRETENDARD_150.weight,
        lineHeight: FONT_STYLES.PRETENDARD_150.height,
    },
}
export const BodyXS: Story = {
    args: {
        fontSize: FONT_STYLES.PRETENDARD_125.size,
        fontWeight: FONT_STYLES.PRETENDARD_125.weight,
        lineHeight: FONT_STYLES.PRETENDARD_125.height,
    },
}
export const BodyXXS: Story = {
    args: {
        fontSize: FONT_STYLES.PRETENDARD_100.size,
        fontWeight: FONT_STYLES.PRETENDARD_100.weight,
        lineHeight: FONT_STYLES.PRETENDARD_100.height,
    },
}
export const DetailS: Story = {
    args: {
        fontSize: FONT_STYLES.PRETENDARD_75.size,
        fontWeight: FONT_STYLES.PRETENDARD_75.weight,
        lineHeight: FONT_STYLES.PRETENDARD_75.height,
    },
}
export const DetailXS: Story = {
    args: {
        fontSize: FONT_STYLES.PRETENDARD_50.size,
        fontWeight: FONT_STYLES.PRETENDARD_50.weight,
        lineHeight: FONT_STYLES.PRETENDARD_50.height,
    },
}
