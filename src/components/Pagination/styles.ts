import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

export const Button = styled.button`
  padding: 1rem;
  margin: 0 0.5rem;
  width: 5rem;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme['gray-800']};
  color: ${({ theme }) => theme['green-300']};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme['green-700']};
    color: ${({ theme }) => theme['gray-100']};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
