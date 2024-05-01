import React, { useState } from "react";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

const User = ({ onChange }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        onChange(value);
    };

    return (
        <div>
            <Input
                placeholder="Enter text"
                prefix={<UserOutlined style={{ height: "45px" }} />}
                value={inputValue}
                onChange={handleChange}
            />
        </div>
    );
};

export default User;
