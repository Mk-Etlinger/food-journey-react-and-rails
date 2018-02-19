import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleSymptomModal } from '../../actions/symptoms/toggleSymptomModal';
import { toggleMealModal } from '../../actions/meals/toggleMealModal';
import MainContent from './MainContent';
import PrimaryNavigation from './PrimaryNavigation';
import Box from 'grommet/components/Box';
import Footer from 'grommet/components/Footer';

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        }
    }

    checkAuth()  {
        if (!localStorage.jwt) {
            this.props.history.push('/')
        }
    }

    componentDidMount() {
       this.checkAuth()
    }

    handleLogout = () => {
        localStorage.jwt = ''
    }

    render() {
        return (
            <Box style={{ boxSizing: 'border-box' }} 
                full
                colorIndex='light-2'
                pad='small'>
                <MainContent  { ...this.props }/>
                <PrimaryNavigation { ...this.props }/>
            </Box>
        )
    }
}

export default connect( null, { toggleMealModal, toggleSymptomModal })( Dashboard )