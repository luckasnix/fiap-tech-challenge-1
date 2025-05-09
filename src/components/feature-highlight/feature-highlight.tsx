import styles from "./feature-highlight.module.scss";
import Image from "next/image";

export type FeatureHighlightProps = Readonly<{
  title: string;
  text: string;
  iconName: string;
}>;

export const FeatureHighlight = ({
  title,
  text,
  iconName,
}: FeatureHighlightProps) => (
  <div className={styles.featureHighlight}>
    <Image
      src={`/images/icons/${iconName}.svg`}
      layout="fixed"
      width={56}
      height={56}
      alt="Highlight Icon"
    />

    <p className={styles.titleHighlight}>{title}</p>
    <p className={styles.textHighlight}>{text}</p>
  </div>
);
