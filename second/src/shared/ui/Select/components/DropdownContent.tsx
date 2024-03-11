import React, { PropsWithChildren, RefObject, forwardRef } from 'react';
import { Portal } from './Portal';

import cn from 'classnames';

import styles from './DropdownContent.module.scss';

interface IDropdownContentProps {
  className?: string;
  triggerEl: RefObject<HTMLDivElement>;
  isOpen: boolean;
}

const defaultYOffset = 2;

export const DropdownContent = forwardRef<
  HTMLUListElement,
  PropsWithChildren<IDropdownContentProps>
>(({ triggerEl, children, isOpen, className = '' }, ref) => {
  const rect = triggerEl.current?.getBoundingClientRect();

  const width = rect ? rect.right - rect.left : 0;
  const y = rect ? rect.bottom + window.scrollY + defaultYOffset : 0;
  const x = rect ? rect.left + window.scrollX : 0;

  if (isOpen) {
    return (
      <Portal>
        <div
          data-id="dropdown-menu-background"
          className={styles.modalBackground}
        >
          <div className={styles.modalPosition}>
            <ul
              ref={ref}
              style={{
                width: width,
                left: x,
                top: y,
              }}
              className={cn(styles.modalContent, className)}
            >
              {children}
            </ul>
          </div>
        </div>
      </Portal>
    );
  }

  return null;
});
