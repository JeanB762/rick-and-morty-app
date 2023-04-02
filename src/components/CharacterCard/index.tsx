import { Heart } from 'phosphor-react';
import {
  Avatar,
  CardContainer,
  Info,
  InfoContent,
  Location,
  Name,
} from './style';

interface CharacterCardProps {
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
}: CharacterCardProps) {
  return (
    <CardContainer href={href}>
      <Avatar src={image} alt={name} />
      <Name>{name}</Name>
      <Location>{location.name}</Location>
      <InfoContent>
        <Info>{species}</Info>
        <Info>{status}</Info>
      </InfoContent>
      <Heart size={30} />
    </CardContainer>
  );
}
