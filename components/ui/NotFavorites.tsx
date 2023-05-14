import { Card, Col, Text } from "@nextui-org/react";

export const NotFavorites = () => (
  <Card
    css={{
      w: "400px",
      h: "400px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "5rem auto"
    }}
  >
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text
          css={{ textAlign: "center" }}
          size={30}
          weight="bold"
          color="#9E9E9E"
        >
          No hay Favoritos!
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0, opacity: 0.1 }}>
      <Card.Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        width="100%"
        height="100%"
        alt="pokemon"
      />
    </Card.Body>
  </Card>
);
