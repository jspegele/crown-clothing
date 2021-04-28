import styled from 'styled-components'

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
`

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
  }

  @media (min-width: 451px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
