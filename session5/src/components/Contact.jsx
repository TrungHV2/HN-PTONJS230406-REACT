import React, { useContext } from 'react'
import { ThemeContext } from '../App'

export default function Contact() {
    const {txtColor, bgColor} = useContext(ThemeContext)

    return (
        <div>
            <h1 style={{
                color: txtColor,
                backgroundColor: bgColor
            }}>Contact component</h1>
        </div>
    )
}
