import { CharacterCard } from '@/components/CharacterCard';
import { SearchForm } from '@/components/SearchForm';
import { QueryContext } from '@/context/QueryContext';
import { useCharacters } from '@/hooks/useCharacters';
import { GridCardsContainer } from '@/styles/pages/app';
import { useContext, useState } from 'react';

export default function Home() {
  const [page, setPage] = useState(1);
  const { query } = useContext(QueryContext);
  const { data, isLoading, error } = useCharacters({ page, name: query });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SearchForm />
      {error && <div>Error fetching characters: {error.message}</div>}
      <GridCardsContainer>
        {data?.map((character) => (
          <div key={character.id}>
            <CharacterCard
              avatarUrl={character.image}
              location={character.location.name}
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
