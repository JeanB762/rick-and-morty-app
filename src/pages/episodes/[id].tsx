import { CharacterCard } from '@/components/CharacterCard';
import { useCharacter } from '@/hooks/useCharacter';
import { useEpisode } from '@/hooks/useEpisode';
import { GridCardsContainer } from '@/styles/pages/app';
import { HeaderInfo } from '@/styles/pages/app';
import { useRouter } from 'next/router';

export default function Episode() {
  const router = useRouter();
  const episodeId = router.query.id;

  const { data, isLoading, error } = useEpisode({ episodeId });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  function Character({ characterId }: { characterId: string }) {
    const { data, status } = useCharacter({ characterId });

    if (status === 'error') return <p>Error :(</p>;
    if (data)
      return <CharacterCard href={`/characters/${characterId}`} {...data} />;
    return <></>;
  }

  return (
    <div>
      <>
        <HeaderInfo>
          <span>{data?.episode}</span>
          <span>{data?.name}</span>
          <span>{data?.air_date}</span>
        </HeaderInfo>
        <GridCardsContainer>
          {data?.characters.map((character) => {
            const characterUrlParts = character.split('/').filter(Boolean);
            const characterId = characterUrlParts[characterUrlParts.length - 1];
            return <Character key={characterId} characterId={characterId} />;
          })}
        </GridCardsContainer>
      </>
    </div>
  );
}
