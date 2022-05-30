import React from 'react'
import { StyleGuide } from '../../../../portfolio/src/theme/StyleGuide'

const ContentContainer = ({title = 'Title', border, ...props}) => {

  // const contentStyle = border ? styles.contentBordered : {...styles.contentBordered, border: 'none'}
  return (
    <div className='container'>
       <div className='title-container' style={styles.titleContainer}>
            <span style={styles.title}>{title}</span>
       </div>
      <div style={styles.contentBordered}>
       {props.children}
       </div>
    </div>
  )
}

const styles = {
  container: {

  },
  titleContainer: {
      width: '100%',
      textAlign: 'left',
      marginTop: StyleGuide.spacingLarge * 1.5,
      marginBottom: StyleGuide.spacingMedium,
  },
  title: {
      ...StyleGuide.typography.title1,
      paddingLeft: StyleGuide.paddingHorizontal,
      fontWeight: 200,

  },
  contentBordered: {
    paddingTop: StyleGuide.spacingLarge * 2,
    paddingBottom: StyleGuide.spacingLarge * 2,
    marginBottom: StyleGuide.spacingLarge,
    minHeight: '400px',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderTop: '0.5px solid black',
    width: '100%',
  }
}

export default ContentContainer