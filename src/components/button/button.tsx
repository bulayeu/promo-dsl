import * as React from 'react';
import "./button.scss";

interface ButtonProps {
    type: "primary" | "secondary";
}

export const Button = ({type}: ButtonProps) => <button className={`promo-button promo-button--${type}`}>Button</button>;
export default Button;
