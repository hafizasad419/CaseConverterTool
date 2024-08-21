import React from 'react';
import RandomGeneratorLayout from './RandomGeneratorLayout';

const StrongPasswordGenerator = () => {
    const generatePassword = async () => {
        // Generate a strong password
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
        const passwordLength = 12; // Length of the password
        let password = '';
        for (let i = 0; i < passwordLength; i++) {
            const randomChar = charset.charAt(Math.floor(Math.random() * charset.length));
            password += randomChar;
        }
        return password;
    };

    return (
        <RandomGeneratorLayout
            title="Strong Password Generator"
            description="Generate a strong password with uppercase, lowercase, numbers, and special characters."
            generateContent={generatePassword}
            downloadLabel="Password"
        />
    );
};

export default StrongPasswordGenerator;
