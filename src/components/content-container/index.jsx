import React from 'react'
import { StyleGuide } from '../../theme/StyleGuide'

const ContentContainer = ({title = 'Title', ...props}) => {
  return (
    <div className='container' style={{width: '100vw', height: '90vh'}}>
       <div className='title-container' style={styles.titleContainer}>
            <span style={styles.title}>{title}</span>
       </div>
      <div style={styles.content}>
       {props.children}
       </div>
    </div>
  )
}

const styles = {
    titleContainer: {
        width: '100%',
        textAlign: 'left',
        marginTop: StyleGuide.spacingLarge * 1.5,
        marginBottom: StyleGuide.spacingMedium,
    },
    title: {
        ...StyleGuide.typography.title1,
        paddingLeft: StyleGuide.paddingHorizontal,
        fontWeight: 200
    },
    content: {
      paddingTop: StyleGuide.spacingLarge * 2,
      borderRadius: 20,
      display: 'flex',
      justifyContent: 'center',
      border: '0.5px solid black',
      height: '100%',
      width: '100%',

    }
}

export default ContentContainer