import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import coffeeBlack from "../../../../../public/coffees/americano.png"
import { RegularText } from "../../../../components/Typography";
import { CounterInput } from "../../../../components/CounterInput";
import { Trash } from "phosphor-react";

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={coffeeBlack} alt="" />
        <div>
          <RegularText color="subtitle">Espresso Americano</RegularText>
          <ActionsContainer>
            <CounterInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              REMOVE
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>$ 4.90</p>
    </CoffeeCartCardContainer>

  )
}