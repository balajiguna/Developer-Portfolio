import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <section row nopadding>
    <LeftSection>
<SectionTitle main center>
 Welcome To <br/> 
 My Developer Portfolio

</SectionTitle>
<SectionText>
  I'm an Full Stack Developer, 
  I have a work Experience in Android Application development, I Completed Master's Degree in Computer Science.
   and I developed several IOS and Reactjs projects.!
</SectionText>
<Button onClick={() => window.location = 'https://Linkedin.com' }>Learn More</Button>
</LeftSection>
 </section>
);

export default Hero;