import React, {
  FunctionComponent,
  MouseEventHandler,
  PropsWithChildren,
} from 'react';

export interface IOption {
  id: string;
  value: string;
}

export interface IOptionProps {
  item: IOption;
  onClick: MouseEventHandler<HTMLLIElement>;
  className?: string;
}

export const Option: FunctionComponent<PropsWithChildren<IOptionProps>> = ({
  item,
  children,
  onClick,
  className,
}) => {
  return (
    <li data-value={item.id} className={className} onClick={onClick}>
      {children ? children : item.value}
    </li>
  );
};
