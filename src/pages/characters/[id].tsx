import { useCharacter } from '@/hooks/useCharacter';
import {
  Container,
  ContentBlock,
  Field,
  Image,
  Label,
  Value,
} from '@/styles/pages/characters';
import { useRouter } from 'next/router';

export default function Profile() {
  const router = useRouter();
  const characterId = router.query.id;

  const { data, isLoading, error } = useCharacter({ characterId });
  return (
    <Container>
      <Image src={data?.image} alt={data?.name} />
      <ContentBlock>
        <Field>
          <Label>Name:</Label>
          <Value>{data?.name}</Value>
        </Field>
        <Field>
          <Label>Status:</Label>
          <Value>{data?.status}</Value>
        </Field>
        <Field>
          <Label>Species:</Label>
          <Value>{data?.species}</Value>
        </Field>
        <Field>
          <Label>Gender:</Label>
          <Value>{data?.gender}</Value>
        </Field>
        <Field>
          <Label>Origin:</Label>
          <Value>{data?.origin.name}</Value>
        </Field>
        <Field>
          <Label>Location:</Label>
          <Value>{data?.location.name}</Value>
        </Field>
      </ContentBlock>
    </Container>
  );
}
