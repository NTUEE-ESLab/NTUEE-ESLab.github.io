import React from 'react'

function scrollHOC(Wrapped, scrollTopToProps = () => {}) {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {}

            this.handleScroll = this.handleScroll.bind(this)
        }

        handleScroll() {
            this.setState(scrollTopToProps(window.scrollY))
        }

        componentDidMount() {
            window.addEventListener('scroll', this.handleScroll)
        }

        componentWillUnmount() {
            window.removeEventListener('scroll', this.handleScroll)
        }

        render() {
            return <Wrapped {...this.state} />
        }
    }
}

export default scrollHOC
