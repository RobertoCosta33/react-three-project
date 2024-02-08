import { CharactersAnimationsProvider } from "@/contexts/CharactersAnimations/CharactersAnimations";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CharactersAnimationsProvider>
      <Component {...pageProps} />
    </CharactersAnimationsProvider>
  );
}
