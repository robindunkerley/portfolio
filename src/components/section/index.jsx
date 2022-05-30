import React from 'react'
import { StyleGuide } from '../../theme/StyleGuide'

const Section = ({title, content}) => {
  return (
    <div style={styles.container}>
        <div style={styles.titleContainer}>
            <span style={styles.title}>{title}</span>
        </div>
        {!!content && content}
    </div>
  )
}

const styles = {
    container: {
        textAlign: 'left',
        // paddingLeft: StyleGuide.paddingHorizontal,
        // paddingRight:StyleGuide.paddingHorizontal,
        marginBottom: StyleGuide.spacingLarge * 1.8
    },
    titleContainer: {
        marginBottom: StyleGuide.spacingSmall / 2,
    },
    title: {
        fontSize: StyleGuide.typography.title3.fontSize / 1.2,
        fontWeight: 300,
        color: StyleGuide.palette.black
      },
}

export default Section