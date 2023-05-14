import { NextUIProvider } from "@nextui-org/react";
import styles from "../styles/Globals.module.css";
import type { AppProps } from "next/app";
import { theme } from "@/themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
