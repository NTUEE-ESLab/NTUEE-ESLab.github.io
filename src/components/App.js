import React from 'react'

import projects from '../projects'

import Year from './Year'
import Intro from './Intro'
import Footer from './Footer'
import Staff from './Staff'

export default function() {
    return [
        ...projects.map(Year),
        <Staff key="Staff" />,
        <Footer key="Footer" />,
        <Intro key="Intro" />,
    ]
}

