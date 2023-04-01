import {
  ButtonContainer,
  FilterButton,
  HeaderContainer,
  HeaderContent,
} from './style';
import Image from 'next/image';
import logo from '../../assets/logo.png';
import Link from 'next/link';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Image src={logo} height={60} alt='' />
        <ButtonContainer>
          <Link href='/'>
            <FilterButton>Personagens</FilterButton>
          </Link>
          <Link href='/episodes'>
            <FilterButton>Epsódios</FilterButton>
          </Link>{' '}
          <Link href='/location'>
            <FilterButton>Lugares</FilterButton>
          </Link>{' '}
          <Link href='/favorites'>
            <FilterButton>Favoritos</FilterButton>
          </Link>
        </ButtonContainer>
      </HeaderContent>
    </HeaderContainer>
  );
}
