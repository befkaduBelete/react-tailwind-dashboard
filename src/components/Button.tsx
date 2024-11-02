import React from 'react'
type ButtonProps = {
    title: "ADD" | "UPDATE",
    bgColor: String
    width: String;

}

const Button = ({ title, bgColor, width }: ButtonProps) => {
    return (
        <button className={`${bgColor} ${width}`}>{title}</button>
    )
}

export default Button
