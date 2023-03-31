import { HeaderContainer, HeaderContent } from './style';
import Image from 'next/image';
import logo from '../../assets/logo.png';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Image src={logo} height={80} alt='' />
      </HeaderContent>
    </HeaderContainer>
  );
}
