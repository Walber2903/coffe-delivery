import { TitleText } from "../../../../components/Typography";
import { ConfirmationSection } from "../../ConfirmationSection";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { DetailsContainer, SelectedProductsContainer } from "./styles";

export function SelectedProducts() {
  return (
    <SelectedProductsContainer>
      <TitleText size="xs" color="subtitle">
        Selected coffees
      </TitleText>

      <DetailsContainer>
        <CoffeeCartCard />
        <CoffeeCartCard />
        <CoffeeCartCard />

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedProductsContainer>
  );
}