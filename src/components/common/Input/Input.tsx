"use client";
import { memo } from "react";
import { cn } from "@/lib/common/cn";
import { IInputVariants, INPUT_VARIANTS } from "./InputVariant";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: keyof IInputVariants;
}

const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      type={props.type ? props.type : "text"}
      className={cn(
        INPUT_VARIANTS[props.variant ? props.variant : "primary"],
        "placeholder:text-[#101828] placeholder:font-[SF Pro] placeholder:text-[14px] placeholder:font-normal placeholder:leading-[18px] placeholder:tracking-[0.14px]",
        props.className
      )}
    />
  );
};

export default memo(Input);
