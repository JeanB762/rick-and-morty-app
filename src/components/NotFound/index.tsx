import Image from 'next/image';

import notFoundImage from '../../assets/not-found.png';
import { NotFoundContainer, Subtitle, Title } from './styles';

export function NotFoundComponent() {
  return (
    <NotFoundContainer>
      <Title>Resource not found</Title>
      <Subtitle>Please try again</Subtitle>
      <Image src={notFoundImage} alt='' height={350} />
    </NotFoundContainer>
  );
}
