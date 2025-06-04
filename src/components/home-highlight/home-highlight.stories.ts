import type { Meta, StoryObj } from "@storybook/nextjs";
import { HomeHighlight } from "./home-highlight";

const meta: Meta<typeof HomeHighlight> = {
  title: "Components/HomeHighlight",
  component: HomeHighlight,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Seção de destaques da home, exibindo as principais vantagens do banco em formato de grid.

- Utiliza o componente \`FeatureHighlight\` para cada vantagem.
- Responsivo: exibe 4, 2 ou 1 coluna conforme o tamanho da tela.
- Título e lista de destaques são definidos internamente.

**Exemplo de uso:**
\`\`\`tsx
<HomeHighlight />
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HomeHighlight>;

export const Default: Story = {};
