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

interface LocationsProps {
  locationId: string | string[] | undefined;
}

export function useLocation({
  locationId,
}: LocationsProps): UseQueryResult<Location, Error> {
  return useQuery(['location', locationId], async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/location/${locationId}`
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error('Location not available');
    }
    return data;
  });
}
