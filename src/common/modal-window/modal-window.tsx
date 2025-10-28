import React, { FC } from 'react';
import s from './modal-window.module.scss';

type Props = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  children: React.ReactNode;
};

const ModalWindow: FC<Props> = ({ visible, setVisible, children }) => {
  if (!visible) return null;

  return (
    <div className={s.mask}>
      <div className={s.window}>
        <div className={s.panel}>
          <button onClick={(visible) => setVisible(!visible)}>&#10006;</button>
        </div>
        <div className={s.content}>{children}</div>
      </div>
    </div>
  );
};

export default ModalWindow;
