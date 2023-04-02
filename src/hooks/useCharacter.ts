import { useQuery, UseQueryResult } from 'react-query';
import { Character } from './useCharacters';

interface CharactersProps {
  characterId: string | string[] | undefined;
}
export function useCharacter({
  characterId,
}: CharactersProps): UseQueryResult<Character, Error> {
  return useQuery(['character', characterId], async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${characterId}`
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error('Cahracter not available');
    }
    return data;
  });
}
