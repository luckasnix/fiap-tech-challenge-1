import type { Meta, StoryObj } from "@storybook/nextjs";
import { HeaderDashboard } from "./header-dashboard";

const meta: Meta<typeof HeaderDashboard> = {
  title: "Components/HeaderDashboard",
  component: HeaderDashboard,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Cabeçalho do dashboard, exibindo o nome do usuário, avatar e menu de navegação responsivo.

- Mostra o nome do usuário e avatar à direita.
- Exibe menu hamburguer e menu lateral em telas pequenas.
- Utiliza o componente \`Button\` para interação.
- Responsivo e estilizado conforme o layout da aplicação.

**Props:**
- \`name\`: Nome do usuário exibido no cabeçalho.

**Exemplo de uso:**
\`\`\`tsx
<HeaderDashboard name="Joana" />
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "Nome do usuário exibido no cabeçalho",
      defaultValue: "Joana",
    },
  },
};

export default meta;

type Story = StoryObj<typeof HeaderDashboard>;

export const Default: Story = {
  args: {
    name: "Joana",
  },
};
