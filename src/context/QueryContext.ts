import { createContext } from 'react';

interface QueryContextType {
  query: string;
  setQuerySearch: (query: string) => void;
}

export const QueryContext = createContext({} as QueryContextType);
