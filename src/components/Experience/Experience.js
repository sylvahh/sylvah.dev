import React from 'react';

import {ExternalLinks, GridContainer, Tag,} from './ExperienceStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Jobs, projects } from '../../constants/constants';
import {AiOutlineArrowRight} from 'react-icons/ai'

const Experience = () => (
  <Section nopadding id="projects">
    <SectionTitle main>Job Experiences 💼</SectionTitle>
    <GridContainer>
      {Jobs.map((p, i) => {
        return (
          <div key={i} style={{marginRight: '2em'}}>
            <ExternalLinks href={p.source}>{p.company}</ExternalLinks>
            <p style={{fontSize: 13, margin: '0.5em 0'}}>{p.role}</p>
            <p style={{fontSize: 13, margin: '0.5em 0'}}>{p.location}</p>
            <p style={{fontSize: 13}}>{p.time}</p>
            <p style={{fontSize: 13, margin: '1em 0', color: 'rgba(255, 255, 255, 0.5)'}}>{p.description}</p>
          </div>
        );
      })}
    </GridContainer>
  </Section>
);

export default Experience;
