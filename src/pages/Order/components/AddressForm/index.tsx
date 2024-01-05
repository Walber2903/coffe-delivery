import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    }
  }
}

export function AddressForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  return (
    <AddressFormContainer>
      <Input placeholder="Zip Code" type="number" className="zip" {...register("zip")} error={errors.zip?.message} />
      <Input placeholder="Ave St Blvd Ln" className="street" {...register("street")} error={errors.street?.message} />
      <Input placeholder="Number" type="number" {...register("number")} error={errors.number?.message} />
      <Input placeholder="Complement" className="complement" {...register("complement")} error={errors.complement?.message} rightText="Optional" />
      <Input placeholder="City"  className="city" {...register("city")} error={errors.city?.message} />
      <Input placeholder="State" className="state" {...register("state")} error={errors.state?.message} />
    </AddressFormContainer>
  );
}