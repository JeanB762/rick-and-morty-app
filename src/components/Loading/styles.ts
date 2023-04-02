import styled from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  margin-top: 2rem;
  background-color: ${({ theme }) => theme['gray-600']};
  border-top: 4px solid ${({ theme }) => theme['green-500']};
  border-radius: 8px;
`;

export const Spinner = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
