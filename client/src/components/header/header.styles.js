import styled from "styled-components"
import { Link } from "react-router-dom"

export const HeaderContainer = styled.div`
  display: flex;
  height: 70px;
  justify-content: space-between;
  margin-bottom: 25px;
  width: 100%;
`

export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 25px;
  width: 70px;
`

export const OptionsContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  width: 50%;
`

export const OptionLink = styled(Link)`
  cursor: pointer;
  margin-left: 10px;
  padding: 10px 15px;
`
