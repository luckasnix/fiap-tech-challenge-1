import React from "react";
import styles from "./button-primary.module.scss";

export type ButtonPrimaryProps = Readonly<{
  label: string;
  onClick: () => void;
}>;

export const ButtonPrimary = ({ label }: ButtonPrimaryProps) => (
  <button className={styles.buttonPrimary}>{label}</button>
);
