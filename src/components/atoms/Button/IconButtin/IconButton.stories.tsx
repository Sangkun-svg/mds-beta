import React from 'react'
import type { StoryObj } from '@storybook/react'
import { IconButton, Size } from './IconButton'
import {
    ListIcon,
    NextArrowIcon,
    PreviousArrowIcon,
    UnderArrowIcon,
} from '../../../../asset/icon'

const meta = {
    title: 'Atoms/Button/IconButton',
    component: IconButton,
    tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof IconButton>

export const ListIconButton: Story = {
    args: {
        width: Size.LARGE,
        height: Size.LARGE,
        children: <ListIcon />,
    },
}
export const NextArrowIconButton: Story = {
    args: {
        width: Size.LARGE,
        height: Size.LARGE,
        children: <NextArrowIcon />,
    },
}
export const PreviousArrowIconButton: Story = {
    args: {
        width: Size.LARGE,
        height: Size.LARGE,
        children: <PreviousArrowIcon />,
    },
}
export const UnderArrowIconButton: Story = {
    args: {
        width: Size.LARGE,
        height: Size.LARGE,
        children: <UnderArrowIcon />,
    },
}
