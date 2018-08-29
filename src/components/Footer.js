import React from 'react'
import { Icon } from 'semantic-ui-react'

import Container from './Container'
import './Footer.sass'

export default function() {
    return (
        <Container id='footer' key='bottom' textAlign='center' color='grey'>
            <p>
                <Icon name='code' /> with <Icon name='like' /> by <a href='https://github.com/PatrickChen83'><Icon name='user' />Ian Chen</a>
                <br />
                <span className='attributions'>
                    "Lab Computer" by Ben Davis from thenounproject.com <br/>
                    Banner image by Allwinivin (Own work) [<a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>], <a href="https://commons.wikimedia.org/wiki/File%3AWww.ultimatetech_.orgfile201602featured-image.jpg">via Wikimedia Commons</a>
                </span>
            </p>
        </Container>
    )
}

