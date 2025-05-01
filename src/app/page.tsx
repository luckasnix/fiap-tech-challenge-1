import { OnboardingBanner } from "../components/onboarding-banner/onboarding-banner";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <h1 className={styles.title}>FIAP - 1º Tech Challenge</h1> */}
      <OnboardingBanner text="Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!" />
    </div>
  );
}
