import React, { FC, ReactNode, useState } from 'react';
import clsx from 'clsx';
import s from './open-modal-component.module.scss';
import ModalWindow from '../modal-window/modal-window';

type TriggerRender = (params: { isOpen: boolean; toggle: () => void; value: string }) => ReactNode;
type RenderChildren = (params: { close: () => void; value: string }) => ReactNode;

type Props = {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  renderTrigger?: TriggerRender;
  children?: ReactNode | RenderChildren;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const OpenModalComponent: FC<Props> = ({
  value,
  defaultValue = 'text',
  onChange,
  isOpen,
  defaultOpen = false,
  onOpenChange,
  renderTrigger,
  children,
  inputProps,
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isValueControlled = value !== undefined;
  const textValue = isValueControlled ? value : internalValue;

  const updateValue = (nextValue: string) => {
    onChange?.(nextValue);
    if (!isValueControlled) {
      setInternalValue(nextValue);
    }
  };

  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpenControlled = isOpen !== undefined;
  const openState = isOpenControlled ? Boolean(isOpen) : internalOpen;
  const setOpenState = (next: boolean) => {
    onOpenChange?.(next);
    if (!isOpenControlled) {
      setInternalOpen(next);
    }
  };

  const toggleOpen = () => setOpenState(!openState);
  const closeModal = () => setOpenState(false);

  const { className: inputClassName, onChange: inputOnChange, ...restInputProps } = inputProps ?? {};

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    updateValue(event.target.value);
    inputOnChange?.(event);
  };

  const inputClassNames = clsx(s.input, inputClassName);
  const trigger = renderTrigger?.({ isOpen: openState, toggle: toggleOpen, value: textValue }) ?? (
    <button type="button" onClick={toggleOpen} className={s.button}>
      {openState ? 'Close modal window' : 'Open modal window'}
    </button>
  );

  const modalContent =
    typeof children === 'function' ? (children as RenderChildren)({ close: closeModal, value: textValue }) : children;

  return (
    <div className={s.wrapper}>
      <input
        {...restInputProps}
        className={inputClassNames}
        value={textValue}
        onChange={handleInputChange}
        placeholder={restInputProps.placeholder ?? 'Type something...'}
      />
      {trigger}
      <ModalWindow visible={openState} setVisible={setOpenState}>
        {modalContent ?? <div className={s.content}>{textValue}</div>}
      </ModalWindow>
    </div>
  );
};

export default OpenModalComponent;
