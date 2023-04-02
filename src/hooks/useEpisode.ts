import { useQuery, UseQueryResult } from 'react-query';
import { Episode } from './useEpisodes';

interface EpisodeProps {
  episodeId: string | string[] | undefined;
}
export function useEpisode({
  episodeId,
}: EpisodeProps): UseQueryResult<Episode, Error> {
  return useQuery(['episode', episodeId], async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode/${episodeId}`
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error('episode not available');
    }
    return data;
  });
}
