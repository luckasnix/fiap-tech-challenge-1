import type { Meta, StoryObj } from "@storybook/nextjs";
import { DashboardMain } from "./dashboard-main";

const meta: Meta<typeof DashboardMain> = {
  title: "Components/DashboardMain",
  component: DashboardMain,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Componente principal do dashboard, responsável por exibir o menu lateral, resumo financeiro, extrato e modal de transações.

- Exibe o menu lateral apenas em telas maiores que 360px.
- Permite abrir e fechar o modal de transações.
- Utiliza layout flexível e responsivo.

**Exemplo de uso:**
\`\`\`tsx
<DashboardMain />
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DashboardMain>;

export const Default: Story = {};
