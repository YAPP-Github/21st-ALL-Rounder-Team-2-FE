import * as S from "./Category.styles";

interface Props {
  text?: string;
  active: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export const Category = (props: Props) => {
  const { text, active, onClick } = props;
  return (
    <S.Wrapper $active={active} onClick={onClick}>
      {text}
    </S.Wrapper>
  );
};
