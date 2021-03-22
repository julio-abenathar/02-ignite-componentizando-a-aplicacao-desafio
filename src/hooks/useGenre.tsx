import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from "react";
import { api } from "../services/api";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface GenereContextData {
  selectedGenreId: number;
  setSelectedGenreId: (id: number) => void;
  selectedGenre: GenreResponseProps;
}

interface IGenreProviderProps {
  children: ReactNode;
}

const GenreContext = createContext<GenereContextData>({} as GenereContextData);

export function GenreProvider({ children }: IGenreProviderProps) {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  useEffect(() => {
    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data);
      });
  }, [selectedGenreId]);

  return (
    <GenreContext.Provider
      value={{ selectedGenreId, setSelectedGenreId, selectedGenre }}
    >
      {children}
    </GenreContext.Provider>
  );
}

export function useGenre() {
  const context = useContext(GenreContext);

  return context;
}
