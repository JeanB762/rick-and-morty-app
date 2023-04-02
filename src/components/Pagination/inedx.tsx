import { Button, PaginationContainer } from './styles';

interface PaginationProps {
  onNext: () => void;
  onPrev: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export default function Pagination({
  onNext,
  onPrev,
  hasPrev,
  hasNext,
}: PaginationProps) {
  return (
    <PaginationContainer>
      <Button onClick={onPrev} disabled={!hasPrev}>
        Prev
      </Button>
      <Button onClick={onNext} disabled={!hasNext}>
        Next
      </Button>
    </PaginationContainer>
  );
}
