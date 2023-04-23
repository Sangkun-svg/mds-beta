import React from 'react';
import { COLOR } from '../../../constants';

interface ButtonProps {
    backgroundColor?: string;
    children: string | React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    backgroundColor = COLOR.BRAND_COLOR,
    children = 'Button',
}: ButtonProps) => {
    return <button style={{ backgroundColor }}>{children}</button>;
};
