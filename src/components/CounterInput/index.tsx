import { Minus, Plus } from "phosphor-react";
import { CounterInputContainer, IconWrapper } from "./styles";

interface CounterInputProps {
  size?: "medium" | "small";
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function CounterInput({ onIncrease, onDecrease, quantity, size = "medium"}: CounterInputProps) {
  return(
    <CounterInputContainer size={size}>
      <IconWrapper disabled={quantity<=1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconWrapper>

      <input type="number" readOnly value={quantity} />

      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </CounterInputContainer>
  );
}