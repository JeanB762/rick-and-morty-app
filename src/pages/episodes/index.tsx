import { useState } from 'react';
import Link from 'next/link';
import { ArrowSquareOut } from 'phosphor-react';
import { SearchForm } from '@/components/SearchForm';
import { useEpisodes } from '@/hooks/useEpisodes';
import { TableContainer, TableData } from '@/styles/pages/app';

export default function Episodes() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const { data, isLoading, error } = useEpisodes({ page, name: query });

  function changeQuery(query: string) {
    setQuery(query);
  }

  return (
    <TableContainer>
      <SearchForm query={query} setQuerySearch={changeQuery} />
      {isLoading && <div>Loading...</div>}
      {error && <div>Error fetching characters: {error.message}</div>}
      <TableData>
        <tbody>
          {data?.map((episode) => {
            return (
              <tr key={episode.id}>
                <td width='50%'>{episode.name}</td>
                <td>{episode.episode}</td>
                <td>{episode.air_date}</td>
                <td>
                  <Link href={`/episodes/${episode.id}`}>
                    <ArrowSquareOut size={30} weight='fill' />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </TableData>
      <button
        disabled={!!error}
        onClick={() => setPage((page) => (page > 1 ? page - 1 : 1))}
      >
        Prev
      </button>
      <button disabled={!!error} onClick={() => setPage((page) => page + 1)}>
        Next
      </button>
    </TableContainer>
  );
}
