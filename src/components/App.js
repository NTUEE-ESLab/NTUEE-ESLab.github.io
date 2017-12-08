import React from 'react'

import { Grid, Header, Image, Item, Icon, Card, Rail, Sticky, Segment } from 'semantic-ui-react'

import projects from '../../projects.json'

import Year from './Year'
import Intro from './Intro'
import Footer from './Footer'
import Container from './Container'

export default function() {
    return [
        ...projects.map(Year),
        <Footer />,
        <Intro />,
    ]
}

