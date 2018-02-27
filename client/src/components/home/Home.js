import React, { Component } from 'react';
import { connect } from 'react-redux';
import { spinUpHeroku } from '../../actions/spinUpHeroku';
import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Image from 'grommet/components/Image';
import LoginIcon from 'grommet/components/icons/base/Login';
import Card from 'grommet/components/Card';
import heroImage from '../../images/food_journey_landing_photo_large.jpg';

class Home extends Component {

    checkAuth()  {
        // when added to redux store
        // if localStorage.jwt === this.props.jwt
        if (localStorage.jwt) {
            this.props.history.push('/dashboard')
        }
    }

    componentDidMount() {
        this.props.spinUpHeroku()
        this.checkAuth()
    }

    render() {        
        return (
            <Hero background={ <Image src={ heroImage }
                full
                align={{ "bottom": true }}
                fit='cover' />} 
                backgroundColorIndex='dark'>
                <Box direction='row'
                    justify='center'
                    align='center'>
                    <Box basis='1/2'
                        align='start'
                        pad='medium' />
                    <Box flex 
                        basis='1/2'
                        justify='start'
                        align='center'
                        margin={{ bottom: 'large' }}>
                        <Card margin='small' 
                            textSize='medium'
                            heading='Root Journal'
                            description='A simple food journaling app to get your health on track' />
                        <Button icon={ <LoginIcon /> }
                            plain
                            label='Login / Register'
                            path='/login' />
                            
                    </Box>
                </Box>
            </Hero>
        )
    }
}

export default connect(null, { spinUpHeroku })(Home)
