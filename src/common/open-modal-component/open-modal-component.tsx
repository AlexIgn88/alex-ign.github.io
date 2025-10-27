import React, { useState } from 'react';
import s from './open-modal-component.module.scss';
import ModalWindow from '../modal-window/modal-window';

const OpenModalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState('text');

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={s.wrapper}>
      <input
        className={s.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={handleOpen} className={s.button}>
        {isOpen ? 'Close modal window' : 'Open modal window'}
      </button>
      <ModalWindow visible={isOpen} setVisible={setIsOpen}>
        <div className={s.content}>{text}</div>
      </ModalWindow>
    </div>
  );
};

export default OpenModalComponent;
