import styled from 'styled-components';

export const FilterButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 1rem 0;
  border-radius: 8px;
  margin-top: -2rem;
  background-color: ${({ theme }) => theme['gray-600']};

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }
`;

export const FilterButton = styled.button`
  height: 3rem;
  border: 0;
  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  @media (max-width: 600px) {
    padding: 0 1rem;
    height: 2rem;
    width: 100%;
  }

  &.active {
    background: ${({ theme }) => theme['green-300']};
    box-shadow: 0px 0px 20px 10px ${({ theme }) => theme['green-500']};
    -moz-box-shadow: 0px 0px 20px 10px ${({ theme }) => theme['green-500']};
    -webkit-box-shadow: 0px 0px 20px 10px ${({ theme }) => theme['green-500']};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['green-700']};
    transition: background-color 0.2s;
  }
`;
