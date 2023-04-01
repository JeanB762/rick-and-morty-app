import { CharacterCard } from '@/components/CharacterCard';
import { GridCardsContainer } from '@/styles/pages/app';
import { useEffect, useState } from 'react';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results);
    }
    getData();
  }, []);

  useEffect(() => {
    console.log(characters);
  }, [characters]);

  return (
    <GridCardsContainer>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          avatarUrl={character.image}
          gender={character.gender}
          location={character.location.name}
          name={character.name}
          species={character.species}
          status={character.status}
        />
      ))}
    </GridCardsContainer>
  );
}
