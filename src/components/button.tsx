export type ButtonProps = Readonly<{
  label: string;
  onClick: () => void;
}>;

export const Button = ({ label }: ButtonProps) => (
  <button type="button">{label}</button>
);
