import { cx } from "styled-system/css";
import { button, type ButtonVariantProps } from "styled-system/recipes";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  $label?: string;
} & ButtonVariantProps;
export function Button({
  children,
  color,
  size,
  className,
  $label,
  ...props
}: ButtonProps) {
  const { root, control, label } = button({ size, color });
  return (
    <button className={cx(root, className)}>
      <label className={label}>{$label}</label>
      <div className={control}>{children}</div>
    </button>
  );
}
