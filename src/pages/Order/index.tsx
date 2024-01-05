import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedProducts } from "./components/SelectedProducts";
import { CompleteOrderContainer } from "./styles";
import * as zod from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

enum PaymentMethod {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderValidationSchema = zod.object({
  zip: zod.string().min(5, 'Inform your Zip code.'),
  street: zod.string().min(1, 'Inform your Street.'),
  number: zod.string().min(1, 'Inform your Number.'),
  complement: zod.string(),
  city: zod.string().min(1, 'Inform your City.'),
  state: zod.string().min(1, 'Inform your State.'),
  paymentMethod: zod.nativeEnum(PaymentMethod, {
    errorMap:() => {
      return { message: "Inform the payment method" }
    }
  }),
})

export type OrderData = zod.infer<typeof confirmOrderValidationSchema>;

type ConfirmOrderData = OrderData;

export function OrderPage() {
  const confirmOrderForm = useForm<ConfirmOrderData>({
    resolver: zodResolver(confirmOrderValidationSchema)
  });

  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate();
  const { cleanCart } = useCart();

  function handleConfirmOrder(data: ConfirmOrderData) {
    navigate("/confirmed", {
      state: data,
    });
    cleanCart();
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer className="container" onSubmit={handleSubmit(handleConfirmOrder)}>
        <CompleteOrderForm />
        <SelectedProducts />
      </CompleteOrderContainer>
    </FormProvider>
  )
}