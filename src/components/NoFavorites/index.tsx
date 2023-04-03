import Image from 'next/image';

import noFAvoritesImage from '../../assets/no-favorites.png';
import { NoFavoritesContainer, Subtitle, Title } from './styles';

export function NoFavoritesComponent() {
  return (
    <NoFavoritesContainer>
      <Title>No Favorites Yet</Title>
      <Subtitle>Choose some of your favorites characters</Subtitle>
      <Image src={noFAvoritesImage} alt='' height={350} />
    </NoFavoritesContainer>
  );
}
