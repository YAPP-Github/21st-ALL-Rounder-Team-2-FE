import {
  createContext,
  useContext,
  useState,
  useMemo,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
  ReactNode,
} from "react";
import useClickOutside from "@/hooks/useClickOutside";
import * as S from "./Select.styles";

type SelectContextProp = {
  value: string;
  onValueChange: (value: string) => void;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const SelectContext = createContext<SelectContextProp | undefined>(undefined);

type SelectProps = {
  className?: string;
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
};

export const Select = ({ className, value, onValueChange, children }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useMemo(
    () => ({ value, onValueChange, isOpen, setIsOpen }),
    [value, onValueChange, isOpen, setIsOpen]
  );

  const ref = useClickOutside(() => setIsOpen(false));

  return (
    <SelectContext.Provider value={context}>
      <S.Wrapper ref={ref} className={className}>
        {children}
      </S.Wrapper>
    </SelectContext.Provider>
  );
};

const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (context === undefined) throw new Error("should be used within Select");
  return context;
};

export const SelectTrigger = ({ className, children }: PropsWithChildren<{ className?: string }>) => {
  const { setIsOpen } = useSelectContext();
  return (
    <S.SelectTrigger className={className} type="button" onClick={() => setIsOpen((prev) => !prev)}>
      {children}
    </S.SelectTrigger>
  );
};

type SelectIconProp = {
  children: ReactNode | ((isOpen: boolean) => void);
};

export const SelectIcon = ({ children }: SelectIconProp) => {
  const { isOpen } = useSelectContext();
  return <>{typeof children === "function" ? children(isOpen) : children}</>;
};

export const SelectList = ({
  className,
  align = "center",
  children,
}: PropsWithChildren<{ className?: string; align?: "start" | "center" | "end" }>) => {
  const { isOpen } = useSelectContext();

  if (!isOpen) return null;
  return (
    <S.SelectList className={className} $align={align}>
      {children}
    </S.SelectList>
  );
};

export const SelectItem = ({
  className,
  value,
  children,
}: PropsWithChildren<{ className?: string; value: string }>) => {
  const { onValueChange, setIsOpen } = useSelectContext();

  const handleSelect = () => {
    onValueChange(value);
    setIsOpen(false);
  };

  return (
    <S.SelectItem className={className} onClick={handleSelect}>
      {children}
    </S.SelectItem>
  );
};

Select.Trigger = SelectTrigger;
Select.Icon = SelectIcon;
Select.List = SelectList;
Select.Item = SelectItem;

export default Select;
