import { CharacterCard } from '@/components/CharacterCard';
import { NoFavoritesComponent } from '@/components/NoFavorites';
import { useCharacter } from '@/hooks/useCharacter';
import { GridCardsContainer } from '@/styles/pages/app';
import { useEffect, useState } from 'react';

export default function Favorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const favoriteIds = localStorage.getItem('favorites')?.split(',') || [];
    console.log('favoriteIds >> ', favoriteIds);
    if (favoriteIds.length > 0) {
      setFavorites(favoriteIds);
    } else {
      setFavorites([]);
    }
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
      <GridCardsContainer>
        {favorites.length ? (
          <>
            {favorites.map((characterId) => {
              return <Character key={characterId} characterId={characterId} />;
            })}
          </>
        ) : (
          <NoFavoritesComponent />
        )}
      </GridCardsContainer>
    </div>
  );
}
