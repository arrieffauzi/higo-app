"use client";

import Select from "react-select";
import { memo } from "react";

export interface IOption {
  label: string | number;
  value: any;
}

export interface SelectPicker {
  placeholder: string;
  options: IOption[] | any;
  onChange: (option: any) => void;
  height?: string;
  width?: string;
  defaultValue?: any;
  defaultInputValue?: any;
  value?: any;
  isDisabled?: boolean;
}

const SelectPicker = (props: SelectPicker) => {
  const {
    placeholder,
    options,
    onChange,
    height,
    defaultValue,
    width,
    value,
    isDisabled,
  } = props;

  return (
    <Select
      instanceId="shown-items-select"
      placeholder={String(placeholder)}
      menuPlacement="auto"
      value={value ? options.find((item: any) => item.value === value) : null}
      defaultValue={options.find((item: any) => item.value === defaultValue)}
      isDisabled={isDisabled}
      styles={{
        control: (base: any, state: any) => ({
          ...base,
          height: height ?? "64px",
          width: width,
          borderRadius: "8px",
          boxShadow: state.isFocused ? 0 : 0,
          borderColor: "#D9DBE9",
          "&:hover": {
            borderColor: "#D9DBE9",
          },
        }),
        indicatorSeparator: () => ({ display: "none" }),
      }}
      options={options}
      onChange={onChange}
    />
  );
};

export default memo(SelectPicker);
