import styles from "./home-banner.module.scss";
import Image from "next/image";

export type HomeBannerProps = Readonly<{
  title: string;
  image: string;
  width: number;
  height: number;
  alt: string;
}>;

export const HomeBanner = ({
  title,
  image,
  width,
  height,
  alt,
}: HomeBannerProps) => (
  <div className={styles.homeBanner}>
    <p className={styles.bannerTitle}>{title}</p>

    <Image
      src={`/images/${image}.svg`}
      width={width}
      height={height}
      alt={alt}
    />
  </div>
);
