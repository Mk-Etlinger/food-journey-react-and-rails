import React, { Component } from 'react';
import MainContent from './MainContent';
import PrimaryNavigation from './PrimaryNavigation';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';

export default class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        }
    }

    handleOnAddItemClick = (e) => {
        const route = e.target.id
        this.props.history.replace(`/dashboard/${ route }`)
    }

    handleLogout = () => {
        localStorage.jwt = ''
    }

    render() {
        const { activeComp } = this.props
        return (
            <Box flex>               
                <Split flex='right'
                    showOnResponsive='both' >
                    <Box style={{ height: '100%' }} 
                        flex 
                        colorIndex='light-2'>
                        <PrimaryNavigation />
                    </Box>
                        <MainContent onClickCB={ this.handleOnAddItemClick } 
                            activeComp={ activeComp } />
                </Split>
            </Box>
        )
    }
}
