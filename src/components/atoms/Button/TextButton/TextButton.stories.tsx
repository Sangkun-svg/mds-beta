import type { StoryObj } from '@storybook/react'

import { TextButton } from './TextButton'
const meta = {
    title: 'Atoms/Button/TextButton',
    component: TextButton,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TextButton>

export const Text_Button: Story = {
    args: {
        children: 'Button',
        height: '40px',
    },
}

export const Text_Underbar_Button: Story = {
    args: {
        children: 'Button',
        height: '40px',
        textDecoration: 'underline',
    },
}
