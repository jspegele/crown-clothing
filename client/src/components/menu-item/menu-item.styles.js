import styled from 'styled-components'

export const MenuItemContainer = styled.div`
  align-items: center;
  border: 1px solid black;
  display: flex;
  flex: 1 1 auto;
  height: ${({ size }) => (size ? '380px' : '240px')};
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;
  width: 100%;

  &:hover {
    cursor: pointer;

    .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    .content {
      opacity: 0.9;
    }
  }

  &.large {
    height: 380px;
    min-width: 40%;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media (min-width: 769px) {
    min-width: 30%;
    width: auto;
  }
`

export const BackgroundImageContainer = styled.div`
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
`

export const ContentContainer = styled.div`
  align-items: center;
  background-color: white;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 90px;
  justify-content: center;
  opacity: 0.7;
  padding: 0 25px;
  position: absolute;
`

export const ContentTitle = styled.span`
  color: #4a4a4a;
  font-size: 22px;
  font-weight: bold;
  margin: 0 6px 0;
`

export const ContentSubtitle = styled.span`
  font-size: 16px;
  font-weight: lighter;
`
