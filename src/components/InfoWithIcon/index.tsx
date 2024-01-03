import { ReactNode } from "react";
import { InfoWithIconContainer, IconContainer } from "./styles";

interface InfoWithIconProps {
  icon: ReactNode;
  text: string | ReactNode;
  iconType: string;
}

export function InfoWithIcon({icon, text, iconType}: InfoWithIconProps) {
  return (
    <InfoWithIconContainer>
      <IconContainer iconType={iconType}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  );
}