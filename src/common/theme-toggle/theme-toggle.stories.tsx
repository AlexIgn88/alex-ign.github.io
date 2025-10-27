import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ThemeToggle from './theme-toggle';
import { ThemeProvider } from '../../app/theming/theme-provider';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ padding: '2rem', background: '#1e1e1e', minHeight: '100vh' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
