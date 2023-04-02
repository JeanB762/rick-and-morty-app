import type { Meta, StoryObj } from '@storybook/react';

import { CharacterCard } from '../components/CharacterCard';
import { string, number } from 'zod';

const meta: Meta<typeof CharacterCard> = {
  title: 'Example/CharacterCard',
  component: CharacterCard,
  tags: ['autodocs'],
  argTypes: {
    id: number,
    image: string,
    name: string,
    species: string,
    status: string,
    href: string,
  },
};

export default meta;
type Story = StoryObj<typeof CharacterCard>;

export const Primary: Story = {
  args: {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    href: `/characters/1`,
  },
  
};
