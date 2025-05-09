<<<<<<< Updated upstream
=======
// import { FeatureHighlight } from "~/components/feature-highlight/feature-highlight";
// import { OnboardingBanner } from "../components/onboarding-banner/onboarding-banner";
import { ButtonSecondary } from "~/components/button-secondary/button-secondary";
>>>>>>> Stashed changes
import styles from "./page.module.css";
import { ButtonPrimary } from "~/components/button-primary/button-primary";
import { BrandLogo } from "~/components/brand-logo/brand-logo";
import { MenuNav } from "~/components/menu-nav/menu-nav";
import { OnboardingBanner } from "~/components/onboarding-banner/onboarding-banner";
import { FeatureHighlight } from "~/components/feature-highlight/feature-highlight";

export default function Home() {
  const featureHighlightsItems = [
    {
      title: "Conta e cartão gratuitos",
      text: "Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.",
      iconName: "gift-icon",
    },
    {
      title: "Saques sem custo",
      text: "Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.",
      iconName: "withdraw-icon",
    },
    {
      title: "Programa de pontos",
      text: "Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!",
      iconName: "star-icon",
    },
    {
      title: "Seguro Dispositivos",
      text: "Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.",
      iconName: "devices-icon",
    },
  ];

  return (
    <div className={styles.page}>
<<<<<<< Updated upstream
      <h1 className={styles.title}>FIAP - 1º Tech Challenge</h1>
=======
      {/* <h1 className={styles.title}>FIAP - 1º Tech Challenge</h1> */}
      {/* <OnboardingBanner text="Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!" />
      <FeatureHighlight
        title={"Conta e cartão gratuitos"}
        text={
          "Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção."
        }
        iconName={"gift-icon.png"}
      /> */}

      <div className={styles.header}>
        <div className={styles.headerLogo}>
          <BrandLogo />
          <MenuNav items={[{ label: "Sobre" }, { label: "Serviços" }]} />
        </div>

        <div className={styles.headerButtons}>
          <ButtonPrimary
            label={"Abrir minha conta"}
            onClick={() => {
              console.log("Abrir minha conta");
            }}
          />

          <ButtonSecondary
            label={"Abrir minha conta"}
            onClick={() => {
              console.log("Abrir minha conta");
            }}
          />
        </div>
      </div>

      <div className={styles.content}>
        <OnboardingBanner text="Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!" />

        <div className={styles.highlightsContainer}>
          <p className={styles.highlightTitle}>Vantagens do nosso banco:</p>

          <div className={styles.highlightsItems}>
            {featureHighlightsItems.map((item, index) => (
              <FeatureHighlight
                key={index}
                title={item.title}
                text={item.text}
                iconName={item.iconName}
              />
            ))}
          </div>
        </div>
      </div>
>>>>>>> Stashed changes
    </div>
  );
}
