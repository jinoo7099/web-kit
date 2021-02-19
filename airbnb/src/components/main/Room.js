import React from 'react'
import PropTypes from 'prop-types'
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

const StarIcon = styled(redStarIcon)`
  height: 14px;
  width: 14px;
  fill: #ff385c;
  margin-right: 4px;
`

export default function Room({ address, grade, type, description, images }) {
  return (
    <div>
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
}

Room.propTypes = {
  address: PropTypes.string.isRequired,
  grade: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
}
