import type { StoryObj } from '@storybook/react'

import { BasicButton } from './BasicButton'
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Atoms/Button/BasicButton',
    component: BasicButton,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BasicButton>

// // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        children: 'Button',
    },
}
