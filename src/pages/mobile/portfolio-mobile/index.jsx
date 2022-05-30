import useEmblaCarousel from 'embla-carousel-react'
import React, {useState, useCallback, useEffect} from 'react'
import ContentContainer from '../../../components/content-container'
import WorkCard from '../../../components/work-card'
import './portfolio.css'

const DotButton = ({ selected, onClick }) => (
    <button
      className={`embla__dot ${selected ? "is-selected" : ""}`}
      type="button"
      onClick={onClick}
    />
  );

const PortfolioMobile = (props) => {
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
    <ContentContainer title='Portfolio' >
    <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
  
            <div className="embla__slide" key={0}>
                <WorkCard projectName='Taco Not Taco' techStack='React JS'/>
            </div>
            <div className="embla__slide" key={1}>
                <WorkCard projectName='Taco Not Taco' techStack='React JS'/>
            </div>
            <div className="embla__slide" key={2}>
                <WorkCard projectName='Taco Not Taco' techStack='React JS'/>
            </div>
            <div className="embla__slide" key={4}>
                <WorkCard projectName='Taco Not Taco' techStack='React JS'/>
            </div>

          </div>
        </div>

      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
    </div>
  </ContentContainer>
  )
}

export default PortfolioMobile