import styled from "styled-components";
import { colors } from "@/styles/colors";
import { Bold16CSS, Normal12CSS } from "@/components/ui/Typographies";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: calc(50% - 4px);
  height: auto;
  aspect-ratio: 177 / 242;
  border-radius: 32px;
`;

export const InfoContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const TitleTextSpan = styled.span`
  ${Bold16CSS}
  color: #ffffff;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const DateTextSpan = styled.span`
  ${Normal12CSS}
  color: ${colors.gray400};
  opacity: 0.8;
`;

export const PinButton = styled.div`
  position: absolute;
  right: 12px;
  top: 14px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
