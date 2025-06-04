import type { Meta, StoryObj } from "@storybook/nextjs";
import { FooterColumn } from "./footer-column";

const meta: Meta<typeof FooterColumn> = {
  title: "Components/FooterColumn",
  component: FooterColumn,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
    docs: {
      description: {
        component: `
Componente de coluna para rodapé, exibindo um título e uma lista de links.

**Props:**
- \`title\`: Título da coluna.
- \`items\`: Array de objetos com \`label\` e \`href\` para os links.

**Exemplo de uso:**
\`\`\`tsx
<FooterColumn
  title="Serviços"
  items={[
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
  ]}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Título da coluna",
      defaultValue: "Serviços",
    },
    items: {
      control: "object",
      description: "Lista de links da coluna",
      defaultValue: [
        { label: "Home", href: "/" },
        { label: "Dashboard", href: "/dashboard" },
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof FooterColumn>;

export const Default: Story = {
  args: {
    title: "Serviços",
    items: [
      { label: "Home", href: "/" },
      { label: "Dashboard", href: "/dashboard" },
    ],
  },
};
