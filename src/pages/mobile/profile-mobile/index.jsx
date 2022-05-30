import { StyleSharp } from '@mui/icons-material'
import { fontWeight } from '@mui/system'
import React from 'react'
import ContentContainer from '../../../components/content-container'
import { StyleGuide } from '../../../theme/StyleGuide'
import SkillPill from './parts/SkillPill'
import Section from '../../../components/section'
import myData from '../../../data/myData'



const ProfileMobile = (props) => {

  console.log(props)
  return (
    <ContentContainer title='Profile'>
      <div style={styles.container}>
        <div style={styles.bioContainer}>
          <Section 
          title='Bio' 
          content={
            <>
              <span style={styles.text}>{myData.profile.para1}</span>
              <div style={{marginBottom: StyleGuide.spacingMedium}}/>
              <span style={styles.text}>{myData.profile.para2}</span>
              <div style={{marginBottom: StyleGuide.spacingMedium}}/>
              <span style={styles.text}>{myData.profile.para3}</span>
              <div style={{marginBottom: StyleGuide.spacingMedium}}/>
              <span style={styles.text}>{myData.profile.para4}</span>
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