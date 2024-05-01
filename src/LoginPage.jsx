import React, { useState } from "react";
import Logo from "./components/Logo";
import User from "./components/User";
import Password from "./components/Password";
import { Switch, message } from "antd";
import boyImage from "./assets/images/boy-image.png";
import googleLogo from "./assets/images/google-logo.svg";
import { Link } from "react-router-dom";

const onChange = (checked) => {
    console.log(`switch to ${checked}`);
};

const LoginPage = () => {
    const [inputValue, setInputValue] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [isValid, setIsValid] = useState(false);

    const handleChange = (value) => {
        setInputValue(value);
    };

    const handlePasswordChange = (value) => {
        setInputPassword(value);
    };

    const handleSubmit = () => {
        if (inputValue === "abc" && inputPassword === "123") {
            setIsValid(true);
            message.success("Welcome abc");
            setTimeout(() => {
                window.location.href = "/materials";
            }, 500); // Delay the redirection by 1 second (1000 milliseconds)
        } else {
            setIsValid(false);
            message.error("Invalid login or password");
        }
    };

    return (
        <div className="grid lg:grid-cols-7 h-screen fixed w-full">
            <div className="flex flex-col col-span-3 my-20 mx-8 md:mx-16">
                <div>
                    <Link to="/">
                        <Logo />
                    </Link>
                    <h1 className="text-2xl pt-8">Nice to see you again 👋🏻</h1>
                    <div className="pt-4">
                        <p className="font-bold text-[#5C5F6E] py-2 text-sm">
                            LOGIN
                        </p>
                        <User onChange={handleChange} />
                        <p className="font-bold text-[#5C5F6E] pt-4 pb-4 text-sm">
                            PASSWORD
                        </p>
                        <Password onChange={handlePasswordChange} />
                    </div>

                    <div className="flex justify-between py-5">
                        <div className="flex">
                            <Switch
                                defaultChecked
                                onChange={onChange}
                                style={{
                                    width: 10,
                                }}
                            />
                            <p className="ml-4 text-sm">Remember me</p>
                        </div>

                        <p className="text-[#A77FFF] text-sm">
                            Forgot Paasword?
                        </p>
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="py-1 border bg-[#651FFF] text-white font-black h-11 w-full"
                    >
                        Sign In
                    </button>
                    <div className="w-full h-[1px] bg-[#BEBEBE] my-5"></div>
                    <button className="w-full h-11 bg-[#333333] text-[#F3F3F3]">
                        or Sign In with Google
                    </button>
                    <p className="text-center pt-4">
                        Don't have an account?{" "}
                        <span className="text-[#5340FF]">Sign up now</span>
                    </p>
                    <p className="bottom-8 absolute text-sm text-gray-700">
                        © 2024 CampusCollab
                    </p>
                </div>
            </div>

            <div className="bg-[#F5F5F5] hidden lg:block col-span-4 bottom-0">
                <img
                    src={boyImage}
                    className="w-[400px] mx-auto translate-y-9"
                />
            </div>
        </div>
    );
};

export default LoginPage;
