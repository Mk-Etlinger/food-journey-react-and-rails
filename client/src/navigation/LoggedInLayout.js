import React from 'react';
import { Route } from 'react-router-dom';
import { HeaderMenu } from './HeaderMenu';
import PrimaryNavigation from '../components/dashboard/PrimaryNavigation';
import MainContent from '../components/dashboard/MainContent';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';

export const LoggedInLayout = ({ component, ...props }) => {
	
  return (
    <Route { ...props } render={ matchProps => (
      <div className="LoggedInLayout">
		<HeaderMenu loggedIn={ true } />
		<Box flex>               
			<Split flex='right'
				showOnResponsive='both' >
				<Box style={{ height: '100%' }} 
					flex 
					colorIndex='light-2'>
					<PrimaryNavigation />
				</Box>
					<MainContent { ...matchProps }
						activeComp={ component } />
			</Split>
		</Box>
      </div>
    )} />
  )
};