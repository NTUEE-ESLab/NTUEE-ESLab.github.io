import React from 'react'
import { Header, Dropdown } from 'semantic-ui-react'
import './Intro.sass'

export default function() {
    return (<div className='intro'>
        <div>
            <Header as='h1'>嵌入式實驗<span className='rwd-mobile-hidden'>（十選二）</span></Header>
            <p className='subtitle'>國立臺灣大學 電機工程學系</p>
            <p className='content-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum tellus tortor, imperdiet mollis diam luctus ac. Quisque hendrerit semper maximus. Sed vitae quam et augue vulputate convallis vel porttitor risus. Sed ut velit nisi. Proin non velit eget tellus lobortis mollis. Nulla facilisi.
            </p>
        </div>
    </div>)
}
