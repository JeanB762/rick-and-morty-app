import { CharacterCard } from '@/components/CharacterCard';
import { useCharacter } from '@/hooks/useCharacter';
import { useLocation } from '@/hooks/useLocation';
import { GridCardsContainer } from '@/styles/pages/app';
import { HeaderInfo } from '@/styles/pages/app';
import { useRouter } from 'next/router';

export default function Location() {
  const router = useRouter();
  const locationId = router.query.id;

  const { data, isLoading, error } = useLocation({ locationId });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  function Character({ characterId }: { characterId: string }) {
    const { data, status } = useCharacter({ characterId });

    if (status === 'error') return <p>Error :(</p>;
    if (data) return <CharacterCard {...data} />;
    return <></>;
  }

  return (
    <div>
      <>
        <HeaderInfo>
          <span>{data?.name}</span>
          <span>{data?.type}</span>
          <span>{data?.dimension}</span>
        </HeaderInfo>
        <GridCardsContainer>
          {data?.residents.map((character) => {
            const characterUrlParts = character.split('/').filter(Boolean);
            const characterId = characterUrlParts[characterUrlParts.length - 1];
            return <Character key={characterId} characterId={characterId} />;
          })}
        </GridCardsContainer>
      </>
    </div>
  );
}
