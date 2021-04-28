import styled from "styled-components"
import { Link } from "react-router-dom"

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 769px) {
    flex-direction: row;
    height: 70px;
  margin-bottom: 25px;
  }
`

export const LogoContainer = styled(Link)`
  align-items: center;
  display: flex;
  height: 100%;
  padding: 0 10px;
  width: 100%;

  @media (min-width: 769px) {
    width: auto;
  }
`

export const OptionsContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin-top: 16px;

  @media (min-width: 769px) {
    justify-content: flex-end;
    margin-top: 0;
    width: 50%;
  }
`

export const OptionLink = styled(Link)`
  cursor: pointer;
  margin-left: 10px;
  padding: 10px;
  white-space: nowrap;

@media (min-width: 769px) {
  padding: 10px 15px;
}
`
