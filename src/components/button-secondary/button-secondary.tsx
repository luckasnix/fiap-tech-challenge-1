import React from "react";
import styles from "./button-secondary.module.scss";

export type ButtonSecondaryProps = Readonly<{
  label: string;
  onClick: () => void;
}>;

export const ButtonSecondary = ({ label }: ButtonSecondaryProps) => (
  <button className={styles.buttonSecondary}>{label}</button>
);
