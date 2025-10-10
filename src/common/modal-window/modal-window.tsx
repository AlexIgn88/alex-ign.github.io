import React, { FC } from 'react';
import s from './modal-window.module.scss';

type Props = {
  visible: boolean;
  children: React.ReactNode;
};

const ModalWindow: FC<Props> = ({ visible, children }) => {
  if (!visible) return null;

  return (
    <div className={s.mask}>
      <div className={s.window}>
        <div className={s.panel}>
          <button>Close</button>
        </div>
        <div className={s.content}>{children}</div>
      </div>
    </div>
  );
};

export default ModalWindow;
