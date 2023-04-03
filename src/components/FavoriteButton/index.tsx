import { Heart } from 'phosphor-react';
import { useState } from 'react';
import { StyledFavoriteButton } from './styles';

interface ButtonProps {
  id: string;
  size?: number;
}

export default function FavoriteButton({ id, size }: ButtonProps) {
  const [isFavorite, setIsFavorite] = useState(
    typeof window !== 'undefined'
      ? localStorage.getItem('favorites')?.includes(id)
      : false
  );

  const handleFavoriteClick = () => {
    let favorites = localStorage.getItem('favorites')?.split(',') || [];

    if (isFavorite) {
      favorites = favorites.filter((favoriteId) => favoriteId !== id);
    } else {
      favorites.push(id);
    }
    console.log('favorites button: ', favorites);
    if (favorites.length > 0) {
      localStorage.setItem('favorites', favorites.join(','));
    } else {
      localStorage.removeItem('favorites');
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <StyledFavoriteButton
      onClick={handleFavoriteClick}
      title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFavorite ? (
        <Heart size={size || 24} weight='fill' />
      ) : (
        <Heart size={size || 24} />
      )}
    </StyledFavoriteButton>
  );
}
