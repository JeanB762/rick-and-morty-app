import { Heart } from 'phosphor-react';
import FavoriteButton from '../FavoriteButton';
import {
  Avatar,
  CardContainer,
  CardLink,
  Info,
  InfoContent,
  Location,
  Name,
} from './style';

interface CharacterCardProps {
  id: number;
  image: string;
  name: string;
  location: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  href: string;
}

export function CharacterCard({
  image,
  name,
  location,
  species,
  status,
  href,
  id,
}: CharacterCardProps) {
  return (
    <CardContainer>
      <CardLink href={href}>
        <Avatar src={image} alt={name} />
        <Name>{name}</Name>
        <Location>{location.name}</Location>
        <InfoContent>
          <Info>{species}</Info>
          <Info>{status}</Info>
        </InfoContent>
      </CardLink>
      <FavoriteButton id={String(id)} />
    </CardContainer>
  );
}
