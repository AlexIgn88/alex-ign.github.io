import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ProductCardPreview from './product-card-preview';

const meta: Meta<typeof ProductCardPreview> = {
  title: 'Components/ProductCardPreview',
  component: ProductCardPreview,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ProductCardPreviewStory: Story = {
  args: {
    name: 'Wireless Headphones',
    description: 'Comfortable Bluetooth headphones with deep bass and 20 hours of battery life.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1580894894513-c52a3c3f1cda?w=600',
  },
};

export const WithCustomActions: Story = {
  args: {
    name: 'Smart Speaker',
    description: 'Voice-controlled speaker with premium sound and built-in assistant.',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600',
    actions: [
      <button key="details" type="button">
        Details
      </button>,
      <button key="wishlist" type="button">
        Add to wishlist
      </button>,
    ],
  },
};
