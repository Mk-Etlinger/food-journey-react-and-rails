import React from 'react';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Title from 'grommet/components/Title';
import Anchor from 'grommet/components/Anchor';
import UserIcon from 'grommet/components/icons/base/User';
import DashboardIcon from 'grommet/components/icons/base/Dashboard';

export const HeaderMenu = ({ loggedIn, history }) => {
  return (
    <div className="HeaderMenu">
        <Header size='medium'
            colorIndex='grey-1'>
            <Title margin={{ left: 'large' }}>
                <Anchor path='/' >
                    Root Journal
                </Anchor>
            </Title>
            <Box flex 
                margin={{ right: 'small' }}
                justify='end'
                direction='row'
                responsive >
                { loggedIn && 
                    <Box onClick={ () => history.replace('/dashboard') }  
                        margin={{ right: 'small' }}
                        justify='center'>
                        <DashboardIcon />
                    </Box>
                }
                { loggedIn ? loggedInMenu : defaultMenu }
            </Box>
        </Header>
        
    </div>
    
  )
};

const loggedInMenu = (
    <Menu responsive
        icon={ <UserIcon /> }
        margin={{ right: 'medium' }}
        dropAlign={{ left: 'left', top: 'bottom' }}>
        <Anchor href='#' >
            Settings
        </Anchor>
        <Anchor 
            onClick={ () => localStorage.jwt = '' } 
            path='/' >
            Log Out
        </Anchor>
    </Menu>
)

const defaultMenu = (
    <Menu responsive icon={ <UserIcon /> }
        dropAlign={{ left: 'left', top: 'bottom' }}>
        <Anchor path='/login' >
            Login
        </Anchor>
    </Menu>
)

