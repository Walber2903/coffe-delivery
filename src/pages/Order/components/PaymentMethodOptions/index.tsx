import { PaymentMethodInputContainer, PaymentMethodOptionsContainer } from "./styles";
import { Bank, CreditCard, Money } from "phosphor-react";

export function PaymentMethodOptions() {
  return (
    <PaymentMethodOptionsContainer>
      <PaymentMethodInputContainer>
        <CreditCard size={16} />
        Credit Card
      </PaymentMethodInputContainer>
      <PaymentMethodInputContainer>
        <Bank size={16} />
        Debit Card
      </PaymentMethodInputContainer>
      <PaymentMethodInputContainer>
        <Money size={16} />
        Money
      </PaymentMethodInputContainer>
    </PaymentMethodOptionsContainer>
  );
}