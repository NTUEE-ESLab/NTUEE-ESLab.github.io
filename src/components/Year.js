import React from 'react'
import { Card, Image, Segment, Header } from 'semantic-ui-react'

import Container from './Container'
import './Year.sass'

const insertBetween = (insertion, array) => (array.reduce(
    (newArray, member, i) => (i < array.length - 1
        ? newArray.concat(member, insertion)
        : newArray.concat(member)), []))

function renderProject({ image, name, students, description }, key) {
    image = image || '/assets/project.grey.png'
    return (
        <Card key={key}>
            <Image src={image} />
            <Card.Content>
                <Card.Header>
                    {name}
                </Card.Header>
                <Card.Meta>
                    <span>
                        {insertBetween(<br/>, students)}
                    </span>
                </Card.Meta>
                <Card.Description>
                    {description}
                </Card.Description>
            </Card.Content>
        </Card>)
}

export default function({ name, description, projects }, key) {
    return (
        <Container key={key} className='year'>
            <Segment basic className='description'>
                <Header size='huge' style={{ textAlign: 'center' }}>
                    <a href={`#${name}`} style={{ color: 'black', borderBottom: 'solid black 10px' }}>{name}</a>
                </Header>
                <p>{description}</p>
            </Segment>
            <Card.Group
                className='propjects'
                itemsPerRow={3}
                stackable
            >
                {projects.map(renderProject)}
            </Card.Group>
        </Container>
    )
}
