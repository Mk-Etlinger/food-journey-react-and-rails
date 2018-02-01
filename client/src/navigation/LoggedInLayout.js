import React from 'react';
import { Route } from 'react-router-dom';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Title from 'grommet/components/Title';
import Anchor from 'grommet/components/Anchor';
import UserIcon from 'grommet/components/icons/base/User';

export const LoggedInLayout = ({ component: Component, ...props }) => {
  return (
    <Route { ...props } render={ matchProps => (
      <div className="LoggedInLayout">
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
				<Menu responsive icon={ <UserIcon /> }
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
				
			</Box>
		</Header>
          <Component { ...matchProps } />
      </div>
    )} />
  )
};