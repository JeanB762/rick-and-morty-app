import { useQuery, UseQueryResult } from 'react-query';

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

interface LocationsResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Location[];
}

interface LocationsProps {
  page: number;
  name?: string;
}

export function useLocations({
  page,
  name,
}: LocationsProps): UseQueryResult<LocationsResponse, Error> {
  return useQuery(['locations', page, name], async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/location/?page=${page}&name=${
        name ? name : ''
      }`
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error('Locations not available');
    }
    return data;
  });
}
