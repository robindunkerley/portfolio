import React, {useState, useCallback, useEffect} from 'react'
import styled from 'styled-components'
import { device } from '../../../static/device'
import DesktopContentContainer from '../../../components/desktop-content-container'
import { StyleGuide } from '../../../theme/StyleGuide'
import useEmblaCarousel from 'embla-carousel-react'
import { calmWeatherImages } from '../../../assets'
import Carousel from './parts/Carousel'
import { myProjects } from '../../../data/projects'
import ZealMatch from './projects/ZealMatch'
import CalmWeather from './projects/CalmWeather'


export const Wrapper = styled.div`
  padding-bottom: 4%;
  padding-top: 4%;
  border-bottom: 1px solid black;
  margin: 0 auto;
  flex-direction: column;
  width: 90%;
  height: 100%;
  display: flex;
  @media ${device.mediaMinLarge} {
    flex-direction: row;
  }
`

export const SectionLeft = styled.div`
  text-align: left;
  height: 100%;
  width: 100%;
 
  @media ${device.mediaMinLarge} {
    width: 60%;
    padding: 25px;
  }
`

export const TextContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  @media ${device.mediaMinLarge} {
    width: 90%;
  }
`

export const SectionRight = styled.div`
  height: 100%;
  @media ${device.mediaMinLarge} {
    width: 40%;
  }
`

export const Heading = styled.span`
  display: block;
  margin-bottom: ${StyleGuide.spacingMedium}px;
  font-weight: 300;
  font-size: 20px;
  color: ${StyleGuide.palette.black};
  @media ${device.mediaMinLarge} {
    font-size: 24px;
  }
`
export const SubHeading = styled.span`
  margin-bottom: ${StyleGuide.spacingLarge}px;
  display: block;
  font-weight: 400;
  font-size: 24px;
  color: grey;
  @media ${device.mediaMinLarge} {
    font-size: 32px;
  }
`

export const TechSubheading = styled.span`
  margin-bottom: ${StyleGuide.spacingLarge}px;
  display: block;
  font-weight: 400;
  font-size: 22px;
  color: grey;
  @media ${device.mediaMinLarge} {
    font-size: 28px;
  }
`

export const Blurb = styled.span`
  font-size: 16px;
  color: grey;
  font-weight: 300;
  @media ${device.mediaMinLarge} {
    font-size: 18px;
  }
`

export const Link = styled.a`
  font-size: 14px;
  fontWeight: 300;
  color: grey;

`

const PortfolioDesktop = () => {
  

  return (
    <DesktopContentContainer title='Portfolio'>
      <ZealMatch/>
      <CalmWeather/>


  
    </DesktopContentContainer>
  )
}

export default PortfolioDesktop