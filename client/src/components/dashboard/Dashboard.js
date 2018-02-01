import React, { Component } from 'react';
import MainContent from './MainContent';
import PrimaryNavigation from './PrimaryNavigation';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Title from 'grommet/components/Title';
import Anchor from 'grommet/components/Anchor';
import UserIcon from 'grommet/components/icons/base/User';
import ListContainer from '../listView/ListContainer';
import DataContainer from '../dataView/DataContainer';
import RelationContainer from '../relationView/RelationContainer';
import { AddItem } from '../addItem/AddItem';

export default class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            activeComp: AddItem,
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        }
    }

    handleOnClick = (e) => {
        const component = componentList[e.target.id] || componentList[e.currentTarget.id]
        this.setState({
            activeComp: component
        })
    }
    
    handleLogout = () => {
        localStorage.jwt = ''
    }

    render() {
        const { windowWidth, activeComp } = this.state
        const responsiveRender = windowWidth < 718 ? 'xsmall' : 'large'

        return (
            <Box flex>
                <Split flex='right'
                    showOnResponsive='both' >
                    <Box style={{ height: '100%' }} 
                        flex 
                        colorIndex='light-2'>
                        <PrimaryNavigation onClickCB={ this.handleOnClick }
                            responsiveRender={ responsiveRender } />
                    </Box>
                        <MainContent activeComp={ activeComp } />
                </Split>
            </Box>
        )
    }
}
const componentList = {
    AddItem,
    ListContainer,
    DataContainer,
    RelationContainer
};


    // componentWillMount() {
    //     window.addEventListener('resize', this.updateWindowDimensions);
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('resize', this.updateWindowDimensions);
    // }

    // updateWindowDimensions() {
    //     this.setState({ 
    //         windowWidth: window.innerWidth, 
    //         windowHeight: window.innerHeight 
    //     });
    // }