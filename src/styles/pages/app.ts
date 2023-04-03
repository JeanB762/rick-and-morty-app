import Link from 'next/link';
import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 3rem;
`;

export const GridCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  justify-items: center;
  margin: 2rem 0;
  gap: 2rem;
`;

export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme }) => theme['gray-800']};
  border-top: 2px solid ${({ theme }) => theme['green-500']};
  border-radius: 8px;
  width: 100%;
  max-width: 1120px;
  margin-top: 1.5rem;
`;

export const DataContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const DataWrapper = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`;

export const DataContent = styled(Link)`
  display: flex;
  width: 100%;
  text-decoration: none;
  color: ${({ theme }) => theme['gray-100']};
  justify-content: space-between;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme['gray-800']};
  border-top: 2px solid ${({ theme }) => theme['green-500']};
  text-decoration: none;
  border-radius: 8px;
  &:hover {
    box-shadow: 0px 0px 10px 5px ${({ theme }) => theme['green-500']};
  }
  &:focus {
    box-shadow: 0 0 0 0 transparent;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const DataInfo = styled.div`
  flex: 1;
  padding: 1.25rem 2rem;
  text-align: center;

  svg {
    color: ${({ theme }) => theme['gray-100']};
  }
`;
