import type { Meta, StoryObj } from "@storybook/nextjs";
import { SideMenu } from "./side-menu";

const meta: Meta<typeof SideMenu> = {
  title: "Components/SideMenu",
  component: SideMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Menu lateral de navegação do dashboard, exibindo as principais seções do sistema.

- Exibe itens como "Início", "Transferências", "Investimentos" e "Outros serviços".
- Destaca o item ativo ao clicar.
- Responsivo: vira menu horizontal no topo em telas menores que 720px.
- Estilizado com cores e espaçamentos do tema.

**Exemplo de uso:**
\`\`\`tsx
<SideMenu />
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SideMenu>;

export const Default: Story = {};
