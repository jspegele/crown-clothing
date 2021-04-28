import styled from "styled-components"

export const FooterOuterContainer = styled.div`
  margin-top: auto;
`

export const FooterContainer = styled.div`
  border-top: 1px solid #7a7a7a;
  color: #4a4a4a;
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  line-height: 1.8rem;
  margin-top: 40px;
  padding: 20px;

  a {
    color: #4a4a4a;

    &:hover {
      color: #121212;
      text-decoration: underline;
    }
  }

  @media (min-width: 1025px) {
    padding: 20px 60px;
  }
`

export const FooterLinksContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    flex-direction: column;
  }

  & > div:first-child {
    margin-right: 20px;
  }

  @media (min-width: 451px) {
    flex-direction: row;
  }

@media (min-width: 769px) {
  & > div:first-child {
    margin-right: 60px;
  }
}
`

export const FooterCopyrightContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`