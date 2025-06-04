import type { Meta, StoryObj } from "@storybook/nextjs";
import { VectorImage } from "./vector-image";

const meta: Meta<typeof VectorImage> = {
  title: "Components/VectorImage",
  component: VectorImage,
  argTypes: {
    name: {
      control: "select",
      options: [
        "image-banner",
        "image-logo",
        "icon-logo",
        "icon-instagram",
        "icon-whatsapp",
        "icon-youtube",
        "icon-edit-filled",
        "icon-delete-filled",
        "icon-eye",
        "icon-arrow-down",
        "icon-menu",
        "icon-close",
      ],
      description: "Nome do ícone ou imagem vetorial a ser exibido.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Componente para exibir SVGs vetoriais centralizados no projeto. Use a prop `name` para escolher qual imagem exibir.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof VectorImage>;

export const Default: Story = {
  args: {
    name: "image-banner",
  },
};
export const IconLogo: Story = {
  args: {
    name: "icon-logo",
  },
};
export const IconInstagram: Story = {
  args: {
    name: "icon-instagram",
  },
};

export const IconWhatsApp: Story = {
  args: {
    name: "icon-whatsapp",
  },
};
export const IconYouTube: Story = {
  args: {
    name: "icon-youtube",
  },
};

export const IconEditFilled: Story = {
  args: {
    name: "icon-edit-filled",
  },
};

export const IconDeleteFilled: Story = {
  args: {
    name: "icon-delete-filled",
  },
};

export const IconEye: Story = {
  args: {
    name: "icon-eye",
  },
};

export const IconArrowDown: Story = {
  args: {
    name: "icon-arrow-down",
  },
};

export const IconMenu: Story = {
  args: {
    name: "icon-menu",
  },
};

export const IconClose: Story = {
  args: {
    name: "icon-close",
  },
};

export const ImageBanner: Story = {
  args: {
    name: "image-banner",
  },
};

export const ImageLogo: Story = {
  args: {
    name: "image-logo",
  },
};
