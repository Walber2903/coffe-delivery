import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";

export function AddressForm() {
  return (
    <AddressFormContainer>
      <Input placeholder="Zip Code" type="number" className="zip" />
      <Input placeholder="Ave St Blvd Ln" className="street" />
      <Input placeholder="Number" type="number" />
      <Input placeholder="Complement" className="complement" />
      <Input placeholder="City"  className="city"/>
      <Input placeholder="State" className="state" />
    </AddressFormContainer>
  );
}