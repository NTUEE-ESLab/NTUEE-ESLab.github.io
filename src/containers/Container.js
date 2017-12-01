import React from 'react'
import { getColor } from '../utils'
import './Container.sass'

export default function Container({ children, textAlign, color, style = {} }) {
    if (textAlign) {
        style.textAlign = 'center'
    }

    color = getColor(color)
    if (color) {
        style.backgroundColor = color
    }

    return <div className='my-container grey' style={style}>
        { children }
    </div>
}
