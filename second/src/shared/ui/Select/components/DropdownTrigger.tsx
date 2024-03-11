import React, { PropsWithChildren, forwardRef } from 'react';

export const DropdownTrigger = forwardRef<HTMLDivElement, PropsWithChildren>(
  (props, ref) => {
    return <div ref={ref}>{props.children}</div>;
  },
);
