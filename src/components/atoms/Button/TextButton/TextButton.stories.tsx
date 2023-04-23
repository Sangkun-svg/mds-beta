import type { StoryObj } from '@storybook/react'

import { TextButton } from './TextButton'
const meta = {
    title: 'Atoms/Button/TextButton',
    component: TextButton,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TextButton>

export const Primary: Story = {
    args: {
        children: 'Button',
    },
}
