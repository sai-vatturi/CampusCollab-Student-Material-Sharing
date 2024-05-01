import React from "react";
import Logo from "./components/Logo";
import User from "./components/User";
import Password from "./components/Password";
import { Switch } from "antd";
import girlImage from "./assets/images/girl-image.png";

const onChange = (checked) => {
    console.log(`switch to ${checked}`);
};

const LoginPage = () => {
    return (
        <div className="grid lg:grid-cols-7 h-screen fixed w-full">
            <div className="bg-[#F5F5F5] hidden lg:block col-span-3 bottom-0">
                <img
                    src={girlImage}
                    className="w-[400px] mx-auto -translate-y"
                />
            </div>
            <div className="flex flex-col col-span-4 my-20 mx-8 md:mx-16">
                <div>
                    <Logo />
                    <h1 className="text-2xl pt-8">Create Account</h1>
                    <div className="pt-4">
                        <p className="font-bold text-[#5C5F6E] py-2 text-sm">
                            LOGIN
                        </p>
                        <User />
                        <p className="font-bold text-[#5C5F6E] pt-4 pb-4 text-sm">
                            PASSWORD
                        </p>
                        <Password />
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

                    <button className="py-1 border bg-[#651FFF] text-white font-black h-11 w-full">
                        Sign Up
                    </button>
                    <div className="w-full h-[1px] bg-[#BEBEBE] my-5"></div>
                    <button className="w-full h-11 bg-[#333333] text-[#F3F3F3]">
                        or Sign Up with Google
                    </button>
                    <p className="text-center pt-4">
                        Already have an account?{" "}
                        <span className="text-[#5340FF]">Log in now</span>
                    </p>
                    <p className="bottom-8 absolute text-sm text-gray-700">
                        © 2024 CampusCollab
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
