import styles from "./onboarding-banner.module.scss";
import Image from "next/image";

export type OnboardingBannerProps = Readonly<{
  text: string;
}>;

export const OnboardingBanner = ({ text }: OnboardingBannerProps) => (
  <div className={styles.banner}>
    <p className={styles.textBanner}>{text}</p>

    <Image
      src="images/onboarding-banner.svg"
      layout="responsive"
      width={660}
      height={420}
      alt="Banner"
    />
  </div>
);
