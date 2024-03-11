import React, {
  FunctionComponent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';

import { ReactComponent as Arrow } from './assets/arrow.svg';

import styles from './Select.module.scss';
import { IOption, Option } from './components/Option';
import { DropdownTrigger } from './components/DropdownTrigger';
import { DropdownContent } from './components/DropdownContent';

interface ISelectProps {
  items: IOption[];
  defaultValue?: string;
}

export const SelectDropdown: FunctionComponent<ISelectProps> = ({
  items,
  defaultValue,
}) => {
  const trigerEl = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const [selected, setSelected] = useState<string | undefined>(defaultValue);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside: EventListener = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef]);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const selectOption: MouseEventHandler<HTMLLIElement> = (e) => {
    const target = e.currentTarget;
    const value = (target as HTMLLIElement).getAttribute('data-value');
    if (value) {
      setSelected(value);
    }
    toggleOpen();
  };

  const selectedItem =
    items.find((item) => item.id === selected)?.value ?? null;

  return (
    <>
      <DropdownTrigger ref={trigerEl}>
        <button onClick={toggleOpen} className={styles.button}>
          <div
            className={cn(styles.gradientBorder, { [styles.active]: isOpen })}
          >
            <div className={styles.background}>
              <div
                className={cn(styles.buttonContent, {
                  [styles.active]: isOpen,
                })}
              >
                {selectedItem}
              </div>
            </div>
          </div>
        </button>
      </DropdownTrigger>
      <DropdownContent
        ref={dropdownRef}
        isOpen={isOpen}
        triggerEl={trigerEl}
        className={styles.optionsList}
      >
        {items.map((item) => (
          <Option
            key={item.id}
            item={item}
            onClick={selectOption}
            className={styles.option}
          >
            <div className={styles.itemContainer}>
              <div className={styles.itemValue}>{item.value}</div>
              <div>
                <Arrow className={styles.itemIcon} />
              </div>
            </div>
          </Option>
        ))}
      </DropdownContent>
    </>
  );
};
