import React from 'react'

import { Grid, Header, Image, Item, Icon, Card, Rail, Sticky } from 'semantic-ui-react'

import projects from '../../projects.json'

import TopBar from '../components/TopBar'
import Container from './Container'

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.renderYear = this.renderYear.bind(this)
        this.renderProject = this.renderProject.bind(this)
    }

    renderYear(year) {
        return (
            <Grid>
                <Grid.Row key={year.name}>
                    <Grid.Column width={3}>
                        <Sticky offset={70}>
                            <Header size='huge' style={{ textAlign: 'center' }}>
                                <a href={`#${year.name}`} style={{ color: 'black', borderBottom: 'solid black 10px' }}>{year.name}</a>
                            </Header>
                            <p>{year.description}</p>
                        </Sticky>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Card.Group itemsPerRow={3} stackable>
                            {year.projects.map(this.renderProject)}
                        </Card.Group>
                    </Grid.Column>
                    <Grid.Column width={3}></Grid.Column>
                </Grid.Row>
            </Grid>)
    }

    renderProject(project) {
        const image = project.image || '/assets/project.grey.png'
        return (
            <Card key={project.name}>
                <Image src={image} />
                <Card.Content>
                    <Card.Header>
                        {project.name}
                    </Card.Header>
                    <Card.Meta>
                        <span>
                            {project.students.join(', ')}
                        </span>
                    </Card.Meta>
                    <Card.Description>
                        {project.description}
                    </Card.Description>
                </Card.Content>
            </Card>)
    }

    render() {
        return (
            <Container textAlign='center'>
                { projects.map(this.renderYear) }
                <p>
                    <Icon name='code' /> with <Icon name='like' /> by <a style={{ color: 'white', borderBottom: 'dashed 1px white' }} href='https://github.com/PatrickChen83'><Icon name='user'/>Ian Chen</a>
                    <br />
                    <span style={{ fontSize: 10 }}>
                        "Lab Computer" by Ben Davis from thenounproject.com
                    </span>
                </p>
            </Container>
        )
    }
}
