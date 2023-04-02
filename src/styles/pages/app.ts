import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
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

export const TableContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const TableData = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${({ theme }) => theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  svg {
    color: ${({ theme }) => theme['gray-100']};
  }
`;
