import React from 'react'
import PropTypes from 'prop-types'
// import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'
import { ReactComponent as redStarIcon } from '../../assets/icons/redStar.svg'
import Slider from './Slider'

const Description = styled.div`
  display: block;
  max-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  color: #222222;
  word-break: break-all;
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  white-space: nowrap;
`

const TypeAndAddress = styled.div`
  color: #222222;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  max-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
`

const Grade = styled.div`
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`

// const ImageContainer = styled.div`
//   height: 200px;
//   contain: none;
//   background: #ffffff;
// `

const StarIcon = styled(redStarIcon)`
  height: 14px;
  width: 14px;
  fill: #ff385c;
  margin-right: 4px;
`

const Room = ({ address, grade, type, description, images }) => (
  <div>
    {/* <Carousel showThumbs={false} infiniteLoop showArrows>
      {images.map((item) => (
        <ImageContainer>
          <img
            src={item}
            alt="room"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '20px',
              objectFit: 'cover',
            }}
          />
        </ImageContainer>
      ))}
    </Carousel> */}
    <Slider img={images} />

    <Grade>
      <StarIcon />
      <span>{grade}</span>
    </Grade>
    <TypeAndAddress>
      {type}
      <span>·</span>
      {address}
    </TypeAndAddress>
    <Description>{description}</Description>
  </div>
)

Room.propTypes = {
  address: PropTypes.string.isRequired,
  grade: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Room
