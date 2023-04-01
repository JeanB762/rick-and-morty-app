import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`;

export const GridCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
  gap: 16px;
  margin: 2rem 0;
`;
