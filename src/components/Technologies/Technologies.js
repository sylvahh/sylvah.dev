import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';


const Technologies = () =>  (
  <Section id="tech">
    <SectionTitle>Technologies</SectionTitle>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Javascript, Typescript, Go, Mql4
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Frameworks, Libraries, and Environments</ListTitle>
          <ListParagraph>
            React, React-Native, Express, Apollo (GraphQL), Next JS, Node JS, Golang, Vue, Nuxt, Angular, HTML5, CSS3, Tailwind CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
     <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Tools and Others</ListTitle>
          <ListParagraph>
            MongoDB, PostgreSQL, Docker, Git, GitHub, MySQL, Figma, Redux, Postman, Linux, Docker, Notion, Trello, WordPress
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
