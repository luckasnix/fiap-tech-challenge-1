import type { Meta, StoryObj } from "@storybook/nextjs";
import { HomeHeader } from "./home-header";

const meta: Meta<typeof HomeHeader> = {
  title: "Components/HomeHeader",
  component: HomeHeader,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
    docs: {
      description: {
        component: `
Cabeçalho principal da home, exibindo o logo, navegação e botões de ação.

- Responsivo: ajusta o logo e exibição dos botões conforme a largura da tela.
- Utiliza os componentes \`VectorImage\`, \`MenuNav\` e \`HomeButtons\`.
- Navegação configurável via prop \`items\`.

**Exemplo de uso:**
\`\`\`tsx
<HomeHeader />
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HomeHeader>;

export const Default: Story = {};
