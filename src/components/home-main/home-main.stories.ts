import type { Meta, StoryObj } from "@storybook/nextjs";
import { HomeMain } from "./home-main";

const meta: Meta<typeof HomeMain> = {
  title: "Components/HomeMain",
  component: HomeMain,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Seção principal da página inicial, reunindo banner, botões de ação e destaques do produto.

- Utiliza os componentes \`HomeBanner\`, \`HomeButtons\` e \`HomeHighlight\`.
- Responsivo: exibe botões apenas em telas menores que 360px.
- Aplica gradiente de fundo e espaçamento vertical.
- Organiza o conteúdo em coluna com espaçamento entre seções.

**Exemplo de uso:**
\`\`\`tsx
<HomeMain />
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HomeMain>;

export const Default: Story = {};
