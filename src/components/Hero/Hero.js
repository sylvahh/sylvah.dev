import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
	<>
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					Hi, i'm <span style={{ fontWeight: 900 }}>Sylvester.</span>
				</SectionTitle>
				<SectionText>
					<span style={{ color: "white", fontWeight: "900" }}>Software Engineer</span>: I write
					software with and for people.
				</SectionText>
				<SectionText>
					Get in touch 👉{" "}
					<a href="mailto:sylvesterchambers03@gmail.com" style={{ color: "white" }}>
						sylvesterchambers03@gmail.com
					</a>
				</SectionText>
			</LeftSection>
		</Section>
	</>
);

export default Hero;
