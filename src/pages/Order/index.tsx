import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedProducts } from "./components/SelectedProducts";
import { CompleteOrderContainer } from "./styles";

export function OrderPage() {
  return (
    <CompleteOrderContainer className="container">
      <CompleteOrderForm />
      <SelectedProducts />
    </CompleteOrderContainer>
  )
}