import { useQuery, UseQueryResult } from 'react-query';

export interface Episodes {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

interface EpisodesProps {
  page: number;
  name?: string;
}

export function useEpisodes({
  page,
  name,
}: EpisodesProps): UseQueryResult<Episodes[], Error> {
  return useQuery(['episodes', page, name], async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode/?page=${page}&name=${
        name ? name : ''
      }`
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error('Episode not available');
    }
    return data.results;
  });
}
