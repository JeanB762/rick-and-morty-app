import { useState } from 'react';
import Link from 'next/link';
import { ArrowSquareOut } from 'phosphor-react';
import { SearchForm } from '@/components/SearchForm';
import { TableContainer, TableData } from '@/styles/pages/app';
import { useLocations } from '@/hooks/useLocations';

export default function Locations() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const { data, isLoading, error } = useLocations({ page, name: query });

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
          {data?.map((location) => {
            return (
              <tr key={location.id}>
                <td width='50%'>{location.name}</td>
                <td width='50%'>{location.dimension}</td>
                <td width='50%'>{location.type}</td>
                <td width='50%'>{location.name}</td>
                <td>
                  <Link href={`/locations/${location.id}`}>
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
