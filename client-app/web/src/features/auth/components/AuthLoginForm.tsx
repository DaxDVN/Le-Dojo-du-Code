import React from 'react';
import {ErrorMessage, Form, Formik} from "formik";
import {loginValidationSchema} from "../utils/authValidationSchema.ts";
import FormInput from "./FormInput.tsx";
import FormButton from "./FormButton.tsx";
import {Button} from "flowbite-react";
import google_icon from "../../../assets/images/google.svg";
import {OverlayProps} from "../interfaces/CommonProps.ts";
import AuthOverlay from "./AuthOverlay.tsx";
import {Link, useNavigate} from "react-router-dom";

function AuthLoginForm({overlay,  setOverlay}: OverlayProps) {
    const navigate = useNavigate();
    return (
        <div className="relative h-full w-full min-w-max max-w-sm rounded-lg bg-white p-6 shadow-lg">
            {overlay != undefined && overlay && (
                <AuthOverlay onSetValue={setOverlay} text={"Have an account?"} value={"Log in"}/>
            )}
            <h1 className="m-8 text-center text-4xl font-semibold text-black">Log In</h1>
            <Formik initialValues={{phoneNumberOrEmail: '', password: ''}}
                    validationSchema={loginValidationSchema}
                    onSubmit={(values) => {
                        console.log(values);
                        navigate("/", {state: {user: values}})
                    }}
            >
                {({handleChange, values, errors, touched}) => (
                    <Form className="space-y-4">

                        {/*Phone number or email*/}
                        <div>
                            <FormInput
                                name="phoneNumberOrEmail"
                                onChange={handleChange}
                                value={values.phoneNumberOrEmail}
                                type={"text"}
                                text={"Phone number or email"}
                                errorCase={
                                    errors.phoneNumberOrEmail && touched.phoneNumberOrEmail
                                        ? "text-black bg-[#E9ECEF] w-full h-[52px] px-6 py-2 border border-red-500 rounded-2xl focus:outline-none focus:border-blue-500"
                                        : "text-black bg-[#E9ECEF] w-full h-[52px] px-6 py-2 border rounded-2xl focus:outline-none focus:border-blue-500"
                                }/>
                            <ErrorMessage name="phoneNumberOrEmail" component="div"
                                          className="mb-2 text-red-500 text-[12px]"/>
                        </div>

                        {/*Password*/}
                        <div>
                            <FormInput
                                name="password"
                                onChange={handleChange}
                                value={values.password} type={"password"} text={"Password"}
                                errorCase={
                                    errors.password && touched.password
                                        ? "text-black bg-[#E9ECEF] w-full h-[52px] px-6 py-2 border border-red-500 rounded-2xl focus:outline-none focus:border-blue-500"
                                        : "text-black bg-[#E9ECEF] w-full h-[52px] px-6 py-2 border rounded-2xl focus:outline-none focus:border-blue-500"
                                }/>
                            <ErrorMessage name="password" component="div"
                                          className="mb-2 text-red-500 text-[12px]"/>
                        </div>

                        {/*Remember me*/}
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2"/>
                            <span className="text-[#495057] text-[12px]">Remember me</span>
                        </div>

                        {/*Button submit to login*/}
                        <FormButton text={"Log In"}/>

                        {/*Other options*/}
                        <div className="flex items-center">
                            <span className="flex-grow border-t border-gray-300"></span>
                            <p className="mx-4 text-center text-black text-[12px]">Or Log In Using</p>
                            <span className="flex-grow border-t border-gray-300"></span>
                        </div>

                        {/*Button submit to login with Google*/}
                        <Button color="#D96E48" pill
                                className="w-full p-0 border-none flex items-center bg-[#E9ECEF] justify-center hover:bg-[#f1f3f5]">
                            <img src={google_icon} alt="Google icon" className="mr-1 h-10 w-10"/>
                            <span className="text-[#000000] flex items-center">Continue with Google</span>
                        </Button>
                    </Form>
                )}
            </Formik>

            {/*Forgot password*/}
            <p className="mt-6 text-center">
                <Link to="#" className=" text-[#D96E48] hover:text-[#f29849] hover:no-underline text-[12px]">
                    Forgot password?
                </Link>
            </p>
            {/* -> Sign Up*/}
            {overlay == undefined && (
                <p className="mt-6 mb-4 text-center">
                <span className="text-black text-[12px]">Don't have an account? </span>
                <Link to='/auth' className="text-[#D96E48] text-[12px] hover:text-[#f29849] hover:no-underline">Sign
                up</Link>
                </p>
            )}
            
        </div>
    );
}

export default AuthLoginForm;