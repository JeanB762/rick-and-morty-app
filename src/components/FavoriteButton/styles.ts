import styled from 'styled-components';

export const StyledFavoriteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0 0 transparent;
  }

  svg {
    color: ${({ theme }) => theme['green-300']};
  }
`;
