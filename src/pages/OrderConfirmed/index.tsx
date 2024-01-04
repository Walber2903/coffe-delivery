import { RegularText, TitleText } from "../../components/Typography";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import confirmedOrderImage from "../../assets/confirmed-order.svg";
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";

export function OrderConfirmedPage() {
  const { colors } = useTheme();
  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Order confirmed</TitleText>
        <RegularText size="l" color="subtitle">Now just wait and the coffee will soon reach you.</RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconType={colors["brand-purple"]}
            text={
              <RegularText>
                Delivery in <strong>Riverside Ave, 798</strong>
                <br />
                Schenectady - NY 12302
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconType={colors["brand-yellow"]}
            text={
              <RegularText>
                Delivery forecast
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconType={colors["brand-yellow-dark"]}
            text={
              <RegularText>
                Payment on delivery
                <br />
                <strong>Credit Card</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>

        <img src={confirmedOrderImage} alt="" />
      </section>
    </OrderConfirmedContainer>
  );
}