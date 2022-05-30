import React from 'react'
import { StyleGuide } from '../../theme/StyleGuide'

const DesktopContentContainer = ({title = 'Title', border, ...props}) => {

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
        fontWeight: 200
    },
    contentBordered: { 
      minHeight: '90vh',
      borderRadius: 20,
      borderTop: '1px solid black',
      width: '100%',
    }
  }



export default DesktopContentContainer