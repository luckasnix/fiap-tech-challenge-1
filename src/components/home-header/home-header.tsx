"use client";

import { BrandLogo } from "../brand-logo/brand-logo";
import { Button } from "../button/button";
import { MenuNav } from "../menu-nav/menu-nav";
import styles from "./home-header.module.scss";

export type HomeHeaderProps = Readonly<{
  items: Array<{
    label: string;
  }>;
}>;

export const HomeHeader = () => {
  const navItems = [{ label: "Sobre" }, { label: "Serviços" }];

  return (
    <header className={styles.homeHeader}>
      <div className={`${styles.headerContainer} container`}>
        <div className={styles.headerLogo}>
          <BrandLogo />
          <MenuNav items={navItems} />
        </div>

        <div className={styles.headerButtons}>
          <Button
            variant="homePrimary"
            onClick={() => {
              console.log("Abrir minha conta");
            }}
          >
            Abrir minha conta
          </Button>

          <Button
            variant="homeSecondary"
            onClick={() => {
              console.log("Abrir minha conta");
            }}
          >
            Já tenho conta
          </Button>
        </div>
      </div>
    </header>
  );
};
