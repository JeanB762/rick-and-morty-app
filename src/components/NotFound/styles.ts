import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  margin-top: 2rem;
  background-color: ${({ theme }) => theme['gray-100']};
  border-top: 4px solid ${({ theme }) => theme['green-500']};
  border-radius: 8px;
`;

export const Title = styled.h2`
  font-size: 3rem;
  color: ${({ theme }) => theme['gray-700']};
`;

export const Subtitle = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme['gray-700']};
`;
