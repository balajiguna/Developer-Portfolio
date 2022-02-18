import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <section id="tech">
<SectionDivider divider />
<SectionTitle>Technologies</SectionTitle>
<SectionText>
  I've worked with diffrent projects such as Android , IOS , And Machine Learning.
  <br/>
      <br />
 Known Languages : Python , Kotlin , Java , Reactjs , Swift , Next Js. 
      <br />
      <br />
 Known Tools And IDE's : Android Studio, Xcode , VSCode, Pycharm , Netbeans.     
</SectionText>
<List>
  <ListItem>
    <picture>
    <DiReact size={"3rem"}/>
    </picture>
    <ListContainer>
      <ListTitle>Front-End</ListTitle>
      <ListParagraph>
        Experieence with <br/>
        Kolin and swift
      </ListParagraph>
    </ListContainer>
  </ListItem>
      <ListItem>
        <picture>
        <DiFirebase size={"3rem"}/>
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experieence with <br />
            Django and Flask
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
        <DiZend size={"3rem"}/>
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experieence with <br />
            tools like Adobe Xd
          </ListParagraph>
        </ListContainer>
      </ListItem>
</List>
<SectionDivider colorAlt/>
 </section>
);

export default Technologies;
