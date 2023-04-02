import React from 'react';
import { CharacterCard } from '../components/CharacterCard';

export const Card = () => {
  const character = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  };
  return (
    <>
      <CharacterCard
        href={`/characters/${character.id}`}
        key={character.id}
        image={character.image}
        location={character.location}
        name={character.name}
        species={character.species}
        status={character.status}
        id={character.id}
      />
      ;
    </>
  );
};
