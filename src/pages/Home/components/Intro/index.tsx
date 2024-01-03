import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles";
import introCoffeImg from "../../../../assets/intro-coffe.png";
import { RegularText } from "../../../../components/Typography";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import { useTheme } from "styled-components";

export function Intro() {
  const { colors } = useTheme();
  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Find the perfect coffee for any time of day
            </IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              With Coffee Delivery you receive your coffee wherever you are, anytime
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon 
              icon={<ShoppingCart weight="fill" />}
              text="Simple and secure purchase"
              iconType={colors["brand-yellow-dark"]}
            />
            <InfoWithIcon 
              icon={<Package weight="fill" />}
              text="Packaging keeps the coffee intact"
              iconType={colors["base-text"]}
            />
            <InfoWithIcon 
              icon={<Timer weight="fill" />}
              text="Fast and tracked delivery"
              iconType={colors["brand-yellow"]}
            />
            <InfoWithIcon 
              icon={<Coffee weight="fill" />}
              text="The coffee arrives fresh to you"
              iconType={colors["brand-purple"]}
            />
          </BenefitsContainer>
        </div>
        <img src={introCoffeImg} alt="" />
      </IntroContent>
    </IntroContainer>
  
  )
}