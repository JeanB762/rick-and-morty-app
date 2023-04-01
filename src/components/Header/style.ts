import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme['gray-900']};
  padding: 1rem 0;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const FilterButton = styled.button`
  height: 58px;
  border: 0;
  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  margin-top: 1.5rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['green-700']};
    transition: background-color 0.2s;
  }
`;
