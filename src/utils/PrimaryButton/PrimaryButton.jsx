import React from 'react'

function PrimaryButton(
    {
        children = "hehe, pass children prop",
        type = "button",
        className = "",
        ...props

    }
) {
    return (
        <button
            type={type}
            className={` bg-customGray text-white text-semibold px-4 py-2 rounded-lg hover:scale-105 duration-300 ${className}`}
            {...props}
        >{children}</button>
    )
}

export default PrimaryButton;