import type { Meta, StoryObj } from "@storybook/nextjs";
import { MenuNav, MenuNavProps } from "./menu-nav";

const meta: Meta<typeof MenuNav> = {
  title: "Components/MenuNav",
  component: MenuNav,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Componente de navegação principal, exibindo links em formato de botões e menu modal em telas pequenas.

- Responsivo: exibe menu hamburguer/modal para telas até 360px e lista horizontal para telas maiores.
- Usa o hook \`useWindowWidth\` para responsividade.
- Fecha o menu modal ao clicar fora (hook \`useClickOutside\`).
- Utiliza os componentes \`Button\` e \`VectorImage\` para estilização.

**Props:**
- \`items\`: Array de objetos com \`label\` para os itens de navegação.

**Exemplo de uso:**
\`\`\`tsx
<MenuNav items={[
  { label: "Home" },
  { label: "Dashboard" },
  { label: "Sobre" }
]} />
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
      description: "Itens de navegação exibidos no menu",
      defaultValue: [
        { label: "Home" },
        { label: "Dashboard" },
        { label: "Sobre" },
      ],
    },
  },
};

export default meta;

type Story = StoryObj<MenuNavProps>;

export const Default: Story = {
  args: {
    items: [{ label: "Home" }, { label: "Dashboard" }, { label: "Sobre" }],
  },
};
