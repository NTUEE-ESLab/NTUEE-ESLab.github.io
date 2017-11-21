import React from 'react'

import { Grid, Header, Image, Item, Container } from 'semantic-ui-react'
import './Container.css'

import TopBar from '../components/TopBar'

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <TopBar/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Container text>
                            <Item.Group unstackable>
                                <Item>
                                    <Item.Image src='/assets/rpi.resize.png' wrapped />
                                    <Item.Content verticalAlign='middle'>
                                        <Item.Header>
                                            Raspberry Pi 3
                                        </Item.Header>
                                    </Item.Content>
                                </Item>
                                <Item>
                                    <Item.Image src='/assets/arduino.resize.png' wrapped />
                                    <Item.Content verticalAlign='middle'>
                                        <Item.Header>
                                            Arduino
                                        </Item.Header>
                                    </Item.Content>
                                </Item>
                                <Item>
                                    <Item.Image src='/assets/msp432p401r.png' wrapped />
                                    <Item.Content verticalAlign='middle'>
                                        <Item.Header>
                                            MSP432P401R
                                        </Item.Header>
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
