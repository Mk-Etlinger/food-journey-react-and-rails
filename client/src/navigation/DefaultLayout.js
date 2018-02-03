import React from 'react';
import { HeaderMenu } from './HeaderMenu';
import { Route } from 'react-router-dom';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';

export const DefaultLayout = ({ component: Component, ...props }) => {
	return (
		<Route { ...props } render={ matchProps => (
			<Article>
				<HeaderMenu />
				<Box full colorIndex='light-2'>
					<Component { ...matchProps } />
				</Box>
			</Article>
		)} />
	)
};