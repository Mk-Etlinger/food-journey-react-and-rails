import React from 'react';
import { Route } from 'react-router-dom';
import { HeaderMenu } from '../components/reusables/HeaderMenu';
import Dashboard from '../components/dashboard/Dashboard';
import SymptomFormContainer from '../components/recents/SymptomFormContainer';
import MealFormContainer from '../components/recents/MealFormContainer';
import Box from 'grommet/components/Box';

export const LoggedInLayout = ({ component, ...props }) => {
	return (
		<Route { ...props } render={ matchProps => (
			<div className="LoggedInLayout">
				<Box full >
					<HeaderMenu history={ matchProps.history } loggedIn={ true } />
					<Box colorIndex='light-2' flex>
						<Dashboard { ...matchProps }
							activeComp={ component } />
					</Box>
					<MealFormContainer />
					<SymptomFormContainer />
				</Box>
			</div>
		)} />
	)
};

