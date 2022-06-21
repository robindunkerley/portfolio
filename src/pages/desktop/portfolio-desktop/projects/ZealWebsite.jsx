import React, {useState, useCallback, useEffect} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Blurb, Heading, Link, SectionLeft, SectionRight, SubHeading, TechSubheading, TextContainer, Wrapper } from '..';
import { myProjects } from '../../../../data/projects';
import styled from 'styled-components';
import { device } from '../../../../static/device';

const DotButton = ({ selected, onClick }) => (
  <button
    className={`embla__dot ${selected ? "is-selected" : ""}`}
    type="button"
    onClick={onClick}
  />
);

const Image = styled.img`
    width: 100%;
    height: 100%;
  aspect-ratio: 16/9;
  
  @media ${device.mediaMinLarge} {

  }
`

const ImageContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;


`

const ImageBorder = styled.div`
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    background-color: white;
    display: flex;
    justify-content: center;
    padding: 4%;
    border-radius: 10px;
    width: 90%;
    @media ${device.mediaMinLarge} {
        width: 500px;

    }
`

const ZealWebsite = () => {
    const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
  
  
    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
      embla
    ]);
  
    const onSelect = useCallback(() => {
      if (!embla) return;
      setSelectedIndex(embla.selectedScrollSnap());
      setPrevBtnEnabled(embla.canScrollPrev());
      setNextBtnEnabled(embla.canScrollNext());
    }, [embla, setSelectedIndex]);
  
    useEffect(() => {
      if (!embla) return;
      onSelect();
      setScrollSnaps(embla.scrollSnapList());
      embla.on("select", onSelect);
    }, [embla, setScrollSnaps, onSelect]);
  return (
    <Wrapper>
    <SectionLeft>
    <TextContainer>
      <Heading>Project</Heading>
      <SubHeading>{myProjects[1].projectName}</SubHeading>
    </TextContainer>
    <TextContainer>
      <Heading>Built Using...</Heading>
      <TechSubheading>{myProjects[1].techStack}</TechSubheading>
    </TextContainer>
    <TextContainer>
      <Heading>Project Brief</Heading>
      <Blurb>{myProjects[1].projectBrief}</Blurb>
    </TextContainer>
    <TextContainer>
      <Heading>Links</Heading>
      {myProjects[1].links.map((link) => {
        return  <Link href={link}>{link}</Link>
      })}

    </TextContainer>

  </SectionLeft>
  <SectionRight>
  <ImageContainer>

                {myProjects[1].images.map((image) => {
                    return (
                      <ImageBorder>
                        <Image src={image}/>
                      </ImageBorder>
                    )
                })}

     
      

    </ImageContainer>
  </SectionRight>
  </Wrapper>
  )
}

export default ZealWebsite