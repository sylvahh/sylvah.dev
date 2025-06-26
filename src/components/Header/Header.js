import React, { useContext } from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import Switch from '@mui/material/Switch';
import { Container, Div1, Div3, SocialIcons } from './HeaderStyles';
import { useState } from 'react';
import { appContext } from '../../styles/theme';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Header = () => {


  return (
		<Container>
			<Div1>
				<SocialIcons href="https://github.com/sylvahh">
					<AiFillGithub size="3rem" />
				</SocialIcons>
				<SocialIcons href="https://www.linkedin.com/in/sylvester-asoh/">
					<AiFillLinkedin size="3rem" />
				</SocialIcons>
				<SocialIcons href="https://twitter.com/justsylvah">
					<AiFillTwitterCircle size="3rem" />
				</SocialIcons>
			</Div1>
		</Container>
	);
}

export default Header;

