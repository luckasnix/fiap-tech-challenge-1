import styles from "./feature-highlight.module.scss";
import Image from "next/image";

export type FeatureHighlightProps = Readonly<{
  title: string;
  text: string;
  iconName: string;
  alt: string;
}>;

export const FeatureHighlight = ({
  title,
  text,
  iconName,
  alt,
}: FeatureHighlightProps) => (
  <div className={styles.featureHighlight}>
    <Image
      src={`/images/icons/${iconName}.svg`}
      width={56}
      height={56}
      alt={alt}
    />

    <p className={styles.titleHighlight}>{title}</p>
    <p className={styles.textHighlight}>{text}</p>
  </div>
);
