import { StyleSharp } from '@mui/icons-material'
import { fontWeight } from '@mui/system'
import React from 'react'
import ContentContainer from '../../../components/content-container'
import { StyleGuide } from '../../../theme/StyleGuide'
import SkillPill from './parts/SkillPill'
import Section from '../../../components/section'
import myData from '../../../data/myData'
import styled from 'styled-components'
import { device } from '../../../static/device'
import ContactMobile from '../contact-mobile'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column
  @media ${device.mediaMinLarge} {
    flex-direction: row
  }
`

const LeftContent = styled.div`
  width: 70%;
`

const RightContent = styled.div`
  width: 30%;
`

const Text = styled.span`
  color: grey;
  fontWeight: 300;
  fontSize: 12px;
  @media ${device.mediaMinLarge} {
    font-size: 20px;
    font-weight: 300;
  }
`

const TextContainer = styled.div`
  display: none;
  width: 95%;
  @media ${device.mediaMinLarge} {
    display: block;
    width: 80%;
  }
`
const DesktopContent = styled.div`
  display: none;

  @media ${device.mediaMinLarge} {
    display: block;
  }
`

const MobileContent = styled.div`
@media ${device.mediaMinLarge} {
  display: none;
}
`


const ProfileMobile = (props) => {

  console.log(props)
  return (
    <ContentContainer title='Profile'>
      <div style={styles.container}>
        <DesktopContent>
        <Wrapper>
          <LeftContent>
      
            <Section 
            title='Bio'
            content={
            <TextContainer>
              <Text>I am an entirely self-taught developer and have been coding since 2019. In July 2021 I left my place of employment to focus full time on freelance web development with the aim of gaining employment in this industry. I’m very proud at how much I have learnt in a relatively short space of time, and my colleagues have noted that I am a highly capable developer for the amount of time that I have been involved in development.</Text>
              <div style={{marginBottom: StyleGuide.spacingMedium}}/>
              <Text>I really enjoy working with React based applications and I am equally proficient working with React JS and React Native.  Most recently I have been working as a React Native developer for an app called Zeal Match. </Text>
              <div style={{marginBottom: StyleGuide.spacingMedium}}/>
              <Text>At Zeal I have played an integral part in designing and engineering user interfaces for their upcoming relaunch. The experience at Zeal has been invaluable to my progression as a developer. Although I have worked on a number of my own projects, the experience of working on a large TypeScript codebase, alongside multiple developers, has taught me a range of skills. I feel highly confident in leveraging this experience to take on more challenging jobs within development.</Text>
              <div style={{marginBottom: StyleGuide.spacingMedium}}/>
              <Text>My future coding goals include increasing my coding proficiency with Rust, in order to focus on building some Web3/Blockchain based projects.</Text>

            </TextContainer>


            }
            
            />
          </LeftContent>
          <RightContent>
   
                      <Section title='Skillset' 
                      content={
                        <div style={styles.skillsContainer}> 
                        {myData.skills.map((skill) => {
                          return (
                            <SkillPill skill={skill.skill} color={skill.color}/>
                          )
                        })}
                        </div>
                      }/>




          </RightContent>

        </Wrapper>
        </DesktopContent>
        <MobileContent>
        <div style={styles.bioContainer}>
          <Section 
          title='Bio' 
          content={
            <>
              <Text>I am an entirely self-taught developer and have been coding since 2019. In July 2021 I left my place of employment to focus full time on freelance web development with the aim of gaining employment in this industry. I’m very proud at how much I have learnt in a relatively short space of time, and my colleagues have noted that I am a highly capable developer for the amount of time that I have been involved in development.</Text>
              <div style={{marginBottom: StyleGuide.spacingMedium}}/>
              <Text>I really enjoy working with React based applications and I am equally proficient working with React JS and React Native.  Most recently I have been working as a React Native developer for an app called Zeal Match. </Text>
              <div style={{marginBottom: StyleGuide.spacingMedium}}/>
              <Text>At Zeal I have played an integral part in designing and engineering user interfaces for their upcoming relaunch. The experience at Zeal has been invaluable to my progression as a developer. Although I have worked on a number of my own projects, the experience of working on a large TypeScript codebase, alongside multiple developers, has taught me a range of skills. I feel highly confident in leveraging this experience to take on more challenging jobs within development.</Text>
              <div style={{marginBottom: StyleGuide.spacingMedium}}/>
              <Text>My future coding goals include increasing my coding proficiency with Rust, in order to focus on building some Web3/Blockchain based projects.</Text>
            </>
          }/>
        </div>
        <Section title='Skillset' 
        content={
          <div style={styles.skillsContainer}> 
          {myData.skills.map((skill) => {
            return (
              <SkillPill skill={skill.skill} color={skill.color}/>
            )
          })}
          </div>
        }/>
        </MobileContent>
        <div style={{width: '100%', textAlign: 'left', }}>
        <h2 style={{fontWeight: 300}}>Contact</h2>
        </div>
        <div style={{width: '100%', textAlign: 'left'}}>

        </div>
       
          
          <ContactMobile/>

          
   
        </div>
    </ContentContainer>
  )
}

const styles = {
    container: {
      width: '90%'
    },
    bioContainer: {
      width: '100%'
    },
    text: {
      color: 'grey',
      fontWeight: 300,
      fontSize: StyleGuide.typography.subhead.fontSize / 1.2,
    },
    skillsContainer: {
      borderRadius: 10,
      padding: 5,
      display: 'flex',
      flexWrap: 'wrap',
      width: 'fit-content'
    },
}

export default ProfileMobile