import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme }) => theme['gray-800']};
  border-top: 2px solid ${({ theme }) => theme['green-500']};
  border-radius: 8px;
  width: 12.5rem;
  height: 15.75rem;

  svg {
    color: ${({ theme }) => theme['green-300']};
  }
`;

export const InfoContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const Avatar = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin-bottom: 16px;
`;

export const Name = styled.h2`
  color: ${({ theme }) => theme['gray-300']};
  font-size: 1.25rem;
  margin-bottom: 8px;
`;

export const Location = styled.p`
  font-size: 0.875rem;
  text-align: center;
  color: ${({ theme }) => theme['green-300']};
  margin-bottom: 8px;
`;

export const Info = styled.p`
  font-size: 0.875rem;
  margin-bottom: 8px;
  color: ${({ theme }) => theme['green-300']};
`;