import { useQuery, UseQueryResult } from 'react-query';

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface EpisodesResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Episode[];
}

interface EpisodesProps {
  page: number;
  name?: string;
}

export function useEpisodes({
  page,
  name,
}: EpisodesProps): UseQueryResult<EpisodesResponse, Error> {
  return useQuery(['episodes', page, name], async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode/?page=${page}&name=${
        name ? name : ''
      }`
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error('Episodes not available');
    }
    return data;
  });
}
