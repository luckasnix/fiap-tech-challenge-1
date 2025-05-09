import React from "react";
import Image from "next/image";
import styles from "./brand-logo.module.scss";

export const BrandLogo = () => (
  <div className={styles.brandLogo}>
    <Image
      src="/images/bytebank-logo.svg"
      alt="Bytebank Logo"
      width={150}
      height={50}
    />
  </div>
);
