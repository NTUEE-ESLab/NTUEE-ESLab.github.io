import React from 'react'

import { Grid, Header, Image, Item, Icon, Card, Rail, Sticky, Segment } from 'semantic-ui-react'

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
        return [
            <Segment basic>
                <Header size='huge' style={{ textAlign: 'center' }}>
                    <a href={`#${year.name}`} style={{ color: 'black', borderBottom: 'solid black 10px' }}>{year.name}</a>
                </Header>
                <p>{year.description}</p>
            </Segment>,
            <Card.Group itemsPerRow={3} stackable doubling style={{ marginTop: 0 }}>
                {year.projects.map(this.renderProject)}
            </Card.Group>,
        ]
        // return (
        //     <Grid padded>
        //         <Grid.Row key={year.name}>
        //             <Grid.Column computer={3} mobile={16}>
        //                 <Header size='huge' style={{ textAlign: 'center' }}>
        //                     <a href={`#${year.name}`} style={{ color: 'black', borderBottom: 'solid black 10px' }}>{year.name}</a>
        //                 </Header>
        //                 <p>{year.description}</p>
        //             </Grid.Column>
        //             <Grid.Column computer={10} mobile={16}>
        //                 <Card.Group itemsPerRow={3} stackable doubling style={{ marginTop: 0 }}>
        //                     {year.projects.map(this.renderProject)}
        //                 </Card.Group>
        //             </Grid.Column>
        //         </Grid.Row>
        //     </Grid>)
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
        return [
            <Container textAlign='center' color='white'>
                {projects.map(this.renderYear)}
            </Container>,
            <Container textAlign='center' color='grey'>
                <p>
                    <Icon name='code' /> with <Icon name='like' /> by <a style={{ color: 'white', borderBottom: 'dashed 1px white' }} href='https://github.com/PatrickChen83'><Icon name='user' />Ian Chen</a>
                    <br />
                    <span style={{ fontSize: 10 }}>
                        "Lab Computer" by Ben Davis from thenounproject.com
                    </span>
                </p>
            </Container>,
        ]
    }
}
