import styles from "./onboarding-banner.module.scss";
import Image from "next/image";

export type OnboardingBannerProps = Readonly<{
  text: string;
}>;

export const OnboardingBanner = ({ text }: OnboardingBannerProps) => (
  <div className={styles.onboardingBanner}>
    <p className={styles.textBanner}>{text}</p>

    <Image
      src="images/onboarding-banner.svg"
      width={600}
      height={400}
      alt="Banner"
    />
  </div>
);
