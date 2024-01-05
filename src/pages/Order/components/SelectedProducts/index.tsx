import { TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { ConfirmationSection } from "../../ConfirmationSection";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { DetailsContainer, SelectedProductsContainer } from "./styles";

export function SelectedProducts() {
  const { cartItems } = useCart();

  return (
    <SelectedProductsContainer>
      <TitleText size="xs" color="subtitle">
        Selected coffees
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
          ))}
        <ConfirmationSection />
      </DetailsContainer>
    </SelectedProductsContainer>
  );
}