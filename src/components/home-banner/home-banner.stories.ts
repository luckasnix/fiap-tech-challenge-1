import type { Meta, StoryObj } from "@storybook/nextjs";
import { HomeBanner, HomeBannerProps } from "./home-banner";

const meta: Meta<typeof HomeBanner> = {
  title: "Components/HomeBanner",
  component: HomeBanner,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Banner principal da home, exibindo um título em destaque e uma ilustração vetorial.

- Utiliza o componente \`VectorImage\` para exibir o SVG ilustrativo.
- Responsivo, com layout em coluna em telas pequenas.

**Props:**
- \`title\`: Texto exibido em destaque no banner.

**Exemplo de uso:**
\`\`\`tsx
<HomeBanner title="Gerencie suas finanças de forma simples e rápida!" />
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Texto exibido em destaque no banner",
      defaultValue: "Gerencie suas finanças de forma simples e rápida!",
    },
  },
};

export default meta;

type Story = StoryObj<HomeBannerProps>;

export const Default: Story = {
  args: {
    title: "Gerencie suas finanças de forma simples e rápida!",
  },
};
