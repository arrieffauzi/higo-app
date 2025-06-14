import { memo } from "react";
import { cn } from "@/lib/common/cn";
import Image from "next/image";
import { BUTTON_VARIANTS, IButtonVariants } from "./ButtonVariant";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof IButtonVariants;
  loading?: boolean;
}

const Button = (props: ButtonProps) => {
  const { className, variant, children, loading, ...rest } = props;
  return (
    <button
      {...rest}
      disabled={loading || props.disabled}
      className={cn("cursor-pointer",BUTTON_VARIANTS[variant ?? "none"], className)}
    >
      {children}
      {loading && (
        <Image
          className="animate-spin ml-2"
          src="/icons/icon-spinner.svg"
          alt="spinner"
          height={16}
          width={16}
        />
      )}
    </button>
  );
};

export default memo(Button);
