import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowSquareOut } from 'phosphor-react';
import { SearchForm } from '@/components/SearchForm';
import { useEpisodes } from '@/hooks/useEpisodes';
import {
  DataContent,
  DataContainer,
  DataWrapper,
  DataInfo,
} from '@/styles/pages/app';
import Pagination from '@/components/Pagination/inedx';
import { NotFoundComponent } from '@/components/NotFound';
import { Loading } from '@/components/Loading';

export default function Episodes() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const { data, isLoading, error } = useEpisodes({ page, name: query });

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
          placeholder='Search for a episode'
        />
        {isLoading && <Loading />}
        {error && <NotFoundComponent />}
        <DataWrapper>
          {data?.results.map((episode) => {
            return (
              <DataContent
                key={episode.id}
                href={`/episodes/${episode.id}`}
                title='Go to episode details'
              >
                <DataInfo>{episode.name}</DataInfo>
                <DataInfo>{episode.episode}</DataInfo>
                <DataInfo>{episode.air_date}</DataInfo>
              </DataContent>
            );
          })}
        </DataWrapper>
        {data?.results && (
          <Pagination
            onNext={onNext}
            onPrev={onPrev}
            hasPrev={!!data?.info.prev}
            hasNext={!!data?.info.next}
          />
        )}
      </DataContainer>
    </>
  );
}
