import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react';
import coffeLogoImg from "../../assets/coffe-delivery-logo.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={coffeLogoImg} alt="" />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Recife, PE
          </HeaderButton>

          <NavLink to="order">
            <HeaderButton variant="yellow">
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}