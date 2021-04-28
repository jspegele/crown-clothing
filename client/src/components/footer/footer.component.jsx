import React from "react"
import { Link } from "react-router-dom"

import {
  FooterOuterContainer,
  FooterContainer,
  FooterLinksContainer,
  FooterCopyrightContainer
} from "./footer.styles"

const Footer = () => {
  return (
    <FooterOuterContainer>
      <FooterContainer>
        <FooterLinksContainer>
          <div>
            <Link to="/shop/womens">Womens</Link>
            <Link to="/shop/mens">Mens</Link>
          </div>
          <div>
            <Link to="/shop/hats">Hats</Link>
            <Link to="/shop/jackets">Jackets</Link>
            <Link to="/shop/sneakers">Sneakers</Link>
          </div>
        </FooterLinksContainer>
        <FooterCopyrightContainer>
          <span>&copy; 2021 Crwn Clothing</span>
          <Link to="/contact">Contact</Link>
          <span>Privacy Policy</span>
        </FooterCopyrightContainer>
      </FooterContainer>
    </FooterOuterContainer>
  )
}
 
export default Footer