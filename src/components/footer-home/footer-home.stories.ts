import type { Meta, StoryObj } from "@storybook/nextjs";
import { FooterHome } from "./footer-home";

const meta: Meta<typeof FooterHome> = {
  title: "Components/FooterHome",
  component: FooterHome,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Rodapé principal da página inicial, exibindo colunas de serviços, contato, créditos e redes sociais.

- Utiliza o componente \`FooterColumn\` para exibir listas de links.
- Mostra créditos e o logo da empresa.
- Exibe ícones sociais (Instagram, WhatsApp, YouTube) usando o componente \`VectorImage\`.
- Responsivo e estilizado para o layout da aplicação.

**Exemplo de uso:**
\`\`\`tsx
<FooterHome />
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FooterHome>;

export const Default: Story = {};
