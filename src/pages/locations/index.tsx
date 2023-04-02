import { useState } from 'react';
import Link from 'next/link';
import { ArrowSquareOut } from 'phosphor-react';
import { SearchForm } from '@/components/SearchForm';
import { TableContainer, TableData } from '@/styles/pages/app';
import { useLocations } from '@/hooks/useLocations';
import Pagination from '@/components/Pagination/inedx';
import { NotFoundComponent } from '@/components/NotFound';
import { Loading } from '@/components/Loading';

export default function Locations() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const { data, isLoading, error } = useLocations({ page, name: query });

  function changeQuery(query: string) {
    setQuery(query);
  }

  function onNext() {
    setPage(page + 1);
  }

  function onPrev() {
    setPage(page - 1);
  }

  return (
    <>
      <TableContainer>
        <SearchForm query={query} setQuerySearch={changeQuery} />
        {isLoading && <Loading />}
        {error && <NotFoundComponent />}
        <TableData>
          <tbody>
            {data?.results.map((location) => {
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
      </TableContainer>
      {data?.results && (
        <Pagination
          onNext={onNext}
          onPrev={onPrev}
          hasPrev={!!data?.info.prev}
          hasNext={!!data?.info.next}
        />
      )}
    </>
  );
}
