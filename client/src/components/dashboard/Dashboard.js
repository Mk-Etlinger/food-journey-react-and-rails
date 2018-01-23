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
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentWillMount() {
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ 
            windowWidth: window.innerWidth, 
            windowHeight: window.innerHeight 
        });
    }

    handleOnClick = (e) => {
        const component = componentList[e.target.id] || componentList[e.currentTarget.id]
        this.setState({
            activeComp: component
        })
    }

    render() {
        const { windowWidth, activeComp } = this.state
        const responsiveRender = windowWidth < 718 ? 'xsmall' : 'large'

        return (
            <div>
                <Header size='small'
                    colorIndex='grey-1'>
                    <Title margin='small'>
                        Root Journal
                    </Title>
                    <Box flex={ true }
                        justify='end'
                        direction='row'
                        responsive >
                        <Menu icon={ <UserIcon /> }
                            dropAlign={{ "right": "right" }}>
                            <Anchor href='#' >
                                Settings
                            </Anchor>
                            <Anchor href='#' >
                                Log Out
                            </Anchor>
                        </Menu>
                    </Box>
                </Header>
                <Split flex='right'
                    showOnResponsive='both' >
                        <PrimaryNavigation onClickCB={ this.handleOnClick } 
                            windowWidth={ windowWidth }
                            responsiveRender={ responsiveRender } />
                        <MainContent activeComp={ activeComp } />
                </Split>
            </div>
        )
    }
}
const componentList = {
    AddItem,
    ListContainer,
    DataContainer,
    RelationContainer
};