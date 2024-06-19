import { getPokemonList } from '@/api/pokeapi';
import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonContextProps {
  pokemonList: Pokemon[];
}

export const PokemonContext = createContext<PokemonContextProps | undefined>(undefined);

const PokemonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const data = await getPokemonList();
        setPokemonList(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonList();
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemonList }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
