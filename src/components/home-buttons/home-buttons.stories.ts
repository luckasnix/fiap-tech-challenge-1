import type { Meta, StoryObj } from "@storybook/nextjs";
import { HomeButtons } from "./home-buttons";

const meta: Meta<typeof HomeButtons> = {
  title: "Components/HomeButtons",
  component: HomeButtons,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
    docs: {
      description: {
        component: `
Componente de botões principais da home, exibindo ações para abertura de conta e acesso ao dashboard.

- Responsivo: ajusta tamanho e texto dos botões conforme a largura da tela.
- Usa o hook \`useWindowWidth\` para responsividade.
- Utiliza o componente \`Button\` para estilização e acessibilidade.
- Redireciona para o dashboard ao clicar em qualquer botão.

**Exemplo de uso:**
\`\`\`tsx
<HomeButtons />
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HomeButtons>;

export const Default: Story = {};
