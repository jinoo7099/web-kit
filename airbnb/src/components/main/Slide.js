import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Img = styled.img`
  min-width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
`

export default function Slide({ img }) {
  return <Img src={img} alt="room" />
}

Slide.propTypes = {
  img: PropTypes.string.isRequired,
}
