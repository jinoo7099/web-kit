import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Slide from './Slide'
import { NextSvg, PreviousSVG } from '../atoms/icons/icon'

const Container = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
  @media (min-width: 744px) {
    height: 200px;
  }
`

const RightButton = styled.button`
  all: unset;
  position: absolute;
  right: 0;
  top: 170px;
  border: 1px solid transparent;
  padding: 10px 15px;
  color: black;
  border-radius: 50px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #ffffff;
    color: black;
  }
  @media (min-width: 744px) {
    top: 70px;
    right: 0;
  }
`

const LeftButton = styled.button`
  all: unset;
  border: 1px solid transparent;
  position: absolute;
  left: 0;
  top: 170px;
  padding: 10px 15px;
  color: black;
  border-radius: 50px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #ffffff;
    color: black;
  }
  @media (min-width: 744px) {
    top: 70px;
    left: 0;
  }
`
const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

export default function Slider({ img }) {
  const TOTAL_SLIDES = img.length
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideRef = useRef(null)
  const nextSlide = () => {
    if (currentSlide === TOTAL_SLIDES - 1) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  }
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES - 1)
    } else {
      setCurrentSlide(currentSlide - 1)
    }
  }
  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out'

    slideRef.current.style.transform = `translateX(-${currentSlide}00%)` // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide])
  return (
    <Container>
      <SliderContainer ref={slideRef}>
        {img && img.map((item) => <Slide img={item} alt="room" />)}
      </SliderContainer>
      <div>
        <LeftButton onClick={prevSlide}>
          <PreviousSVG />
        </LeftButton>
        <RightButton onClick={nextSlide}>
          <NextSvg />
        </RightButton>
      </div>
    </Container>
  )
}

Slider.propTypes = {
  img: PropTypes.arrayOf(PropTypes.string).isRequired,
}
