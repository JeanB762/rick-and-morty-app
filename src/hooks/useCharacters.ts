import { useQuery, UseQueryResult } from 'react-query';

export interface Character {
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

interface CharactersProps {
  page: number;
  name?: string;
}

export function useCharacters({
  page,
  name,
}: CharactersProps): UseQueryResult<Character[], Error> {
  return useQuery(['characters', page, name], async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${
        name ? name : ''
      }`
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error('Cahracters not available');
    }
    return data.results;
  });
}
