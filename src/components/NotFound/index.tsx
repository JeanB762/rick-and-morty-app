import Image from 'next/image';

import notFoundImage from '../../assets/not-found.png';
import { NotFoundCOntainer, Subtitle, Title } from './styles';

export function NotFoundComponent() {
  return (
    <NotFoundCOntainer>
      <Title>Resource not found</Title>
      <Subtitle>Please try again</Subtitle>
      <Image src={notFoundImage} alt='' height={400} />
    </NotFoundCOntainer>
  );
}
