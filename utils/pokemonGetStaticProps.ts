import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";

const pokemonGetStaticProps = async (queryNameOrID: string) => {

  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${queryNameOrID}`);

    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };
  } catch (error) {
    return null;
  }
  
};

export default pokemonGetStaticProps;
