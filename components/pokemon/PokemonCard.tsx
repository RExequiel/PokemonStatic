import { SmallPokemon } from "@/interfaces";
import { Card, Grid, Text, Row } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  pokemon: SmallPokemon;
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
  
  const router = useRouter();
  const onClick = () => {
    router.push(`name/${pokemon.name}`);
  };
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
      <Card hoverable clickable onClick={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={pokemon.img}
            width={120}
            height={120}
            alt={pokemon.name}
          />
        </Card.Body>
        <Card.Footer css={{ justifyItems: "flex-start" }}>
          <Row wrap="wrap" justify="space-between" align="center">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text
              css={{
                color: "$accents7",
                fontWeight: "$semibold",
                fontSize: "$sm",
              }}
            >
              #{pokemon.id}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
