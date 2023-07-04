import React, { useContext } from 'react'
import { ThemeContext } from '../App'

export default function About() {
    const {txtColor, bgColor} = useContext(ThemeContext)

    return (
        <div>
            <h1 style={{
                color: txtColor,
                backgroundColor: bgColor
            }}>About component</h1>
        </div>
    )
}
