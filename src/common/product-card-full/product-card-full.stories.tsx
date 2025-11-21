import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ProductCardFull from './product-card-full';

const meta: Meta<typeof ProductCardFull> = {
  title: 'Components/ProductCardFull',
  component: ProductCardFull,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ProductCardFullStory: Story = {
  args: {
    name: 'Gaming Laptop ASUS TUF F15',
    category: 'Electronics',
    description:
      'A high-performance gaming laptop featuring Intel Core i7, RTX 4070 GPU, 1TB SSD, and a 240Hz display. Designed for gamers and creators who demand power.',
    price: 1599.99,
    image: 'https://images.unsplash.com/photo-1610465299996-9a67d4d3e84b?w=800',
  },
};

export const WithCustomActions: Story = {
  args: {
    name: 'Smart OLED TV 55"',
    category: 'Home Appliances',
    description: '4K HDR display with AI upscaling, 120Hz refresh rate, and Dolby Atmos support.',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1593357849627-0416783f7828?w=800',
    actions: [
      <button key="compare" type="button">
        Compare
      </button>,
      <button key="favorite" type="button">
        Favorite
      </button>,
    ],
  },
};
