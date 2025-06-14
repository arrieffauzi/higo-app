export interface IButtonVariants {
  primary: string;
  secondary: string;
  danger: string;
  secondaryDanger: string;
  none: string;
}

export const BUTTON_VARIANTS: IButtonVariants = {
  primary:
    "flex h-10 px-4 py-1 justify-center items-center gap-2 rounded-lg border bg-[#0063F7] text-white font-[SF Pro] text-[16px] font-normal leading-[20px] tracking-[0.16px]",
  secondary:
    "flex h-10 px-4 py-1 justify-center items-center gap-2 rounded-lg border border-[#EAECF0] bg-white",
  danger:
    "flex h-10 px-4 py-1 justify-center items-center gap-2 rounded-lg border bg-[#FF3B3B] text-white font-[SF Pro] text-[16px] font-normal leading-[20px] tracking-[0.16px]",
  secondaryDanger:
    "flex h-10 px-4 py-1 justify-center items-center gap-2 rounded-lg border border-[#FF3B3B] bg-white text-[#FF3B3B]",
  none: "",
};
