import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { MagnifyingGlass } from 'phosphor-react';

import { SearchFormContainer } from './styles';

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

interface SearchFormProps {
  query: string;
  setQuerySearch: (value: string) => void;
}

export function SearchForm({ query, setQuerySearch }: SearchFormProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    setQuerySearch(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type='text'
        placeholder='Character Name'
        {...register('query')}
        defaultValue={query}
      />
      <button type='submit' disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
      </button>
    </SearchFormContainer>
  );
}
