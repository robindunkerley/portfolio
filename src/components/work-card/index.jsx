import React from 'react'
import {StyleGuide} from '../../../../portfolio/src/theme/StyleGuide'
import ProjectListItem, {ProjectListItemBlurb, ProjectListItemLinks} from './parts/TextSection'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const links = ['https://robindunkerley.github.io/taconottaco.uk/']

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const {width} = getWindowDimensions()
const ratio = 228 / 362
const CARD_WIDTH = width * 1.2;
const CARD_HEIGHT = CARD_WIDTH * ratio;


function WorkCard({projectName, techStack, }) {

  return (

      <div className='work-card' style={styles.cardStyle}>
        <div className='image-section' style={styles.imageSection}>
          <img style={{height: '100%', width: '100%', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', objectFit: 'cover'}} src={require('../../assets/taconottaco-preview.png')}/>
        </div>

        <div className='text-section' style={styles.textSection}>
          <ProjectListItem heading='Project' subheading={projectName}/>
          <ProjectListItem heading='Built Using...' subheading={techStack}/>
          <ProjectListItemBlurb heading='Project Brief' 
          content='Project for a local food business. The brief was to create an easily expandable, stylistically minimal single page website with a modern feel.
          I met the demands of the brief by implementing a block based theme. This gave the site a modern feel, and also meant that the client could easily expand the page with more blocks.'/>
          <ProjectListItemLinks heading='Links' links={links}/>
        </div>
        <div style={styles.iconContainer}>
          <KeyboardArrowDownIcon htmlColor={StyleGuide.palette.grey} />
        </div>

        
      </div>


  )
}

const styles = {
    cardStyle: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '10px',
      height: CARD_WIDTH,
      width: CARD_HEIGHT,
      maxWidth: '400px',
      maxHeight: '500px',
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
      backgroundColor: 'white',
      overflow: 'hidden',
      marginTop: StyleGuide.spacingSmall,
      marginBottom: StyleGuide.spacingSmall
    },
    imageSection: {
      height: '39%',
    },
    textSection: {
      textAlign: 'left',
      padding: '15px',
      overflowY: 'auto',

    },
    iconContainer: {
      position: 'relative',
      height: '16px',
      bottom: 4
    }
}

export default WorkCard