import React from 'react'

import { Menu, Icon, Input, Image } from 'semantic-ui-react'
import '../containers/Container.css'

import './TopBar.css'
import ScrollHOC from './ScrollHOC'

const SmallTopBar = ({ style }) => (
    <div className='small-top-bar top-bar my-container' style={style}>
        <span style={{ fontSize: 30 }}><b>NTUEE ESLab</b>
        </span>
        <Image src='assets/ntu_logo.white.png' className='ntu-logo' inline size='small'/>
    </div>
)

const BigTopBar = ({ className, style }) => (
    <div className={className} style={style}>
        <p style={{ paddingTop: 20 }}>
            <span style={{ fontSize: 40 }}><b>嵌入式系統實驗</b></span>
            <br />
            <span style={{ paddingLeft: 2 }}>國立台灣大學 電機工程學系</span>
        </p>
        <Image src='assets/ntu_logo.white.png' className='ntu-logo' inline size='small' verticalAlign='middle'/>
    </div>
)

const _TopBar = ({ bigFont = true }) => {
    const className = bigFont ?
        'big-top-bar top-bar my-container' : 'big-hidden-top-bar top-bar my-container'
    return (
        <div>
            <SmallTopBar/>
            <BigTopBar className={className}/>
            <BigTopBar className='big-top-bar top-bar my-container'
                style={{
                    visibility: 'hidden',
                    position: 'initial',
                }}
            />
        </div>
    )
}

const bigFontProps = { bigFont: true }
const normalFontProps = { bigFont: false }
function scrollHandler(y) {
    return y < 100 ? bigFontProps : normalFontProps
}

const TopBar = ScrollHOC(_TopBar, scrollHandler)
export default TopBar
