import type { Meta, StoryObj } from "@storybook/nextjs";
import { FeatureHighlight, FeatureHighlightProps } from "./feature-highlight";

const meta: Meta<typeof FeatureHighlight> = {
  title: "Components/FeatureHighlight",
  component: FeatureHighlight,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Componente de destaque de funcionalidade, exibindo um ícone, título e descrição.

**Props:**
- \`title\`: Título do destaque.
- \`text\`: Descrição do destaque.
- \`iconName\`: Nome do ícone (deve existir em \`/public/images/icons/\`).
- \`alt\`: Texto alternativo para acessibilidade.

**Exemplo de uso:**
\`\`\`tsx
<FeatureHighlight
  title="Praticidade"
  text="Gerencie suas finanças de forma simples e rápida."
  iconName="praticidade"
  alt="Ícone de praticidade"
/>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Título do destaque",
      defaultValue: "Praticidade",
    },
    text: {
      control: "text",
      description: "Descrição do destaque",
      defaultValue: "Gerencie suas finanças de forma simples e rápida.",
    },
    iconName: {
      control: "text",
      description: "Nome do ícone (sem extensão)",
      defaultValue: "praticidade",
    },
    alt: {
      control: "text",
      description: "Texto alternativo para o ícone",
      defaultValue: "Ícone de praticidade",
    },
  },
};

export default meta;

type Story = StoryObj<FeatureHighlightProps>;

export const Default: Story = {
  args: {
    title: "Praticidade",
    text: "Gerencie suas finanças de forma simples e rápida.",
    iconName: "devices-icon",
    alt: "Ícone de praticidade",
  },
};
