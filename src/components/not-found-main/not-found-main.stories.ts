import type { Meta, StoryObj } from "@storybook/nextjs";
import { NotFoundMain } from "./not-found-main";

const meta: Meta<typeof NotFoundMain> = {
  title: "Components/NotFoundMain",
  component: NotFoundMain,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
    docs: {
      description: {
        component: `
Componente de página 404 (não encontrada), exibindo mensagem amigável, ilustração e botão para retornar à página inicial.

- Exibe título, descrição, imagem ilustrativa e botão de ação.
- Responsivo e estilizado com gradiente de fundo.
- O botão "Voltar ao início" redireciona para a home usando o roteador do Next.js.

**Exemplo de uso:**
\`\`\`tsx
<NotFoundMain />
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NotFoundMain>;

export const Default: Story = {};
