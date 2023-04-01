import { SearchForm } from '@/components/SearchForm';
import { QueryContext } from '@/context/QueryContext';
import { useEpisodes } from '@/hooks/useEpisodes';
import {
  TransactionsContainer,
  TransactionsTable,
} from '@/styles/pages/episodes';
import { useContext, useState } from 'react';

export default function Episodes() {
  const [page, setPage] = useState(1);
  const { query } = useContext(QueryContext);
  const { data, isLoading, error } = useEpisodes({ page, name: query });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <TransactionsContainer>
      <SearchForm />
      <TransactionsTable>
        <tbody>
          {data?.map((episode) => {
            return (
              <tr key={episode.id}>
                <td width='50%'>{episode.name}</td>
                <td>{episode.episode}</td>
                <td>{episode.air_date}</td>
              </tr>
            );
          })}
        </tbody>
      </TransactionsTable>
      <button
        disabled={!!error}
        onClick={() => setPage((page) => (page > 1 ? page - 1 : 1))}
      >
        Prev
      </button>
      <button disabled={!!error} onClick={() => setPage((page) => page + 1)}>
        Next
      </button>
    </TransactionsContainer>
  );
}
