import type { Meta, StoryObj } from '@storybook/react';
import ItemsList from './items-list';
import { createRandomOperation, createRandomProduct } from 'src/homeworks/ts1/3_write';

const meta: Meta<typeof ItemsList> = {
  title: 'Components/ItemsList',
  component: ItemsList,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const randomDates = Array.from({ length: 10 }, () => {
  const d = new Date();
  d.setDate(d.getDate() - Math.floor(Math.random() * 60)); // в пределах 2 месяцев
  return d.toLocaleString();
});

const products = randomDates.map((date) => createRandomProduct(date));
const operations = randomDates.map((date) => createRandomOperation(date));

export const ProductsListPreview: Story = {
  args: {
    data: products,
    mode: 'preview',
  },
};

export const OperationsListPreview: Story = {
  args: {
    data: operations,
    mode: 'preview',
  },
};

export const ProductsListFull: Story = {
  args: {
    data: products,
    mode: 'full',
  },
};

export const OperationsListFull: Story = {
  args: {
    data: operations,
    mode: 'full',
  },
};
