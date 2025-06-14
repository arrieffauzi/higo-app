"use client";

import { useState, memo } from "react";
import { cn } from "@/lib/common/cn";
import Image from "next/image";
import TableShownItemSelect from "./TableShownItemSelect";
import { IOption } from "../SelectPicker/SelectPicker";
import TablePagination from "./TablePagination";

interface TableProps {
  headers: React.ReactNode[];
  isLoading?: boolean;
  bodies: Record<string, string | number | React.ReactNode>[];
  headerRowClassname?: string;
  headerColumnClassname?: string;
  bodyRowClassname?: string;
  bodyColumnClassname?: string;
  tableClassname?: string;
  showPagination?: boolean;
  tableContainerClassname?: string;
  totalItems?: number;
  itemsPerPage?: number;
  currentPage?: number;
  paginationContainerClassname?: string;
  onShownItemsChange?: (itemNumber: number) => void;
  onPaginationChange?: (itemNumber: number) => void;
  onRowClick?: (rowData: Record<string, any>, index: number) => void;
  additionalBodyRow?: React.ReactNode;
}

const Table = (props: TableProps) => {
  const {
    isLoading,
    headers,
    bodies,
    tableClassname,
    headerRowClassname,
    headerColumnClassname,
    bodyRowClassname,
    bodyColumnClassname,
    showPagination,
    tableContainerClassname,
    totalItems = 10,
    itemsPerPage = 10,
    currentPage = 1,
    paginationContainerClassname,
    onShownItemsChange,
    onPaginationChange,
    onRowClick,
    additionalBodyRow,
  } = props;
  const [shownItemsLength, setShownItemsLength] = useState(itemsPerPage);

  if (isLoading) {
    return (
      <div className="bg-[#EFF0F6]">
        <div className="bg-gray-300 animate-pulse h-8 " />
        <div className="flex justify-center items-center h-24">
          <Image
            className="w-auto animate-spin h-5"
            src="/icons/icon-spinner.svg"
            alt="spinner"
            height={20}
            width={20}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={cn("", tableContainerClassname)}>
      <div className="overflow-x-auto h-[564px]">
        <table className={cn("w-full", tableClassname)}>
          <thead>
            <tr className={cn("bg-[#FCFCFD]", headerRowClassname)}>
              {headers.map((header: React.ReactNode) => (
                <th
                  key={`th_${header as string}`}
                  className={cn(
                    "h-[40px] min-w-[100px] max-w-[240px] px-2 py-[13px] text-left items-start gap-2 self-stretch border-t border-b border-[#EAECF0] bg-[#FCFCFD] text-[#44546F] text-[14px] leading-[16px] tracking-[0.14px] font-[510] whitespace-nowrap",
                    headerColumnClassname
                  )}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bodies
              .slice(0, showPagination ? shownItemsLength : bodies.length)
              .map((body: Record<string, any>, rowIndex: number) => (
                <tr
                  onClick={() => onRowClick && onRowClick(body, rowIndex)}
                  className={cn(bodyRowClassname)}
                  key={`tb_${rowIndex}`}
                >
                  {Object.values(body).map((value, columnIndex) => (
                    <td
                      key={`td_${rowIndex}_${columnIndex}`}
                      className={cn(
                        "w-[160px] h-[40px] min-w-[50px] max-w-[240px] px-2 py-[10px] items-center gap-2 border-t border-b border-[#EAECF0] bg-white text-[#44546F] text-[14px] font-normal leading-[18px] tracking-[0.14px] font-[SF Pro]",
                        bodyColumnClassname,
                        value && value.length > 50 && "break-all"
                      )}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            {additionalBodyRow && additionalBodyRow}
          </tbody>
        </table>
      </div>

      <div
        className={cn(
          "mt-4 items-center justify-between px-4",
          showPagination ? "flex" : "hidden",
          paginationContainerClassname
        )}
      >
        <TableShownItemSelect
          onChange={(option: IOption) => {
            setShownItemsLength(option.value);
            onShownItemsChange && onShownItemsChange(option.value);
          }}
          shownItemsLength={shownItemsLength}
          totalItems={totalItems}
        />
        <TablePagination
          onChange={onPaginationChange}
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </div>
  );
};

export default memo(Table);
