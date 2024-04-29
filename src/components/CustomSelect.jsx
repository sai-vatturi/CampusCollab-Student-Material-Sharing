import React from "react";
import { Select } from "antd";

const CustomSelect = ({ options, placeholder }) => (
    <Select
        showSearch
        style={{
            width: "100%",
            borderRadius: 0,
            margin: "8px 0",
            height: "2rem",
        }}
        placeholder={placeholder} // Use the provided placeholder
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={options}
    />
);

export default CustomSelect;
