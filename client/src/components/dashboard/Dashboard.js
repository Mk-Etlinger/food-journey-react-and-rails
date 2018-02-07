import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleSymptomModal } from '../../actions/symptoms/toggleSymptomModal';
import { toggleMealModal } from '../../actions/meals/toggleMealModal';
import MainContent from './MainContent';
import PrimaryNavigation from './PrimaryNavigation';
import DashboardView from './DashboardView';
import RecentsContainer from '../addItem/RecentsContainer';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Heading from 'grommet/components/Heading';
import PieChartIcon from 'grommet/components/icons/base/PieChart';
import BookIcon from 'grommet/components/icons/base/Book';
import AddCircleIcon from 'grommet/components/icons/base/AddCircle';
import InheritIcon from 'grommet/components/icons/base/Inherit';

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        }
    }

    handleLogout = () => {
        localStorage.jwt = ''
    }

    render() {
        const { activeComp } = this.props
        return (
            <Box style={{ boxSizing: 'border-box' }} 
                full
                colorIndex='light-2'
                pad='medium'>
                <MainContent  { ...this.props }/>
                <PrimaryNavigation { ...this.props }/>
            </Box>
        )
    }
}

export default connect( null, { toggleMealModal, toggleSymptomModal })( Dashboard )