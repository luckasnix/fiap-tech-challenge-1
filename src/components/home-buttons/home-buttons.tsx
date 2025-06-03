"use client";

import { useWindowWidth } from "~/hooks/useWindowWidth";
import { Button } from "../button/button";
import styles from "./home-buttons.module.css";

export type HomeHeaderProps = Readonly<{
  items: Array<{
    label: string;
  }>;
}>;

export const HomeButtons = () => {
  const windowWidth = useWindowWidth();

  return (
    <div className={styles.buttons}>
      <Button
        variant="homePrimary"
        onClick={() => {
          console.log("Abrir minha conta");
        }}
      >
        {windowWidth > 720 ? "Abrir minha conta" : "Abrir conta"}
      </Button>

      <Button
        variant="homeSecondary"
        onClick={() => {
          console.log("Já tenho conta");
        }}
      >
        Já tenho conta
      </Button>
    </div>
  );
};
