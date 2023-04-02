import { useState } from 'react';
import { CharacterCard } from '@/components/CharacterCard';
import { SearchForm } from '@/components/SearchForm';
import { useCharacters } from '@/hooks/useCharacters';
import { GridCardsContainer } from '@/styles/pages/app';

export default function Home() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const { data, isLoading, error } = useCharacters({ page, name: query });

  function changeQuery(query: string) {
    setQuery(query);
  }

  return (
    <>
      <SearchForm query={query} setQuerySearch={changeQuery} />
      {isLoading && <div>Loading...</div>}
      {error && <div>Error fetching characters: {error.message}</div>}
      <GridCardsContainer>
        {data?.map((character) => (
          <div key={character.id}>
            <CharacterCard
              image={character.image}
              location={character.location}
              name={character.name}
              species={character.species}
              status={character.status}
            />
          </div>
        ))}
        <button
          disabled={!!error}
          onClick={() => setPage((page) => (page > 1 ? page - 1 : 1))}
        >
          Prev
        </button>
        <button disabled={!!error} onClick={() => setPage((page) => page + 1)}>
          Next
        </button>
      </GridCardsContainer>
    </>
  );
}
