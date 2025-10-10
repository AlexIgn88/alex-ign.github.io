import type { Meta } from '@storybook/react';

import ModalWindow from './modal-window';
import React from 'react';

const meta: Meta<typeof ModalWindow> = {
  title: 'Components/ModalWindow',
  component: ModalWindow,
  tags: ['autodocs'],
  argTypes: {
    visible: { description: 'Видимость модального окна' },
    children: { description: 'Дочерний компонент' },
  },
};

export default meta;

export const Visible = {
  args: {
    visible: true,
    children: <div>Контент модального окна</div>,
  },
};
