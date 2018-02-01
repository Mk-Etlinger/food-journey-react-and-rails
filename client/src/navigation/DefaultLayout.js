import React from 'react';
import { Route } from 'react-router-dom';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Menu from 'grommet/components/Menu';
import Title from 'grommet/components/Title';
import Anchor from 'grommet/components/Anchor';
import UserIcon from 'grommet/components/icons/base/User';

export const DefaultLayout = ({ component: Component, ...props }) => {
  return (
    <Route { ...props } render={ matchProps => (
			<Article>
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
							<Anchor path='/login' >
								Login
							</Anchor>
						</Menu>
					</Box>
				</Header>
				<Box full colorIndex='light-2'>
					<Component { ...matchProps } />
				</Box>
			</Article>
    )} />
  )
};