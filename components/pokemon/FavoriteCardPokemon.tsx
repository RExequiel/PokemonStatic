import { Grid, Card, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  id: number;
}

const FavoriteCardPokemon: FC<Props> = ({ id}) => {
  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <Grid onClick={onFavoriteClicked} css={{ m: 5 }}>
      <Card hoverable clickable>
        <Card.Body css={{ p: 5 }}>
          <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width={180}
            height={150}
            alt={`Pokémon ${id}`}
          />
        </Card.Body>
        <Card.Footer>
          <Row>
            <Text
              css={{
                color: "$accents7",
                fontWeight: "$semibold",
                fontSize: "$sm",
                textAlign: "center",
              }}
            >
              #{id}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default FavoriteCardPokemon;
