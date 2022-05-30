import React from 'react'
import myData from '../../../data/myData'
import ContentContainer from '../../../components/content-container'
import Section from '../../../components/section'
import { StyleGuide, MobileStyles} from '../../../theme/StyleGuide'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const openLink = (url) => {
    window.open(url, '_blank' )
}


const ContactMobile = () => {
  return (
        <div style={styles.iconContainer}>
            <IconButton onClick={() => openLink('mailto: robinddunkerley@gmail.com')}>
                <MailOutlineIcon htmlColor='grey'/>
            </IconButton>
            <IconButton onClick={() => openLink(myData.links.linkedIn)}>
                <LinkedInIcon htmlColor='grey'/>
            </IconButton>
            <IconButton onClick={() => openLink(myData.links.github)}>
                <GitHubIcon htmlColor='grey'/>
            </IconButton>

        </div>
  )
}

const styles = {
    contentContainer: {
        width: '100%',
    },
    linkContainer: {
        display: 'flex',
        flexDirection: 'row',
        ...MobileStyles.subheading
    },
    iconContainer: {

        display: 'flex',

        position: 'relative',
        bottom: 0,
        right: 0
    }
}

export default ContactMobile