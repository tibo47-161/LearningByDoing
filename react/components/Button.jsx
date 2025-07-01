import React from 'react';
import './Button.css';

/**
 * Button Component - Ein wiederverwendbarer Button mit verschiedenen Varianten
 * 
 * Props:
 * @param {string} variant - 'primary', 'secondary', 'danger', 'success'
 * @param {string} size - 'small', 'medium', 'large'
 * @param {boolean} disabled - Button deaktivieren
 * @param {function} onClick - Click Event Handler
 * @param {string} children - Button Text/Inhalt
 * @param {string} className - Zusätzliche CSS-Klassen
 */
const Button = ({ 
    variant = 'primary', 
    size = 'medium', 
    disabled = false, 
    onClick, 
    children, 
    className = '',
    type = 'button',
    ...props 
}) => {
    // CSS-Klassen basierend auf Props
    const buttonClasses = [
        'btn',
        `btn-${variant}`,
        `btn-${size}`,
        disabled ? 'btn-disabled' : '',
        className
    ].filter(Boolean).join(' ');

    // Click Handler
    const handleClick = (e) => {
        if (!disabled && onClick) {
            onClick(e);
        }
    };

    return (
        <button
            type={type}
            className={buttonClasses}
            onClick={handleClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button; 