"use client";
import dynamic from "next/dynamic";
import SelectPicker, { IOption } from "../SelectPicker/SelectPicker";

interface TableShownItemSelectProps {
  onChange: (option: IOption) => void;
  shownItemsLength: number;
  totalItems: number;
}

const TableShownItemSelect = (props: TableShownItemSelectProps) => {
  const { onChange, shownItemsLength, totalItems } = props;
  const SelectPicker = dynamic(() => import("../SelectPicker/SelectPicker"), {
    ssr: false,
  });

  return (
    <div className="flex items-center gap-2">
      <span className="text-[14px] font-normal leading-[18px] tracking-[0.14px] text-[#626F86] font-[SF Pro]">
        Show
      </span>
      <SelectPicker
        width="90px"
        height="34px"
        placeholder={shownItemsLength.toString()}
        onChange={onChange}
        value={shownItemsLength}
        options={[
          { label: "10", value: 10 },
          { label: "25", value: 25 },
          { label: "50", value: 50 },
          { label: "100", value: 100 },
        ]}
      />
      <span className="text-[14px] font-normal leading-[18px] tracking-[0.14px] text-[#626F86] font-[SF Pro]">
        of
      </span>
      <span className="text-[14px] font-normal leading-[18px] tracking-[0.14px] text-[#626F86] font-[SF Pro]">
        {totalItems}
      </span>
      <span className="text-[14px] font-normal leading-[18px] tracking-[0.14px] text-[#626F86] font-[SF Pro]">
        items
      </span>
    </div>
  );
};

export default TableShownItemSelect;
