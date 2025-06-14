import { cn } from "@/lib/common/cn";
import { ReactNode, memo } from "react";

interface ICard {
  className?: string | undefined;
  children: ReactNode;
}

const Card = (props: ICard) => {
  const { children, className } = props;
  return (
    <div className={cn("bg-white rounded-lg shadow", className)}>
      {children}
    </div>
  );
};

export default memo(Card);
