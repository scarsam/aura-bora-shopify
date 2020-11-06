import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import CarouselImage from './CarouselImage'
import ArrowBack from 'images/about/carousel/arrow-prev.svg'
import ArrowForward from 'images/about/carousel/arrow-next.svg'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

const Carousel = ({ testamonials }) => {
  const [testimonialCount, setTestimonialCount] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      const innerWidth = window.innerWidth
      let testimonialsToShow = 2
      if (innerWidth > 1300) testimonialsToShow = 3
      if (innerWidth < 768) testimonialsToShow = 1

      setTestimonialCount(testimonialsToShow)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div className="padding-top-40px padding-top-lg-50px padding-bottom-40px padding-bottom-lg-60px carousel">
      <CarouselProvider
        naturalSlideWidth={530}
        naturalSlideHeight={420}
        visibleSlides={testimonialCount}
        totalSlides={testamonials.length}
        infinite={true}
        isIntrinsicHeight={true}
        currentSlide={5}
        isPlaying={true}
        interval={10000}
      >
        <Slider className="padding-bottom-20px">
          {testamonials &&
            testamonials.map((item, index) => (
              <Slide key={index} index={index}>
                <div className="qoute-card bg-white d-flex align-items-center relative padding-bottom-20px">
                  <div className="body-4 c-black">
                    <ReactMarkdown source={item.text} />
                    <p className="margin-none body-4 font-barlow">
                      {item?.url ? (
                        <strong>
                          <a
                            class="c-black"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={item.url}
                          >
                            {item.author}
                          </a>
                        </strong>
                      ) : (
                        <strong>{item.author}</strong>
                      )}
                    </p>
                  </div>
                  <img
                    className="margin-none d-none d-md-block"
                    src={CarouselImage(index)}
                    alt="Quote illustration"
                  />
                </div>
              </Slide>
            ))}
        </Slider>
        <div className="container padding-top-50px padding-bottom-none padding-bottom-md-40px carousel-buttons">
          <div className="d-flex justify-content-center justify-content-md-between align-items-center">
            <ButtonBack className="carousel-prev-btn margin-left-5px d-flex">
              <img className="margin-none" src={ArrowBack} alt="Link back" />
            </ButtonBack>

            <DotGroup
              showAsSelectedForCurrentSlideOnly={true}
              className="carousel-dots"
            />
            <ButtonNext className="carousel-next-btn d-flex">
              <img className="margin-none" src={ArrowForward} alt="Link next" />
            </ButtonNext>
          </div>
        </div>
      </CarouselProvider>
    </div>
  )
}

export default Carousel
