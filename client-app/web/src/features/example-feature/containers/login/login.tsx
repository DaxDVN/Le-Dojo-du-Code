import {Button} from "flowbite-react";
import google_icon from "../../../../assets/images/google.svg";
import InputComponent from "../../components/InputComponent.tsx";
import AuthButtonComponent from "../../components/AuthButtonComponent.tsx";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Tạo schema
const validationSchema = Yup.object().shape({
    phone: Yup.number()
        .min(9, 'The email address you entered isn\'t connected to an account. ')
        .required('The email address or mobile number you entered isn\'t connected to an account.'),
    email: Yup.string()
        .email('The email address you entered isn\'t connected to an account. ')
        .required('The email address or mobile number you entered isn\'t connected to an account.'),
    password: Yup.string()
        .min(6, 'The mobile number you entered isn\'t connected to an account.')
        .required('Please enter your password')
});

export default function LoginPage() {

    return (
        <div className="flex items-center justify-center h-full">

            <Formik
                initialValues={{ phone: '', email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
            </Formik>


            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-center font-semibold text-black text-4xl m-8">Log In</h1>
                <form className="space-y-4">
                    <InputComponent type={"text"} name="phoneOrEmail" text={"Phone number or email"}/>
                    <InputComponent type={"password"} name="password" text={"Password"}/>
                    <div className="flex items-center">
                        <input type="checkbox" className="mr-2 "/>
                        <span className="text-[#495057] text-sm">Remember me</span>
                    </div>
                    <AuthButtonComponent text={"Log In"}/>
                    <div className="flex items-center">
                        <span className="flex-grow border-t border-gray-300"></span>
                        <p className="text-center text-black text-sm mx-4">Or Log In Using</p>
                        <span className="flex-grow border-t border-gray-300"></span>
                    </div>

                    <Button color="#D96E48" pill
                            className="w-full p-0 border-none flex items-center bg-[#E9ECEF] justify-center hover:bg-[#f1f3f5]">
                        <img src={google_icon} alt="Google icon" className="mr-1 h-10 w-10"/>
                        <span className="text-[#000000] flex items-center">Continue with Google</span>
                    </Button>
                </form>
                <p className="text-center mt-6">
                    <a href="#" className=" text-[#D96E48] hover:text-[#f29849] hover:no-underline">
                        Forgot password?
                    </a>
                </p>
                <p className="text-center mt-6 mb-4">
                    <span className="text-black">Don't have an account?</span> <a href="#"
                                                                                  className="text-[#D96E48] hover:text-[#f29849] hover:no-underline">Sign
                    up</a>
                </p>
            </div>
        </div>
    );
}
