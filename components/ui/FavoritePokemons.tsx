import { Container } from "@nextui-org/react";
import { FavoriteCardPokemon } from "../pokemon";
import { FC } from "react";

interface Props {
  pokemonsFavorites: number[];
}

const FavoritePokemons: FC<Props> = ({ pokemonsFavorites }) => {
  return (
    <Container display="flex" wrap="wrap">
      {pokemonsFavorites.map((id) => (
        <FavoriteCardPokemon key={id} id={id} />
      ))}
    </Container>
  );
};

export default FavoritePokemons;
