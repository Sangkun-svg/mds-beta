import React from 'react'
import type { StoryObj } from '@storybook/react'
import { Chip } from './Chip'
import { COLOR } from '../../../constants'

const meta = {
    title: 'Atoms/Chips',
    component: Chip,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Chip>

export const BasicChip: Story = {
    args: {},
}

export const DisabledBasicChip: Story = {
    args: {
        isDisabled: true,
    },
}
export const OutlineChip: Story = {
    args: {
        border: `1px soild ${COLOR.BLACK}`,
        backgroundColor: COLOR.WHITE,
    },
}
