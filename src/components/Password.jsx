import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
const Password = () => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    return (
        <Space direction="vertical" style={{ width: "100%" }}>
            <Input.Password
                placeholder="Enter Password"
                iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                style={{ width: "100%", height: "50px" }} // Adjust width of the Input.Password
            />
        </Space>
    );
};
export default Password;
``;
