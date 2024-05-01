import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Space } from "antd";

const Password = ({ onChange }) => {
    const [inputValue, setInputValue] = React.useState("");

    const handleChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        onChange(value); // Call the onChange prop with the new password value
    };

    return (
        <Space direction="vertical" style={{ width: "100%" }}>
            <Input.Password
                placeholder="Enter Password"
                iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                style={{ width: "100%", height: "50px" }} // Adjust width of the Input.Password
                value={inputValue}
                onChange={handleChange}
            />
        </Space>
    );
};

export default Password;
