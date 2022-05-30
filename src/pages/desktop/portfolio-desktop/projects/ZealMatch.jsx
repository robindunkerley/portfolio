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
  max-width: 300px;
  @media ${device.mediaMinLarge} {
    max-width: 400px
  }
`

const ZealMatch = () => {
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
      <SubHeading>{myProjects[0].projectName}</SubHeading>
    </TextContainer>
    <TextContainer>
      <Heading>Built Using...</Heading>
      <TechSubheading>{myProjects[0].techStack}</TechSubheading>
    </TextContainer>
    <TextContainer>
      <Heading>Project Brief</Heading>
      <Blurb>{myProjects[0].projectBrief}</Blurb>
    </TextContainer>
    <TextContainer>
      <Heading>Links</Heading>
      {myProjects[0].links.map((link) => {
        return  <Link href={link}>{link}</Link>
      })}

    </TextContainer>

  </SectionLeft>
  <SectionRight>
  <>

                {myProjects[0].images.map((image) => {
                    return (
                      <div style={{height: '100%'}}>
                        <Image src={image}/>
                      </div>
                    )
                })}

     
      

      </>
  </SectionRight>
  </Wrapper>
  )
}

export default ZealMatch