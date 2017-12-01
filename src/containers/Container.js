import React from 'react'
import { getColor } from '../utils'
import './Container.sass'

export default function Container({ children, textAlign, color, style = {} }) {
    if (textAlign) {
        style.textAlign = 'center'
    }

    const className = ['my-container']
    if (color) {
        className.push(color)
    }

    return <div className={className.join(' ')} style={style}>
        { children }
    </div>
}
