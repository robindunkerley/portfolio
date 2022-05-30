import React from 'react'
import { StyleGuide } from '../../../../theme/StyleGuide'

const SkillPill = ({skill, color = StyleGuide.palette.greyLight}) => {
    const skillPillStyle = {...styles.gridItem, backgroundColor: `rgba(${color}, 0.9)`}
    const colorArray = color.split(',').map((item) => {
        return parseInt(item, 10)
    })

    const red = colorArray[0]
    const green = colorArray[1]
    const blue = colorArray[2]
    const colorSum = red*0.299 + green*0.587 + blue*0.114
    const textColor = colorSum > 186 ? StyleGuide.palette.black : StyleGuide.palette.offWhite

    const textStyles = {...styles.skillText, color: textColor}
   
    

  return (
    <div style={skillPillStyle}>
        <span style={textStyles}>{skill}</span>
    </div>
  )
}

const styles = {
    gridItem: {
        margin: '4px',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '3px 5px 3px 5px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 5px, rgba(0, 0, 0, 0.24) 0px 1px 1px',
        backgroundColor: StyleGuide.palette.greyDark
      },
      skillText: {
        fontSize: StyleGuide.typography.caption.fontSize * 1.1,
        fontWeight: 300,
      }
}

export default SkillPill