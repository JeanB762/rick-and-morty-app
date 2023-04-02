import styled from 'styled-components';

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  @media (max-width: 600px) {
    gap: 0.5rem;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 5rem;
    justify-content: center;

    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme['green-300']};
    color: ${({ theme }) => theme['green-300']};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    @media (max-width: 600px) {
      width: 3rem;
      padding: 0.5rem;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => theme['green-500']};
      border-color: ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`;
