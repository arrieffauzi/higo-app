import {
  ChangeEvent,
  memo,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { cn } from "@/lib/common/cn";
import Image from "next/image";
import Input from "../Input/Input";
import Button from "../Button/Button";

interface TablePaginationProps {
  onChange?: (page: number) => void;
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
}

const TablePagination = ({
  onChange,
  currentPage,
  totalItems,
  itemsPerPage,
}: TablePaginationProps) => {
  const maxPage = Math.ceil(totalItems / itemsPerPage);
  const [page, setPage] = useState(() => {
    return currentPage > Math.ceil(totalItems / itemsPerPage) ? 1 : currentPage;
  });

  useEffect(() => {
    if (currentPage > maxPage) {
      onChange?.(1);
    }
  }, []);

  const timeout = useRef<any>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeout.current);
    const newPage = e.target.value;
    setPage(+newPage);
    timeout.current = setTimeout(() => onChange && onChange(+newPage), 1000);
  };

  const handlePrevClick = useCallback(() => {
    const newPage = Math.max(1, page - 1);
    setPage(newPage);
    onChange && onChange(newPage);
  }, [page, onChange]);

  const handleNextClick = useCallback(() => {
    const newPage = page + 1;
    setPage(newPage);
    onChange && onChange(newPage);
  }, [page, onChange]);

  const isNextDisabled = page >= Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex gap-2">
      <Button
        disabled={page === 1}
        variant="none"
        className={cn(
          "rounded-md border-[#EAECF0] w-8 h-8 p-2",
          page === 1 && "cursor-not-allowed"
        )}
        onClick={handlePrevClick}
      >
        <Image
          src="/icons/icon-pagination-left.svg"
          alt="icon-pagination-left"
          height={16}
          width={16}
          className="w-4 h-4"
        />
      </Button>
      <Input
        variant="none"
        value={page}
        className="border rounded-md w-8 h-8 p2 text-center placeholder:text-black"
        onChange={handleChange}
      />
      <Button
        disabled={isNextDisabled}
        variant="none"
        className={cn(
          "rounded-md border-[#EAECF0] w-8 h-8 p-2",
          isNextDisabled && "cursor-not-allowed"
        )}
        onClick={handleNextClick}
      >
        <Image
          src="/icons/icon-pagination-right.svg"
          alt="icon-pagination-left"
          height={16}
          width={16}
          className="w-4 h-4"
        />
      </Button>
    </div>
  );
};

export default memo(TablePagination);
