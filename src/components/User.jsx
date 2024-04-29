import React from "react";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Input, Tooltip } from "antd";
const User = () => (
    <>
        <Input
            placeholder="Email or Phone Number"
            prefix={
                <UserOutlined
                    style={{
                        height: "45px",
                    }}
                />
            }
        />
    </>
);

export default User;
