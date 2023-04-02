import { useEffect, useState } from 'react';
import { CharacterCard } from '@/components/CharacterCard';
import { SearchForm } from '@/components/SearchForm';
import { useCharacters } from '@/hooks/useCharacters';
import { GridCardsContainer } from '@/styles/pages/app';
import Pagination from '@/components/Pagination/inedx';
import { NotFoundComponent } from '@/components/NotFound';
import { Loading } from '@/components/Loading';

export default function Home() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  const { data, isLoading, error } = useCharacters({ page, name: query });

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
      <SearchForm query={query} setQuerySearch={changeQuery} />
      {isLoading && <Loading />}
      {error && <NotFoundComponent />}
      <GridCardsContainer>
        {data?.results.map((character) => (
          <CharacterCard
            href={`/characters/${character.id}`}
            key={character.id}
            image={character.image}
            location={character.location}
            name={character.name}
            species={character.species}
            status={character.status}
            id={character.id}
          />
        ))}
      </GridCardsContainer>
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
