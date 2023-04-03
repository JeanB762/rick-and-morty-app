import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme['gray-800']};
  border-top: 2px solid ${({ theme }) => theme['green-500']};
  border-radius: 8px;
`;

export const ContentBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  margin: 2rem 0;
  gap: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }
`;

export const Image = styled.img`
  max-width: 15rem;
  margin-bottom: 16px;
  border-radius: 50%;
  margin-top: 2.5rem;

  @media (max-width: 600px) {
    width: 10rem;
  }
`;

export const Field = styled.div`
  display: flex;
  font-size: 1.5rem;
  gap: 0.5rem;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
  }
`;

export const Label = styled.span`
  font-weight: bold;
  margin-bottom: 8px;
  color: ${(props) => props.theme['gray-300']};
`;

export const Value = styled.span`
  font-size: 1.5rem;
  color: ${(props) => props.theme['green-300']};
  @media (max-width: 768px) {
    text-align: center;
  }
`;
