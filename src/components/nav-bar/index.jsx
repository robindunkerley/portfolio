import React from 'react'
import { StyleGuide } from '../../theme/StyleGuide'


function NavBar() {

  return (
    <div style={styles.navbar}>
      <span style={styles.name}>Robin Dunkerley</span>
      <div style={styles.itemsContainer}>
          <span style={styles.navItem}>Portfolio</span>
          <span style={styles.navItem}>Bio</span>
          <span style={styles.navItem}>Contact</span>
      </div>
    </div>
  )
}

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '8vh',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
        paddingLeft: StyleGuide.paddingHorizontal, 
        paddingRight: StyleGuide.paddingHorizontal,
        backgroundColor: StyleGuide.palette.offWhite
    },
    name: {
      display: 'flex',
      alignItems: 'center',
      fontSize: StyleGuide.typography.callout.fontSize,
      fontWeight: 300
    },
    itemsContainer: {
      flex: 0.6,
      maxWidth: '400px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    navItem: {
      fontSize: StyleGuide.typography.callout.fontSize / 1.25,
      margin: '0 2px 0 2px',
      fontWeight: 300,
      textDecoration: 'underline'
    }
}

export default NavBar