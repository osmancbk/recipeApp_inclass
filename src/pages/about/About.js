import React from 'react'
import { AboutContainer, HeaderContainer, InfoContainer, StyledImage } from './AboutStyle';
import codingSvg from '../../assets/coding.svg';

const About = () => {
  return (
        <AboutContainer>
          <StyledImage src={codingSvg} alt="coding" />
          <HeaderContainer>
            <h1>
              About Software Developer <span>Oliver</span>
            </h1>
          </HeaderContainer>
          <InfoContainer>
            <h1>I'm Oliver.</h1>
            <h2>I’m currently learning Full-Stack Development Languages.</h2>
            <h2>
              I've already known JS, ReactJS, ReactNative, NodeJS, MongoDB,SQL,
              Python, AWS Services.
            </h2>
            <h2>
              <a href="mailto:oliver99@gmail.com">Send email</a> :
              oliver99@gmail.com
            </h2>
          </InfoContainer>
        </AboutContainer>
      );
    };
    
    export default About;