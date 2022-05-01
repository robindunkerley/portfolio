import React from 'react'
import { StyleGuide } from '../../../theme/StyleGuide'

const ListItemHeading = ({content}) => {
    return (
        <>
            <span style={styles.heading}>{content}</span>
        </>
    )
}

const ListItemSubheading = ({content}) => {
    return (
        <>
            <span style={styles.subheading}>{content}</span>
        </>
    )
}

const Blurb = ({content}) => {
    return (
        <>
            <span style={styles.blurb}>{content}</span>

        </>
    )
}

const Links = ({links}) => {
    return (
    <>
    {links.map((link) => {
        return <a href={link} style={styles.blurb}>{link}</a>
    })}
    </>
    )
}

const ProjectListItem = ({heading, subheading}) => {
  return (
    <div className='text-container' style={styles.textContainer}>
        <ListItemHeading content={heading}/>
        <ListItemSubheading content={subheading}/>
    </div>
  )
}

export const ProjectListItemBlurb = ({heading, content}) => {
    return (
      <div className='text-container' style={styles.textContainer}>
          <ListItemHeading content={heading}/>
          <Blurb content={content}/>
      </div>
    )
  }

export const ProjectListItemLinks = ({links, heading}) => {
    return (
        <div className='text-container' style={styles.textContainer}>
            <ListItemHeading content={heading}/>
            <Links links={links}/>
        </div>
    )
}

const styles = {
    textSection: {
        textAlign: 'left',
        padding: '15px'
      },
      textContainer: {
        marginBottom: StyleGuide.spacingLarge,
        display: 'flex',
        flexDirection: 'column',
      },
      heading: {
        fontSize: StyleGuide.typography.subhead.fontSize,
        fontWeight: 300,
        marginBottom: StyleGuide.spacingSmall,
        color: StyleGuide.palette.black,
      },
      subheading: {
        fontSize: StyleGuide.typography.title3.fontSize / 1.2,
        fontWeight: 400,
        color: 'grey'
      },
      blurb: {
          fontSize: StyleGuide.typography.caption.fontSize * 1.2,
          fontWeight: 300,
          color: 'grey',

      }
}

export default ProjectListItem