import React from 'react'
import { getColor } from '../utils'
import './Container.sass'

export default function Container({ children, textAlign, color, className = '', style = {}, id }) {
    if (textAlign) {
        style.textAlign = 'center'
    }

    className = `${className} my-container`.split(' ')
    if (color) {
        className.push(color)
    }

    return <div id={id} className={className.join(' ')} style={style}>
        { children }
    </div>
}
