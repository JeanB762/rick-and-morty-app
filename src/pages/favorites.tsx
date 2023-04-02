import { CharacterCard } from '@/components/CharacterCard';
import { useCharacter } from '@/hooks/useCharacter';
import { GridCardsContainer } from '@/styles/pages/app';
import { useEffect, useState } from 'react';

export default function Favorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const favoriteIds = localStorage.getItem('favorites')?.split(',') || [];
    setFavorites(favoriteIds);
  }, []);

  function Character({ characterId }: { characterId: string }) {
    const { data, status } = useCharacter({ characterId });

    if (status === 'error') return <p>Something went wrong...</p>;
    if (data)
      return <CharacterCard href={`/characters/${characterId}`} {...data} />;
    return <></>;
  }

  return (
    <div>
      <>
        <GridCardsContainer>
          {favorites.map((characterId) => {
            return <Character key={characterId} characterId={characterId} />;
          })}
        </GridCardsContainer>
      </>
    </div>
  );
}
