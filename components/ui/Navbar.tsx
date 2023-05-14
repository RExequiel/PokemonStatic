import { useTheme, Text, Spacer, Link } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();

  const styles = {
    display: "flex",
    width: "100%",
    padding: "0 1rem",
    alignItems: "center",
    justifyContent: "start",
    backgroundColor: theme?.colors.gray900.value,
  };

  return (
    <div style={styles}>
      <NextLink href="/">
        <Image
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
          }
          alt="logotipo de la app"
          width={70}
          height={70}
        />
      </NextLink>

      <NextLink href="/">
        <Text color="white" h3>
          Pokémon App
        </Text>
      </NextLink>
      <Spacer style={{ flex: 1 }} />
      <NextLink href="/favorites">
        <Text color="white" h3>
          Favoritos
        </Text>
      </NextLink>
    </div>
  );
};
