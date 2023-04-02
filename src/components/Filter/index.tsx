import Link from 'next/link';
import { FilterButtonContainer, FilterButton } from './style';
import { useRouter } from 'next/router';

export function Filter() {
  const router = useRouter();

  return (
    <FilterButtonContainer>
      <Link href='/'>
        <FilterButton
          className={
            router.pathname == '/' || router.pathname.includes('/characters')
              ? 'active'
              : ''
          }
        >
          Characters
        </FilterButton>
      </Link>
      <Link href='/episodes'>
        <FilterButton
          className={router.pathname.includes('/episodes') ? 'active' : ''}
        >
          Epsodes
        </FilterButton>
      </Link>{' '}
      <Link href='/locations'>
        <FilterButton
          className={router.pathname.includes(`/locations`) ? 'active' : ''}
        >
          Locations
        </FilterButton>
      </Link>{' '}
      <Link href='/favorites'>
        <FilterButton
          className={router.pathname == '/favorites' ? 'active' : ''}
        >
          Favorites
        </FilterButton>
      </Link>
    </FilterButtonContainer>
  );
}
