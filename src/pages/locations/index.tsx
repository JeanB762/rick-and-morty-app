import { useState } from 'react';
import Link from 'next/link';
import { ArrowSquareOut } from 'phosphor-react';
import { SearchForm } from '@/components/SearchForm';
import {
  DataContainer,
  DataContent,
  DataInfo,
  DataWrapper,
} from '@/styles/pages/app';
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
      <DataContainer>
        <SearchForm
          query={query}
          setQuerySearch={changeQuery}
          placeholder='Search for a location'
        />
        {isLoading && <Loading />}
        {error && <NotFoundComponent />}
        <DataWrapper>
          {data?.results.map((location) => {
            return (
              <DataContent
                key={location.id}
                href={`/locations/${location.id}`}
                title='Go to location details'
              >
                <DataInfo>{location.name}</DataInfo>
                <DataInfo>{location.dimension}</DataInfo>
                <DataInfo>{location.type}</DataInfo>
              </DataContent>
            );
          })}
        </DataWrapper>
      </DataContainer>
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
