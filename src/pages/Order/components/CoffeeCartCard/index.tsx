import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import { RegularText } from "../../../../components/Typography";
import { CounterInput } from "../../../../components/CounterInput";
import { Trash } from "phosphor-react";
import { CartItem } from "../../../../contexts/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CoffeeCartCard({coffee}: CoffeeCartCardProps) {
  const { changeCartItemQuantity,removeCartItem } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease");
  }

  function handleRemove() {
    removeCartItem(coffee.id);
  }

  const coffeeTotal = coffee.price * coffee.quantity;

  const formattedPrice = formatMoney(coffeeTotal);

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`src/assets/coffees/${coffee.photo}`} alt="" />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <CounterInput size="small" onIncrease={handleIncrease} onDecrease={handleDecrease} quantity={coffee.quantity}/>
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVE
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>$ {formattedPrice}</p>
    </CoffeeCartCardContainer>

  )
}