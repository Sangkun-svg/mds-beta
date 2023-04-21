import type { StoryObj } from '@storybook/react'
import { FONT_STYLES } from '../../../constants/font'
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
