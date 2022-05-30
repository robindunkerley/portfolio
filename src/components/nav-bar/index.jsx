import React from 'react'
import { StyleGuide } from '../../../../portfolio/src/theme/StyleGuide'
import {Link, NavLink, useNavigate} from 'react-router-dom'


function NavBar() {
  const navigate = useNavigate()

  return (
    <div style={styles.navbar}>
      <span style={styles.name}>Robin Dunkerley</span>
      <div style={styles.itemsContainer}>
        <NavLink style={styles.navItem}  to='/'>
          Profile
        </NavLink>
        <Link style={styles.navItem} to='/portfolio'>
          Portfolio
        </Link>
        <Link style={styles.navItem} to='/contact'>
          Contact
        </Link>
          
          
          
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
      flex: 0.7,

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