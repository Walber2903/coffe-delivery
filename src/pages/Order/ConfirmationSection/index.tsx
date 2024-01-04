import { Button } from "../../../components/Button";
import { RegularText } from "../../../components/Typography";
import { ConfirmationSectionContainer } from "./styles";

export function ConfirmationSection() {
  return(
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total items</RegularText>
        <RegularText size="s">$ 14.70</RegularText>
      </div>

      <div>
        <RegularText size="s">delivery fee</RegularText>
        <RegularText size="s">$ 4.00</RegularText>
      </div>

      <div>
        <RegularText weight="700" color="subtitle" size="l">Total</RegularText>
        <RegularText weight="700" color="subtitle" size="l">$ 18.70</RegularText>
      </div>

      <Button text="confirm order" />
    </ConfirmationSectionContainer>

  );
}