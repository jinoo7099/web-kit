import styled from 'styled-components'

export const MobileNav = styled.div`
  height: 60px;
  width: 100%;
  position: fixed;
  left: 0;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  z-index: 999;
  background: #ffffff;
  display:none;
  @media (max-width: 744px){
    display: block;
  }
`


export const MobileNavContainer = styled.div` 
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  display:flex;
  align-items: center;
  justify-content:space-between;
`

export const MobileNavSpan = styled.span`
  padding: 0 10px;
  font-weight: 600;
  text-align:center;
  vertical-align: middle;
  `

export const MobileNavButton = styled.button`
    cursor: pointer;
  height: 20px;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 24px;
`