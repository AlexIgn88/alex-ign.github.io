import type { Meta, StoryObj } from '@storybook/react';
import Header from './header';
import { ThemeProvider } from '../../app/theming/theme-provider';
import LanguageProvider from '../../app/localization/language-provider';
import React from 'react';
import '../../app/App.css';

const meta: Meta<typeof Header> = {
  title: 'Components/Header (with i18n + theme)',
  component: Header,
  decorators: [
    (Story) => (
      <LanguageProvider>
        <ThemeProvider>
          <div style={{ padding: '20px', background: '#f3f4f6', borderRadius: '12px' }}>
            <Story />
          </div>
        </ThemeProvider>
      </LanguageProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
