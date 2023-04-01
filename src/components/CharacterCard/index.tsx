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
  avatarUrl: string;
  name: string;
  location: string;
  species: string;
  status: string;
  gender: string;
}

export function CharacterCard({
  avatarUrl,
  name,
  location,
  species,
  status,
  gender,
}: CharacterCardProps) {
  return (
    <CardContainer>
      <Avatar src={avatarUrl} alt={name} />
      <Name>{name}</Name>
      <Location>{location}</Location>
      <InfoContent>
        <Info>{species}</Info>
        <Info>{status}</Info>
      </InfoContent>
      <Heart size={30} />
    </CardContainer>
  );
}
