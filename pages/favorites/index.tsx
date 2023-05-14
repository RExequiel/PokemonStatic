import { useEffect, useState } from "react";


import { Layout } from "@/components/layouts";
import { FavoritePokemons, NotFavorites } from "@/components/ui";
import { localFavorites } from "@/utils";

const FavoritesPage = () => {
  const [pokemonsFavorites, setPokemonsFavorites] = useState<number[]>([]);

  useEffect(() => {
    setPokemonsFavorites(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokémons | Favoritos">
      {pokemonsFavorites.length === 0 ? (
        <NotFavorites />
      ) : (
        <FavoritePokemons pokemonsFavorites={pokemonsFavorites}/>
      )}
    </Layout>
  );
};

export default FavoritesPage;
