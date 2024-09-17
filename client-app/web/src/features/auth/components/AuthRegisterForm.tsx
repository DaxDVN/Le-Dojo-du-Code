import React from 'react';
import {ErrorMessage, Form, Formik} from "formik";
import {registerValidationSchema} from "../utils/authValidationSchema.ts";
import FormInput from "./FormInput.tsx";
import FormButton from "./FormButton.tsx";
import {Button} from "flowbite-react";
import google_icon from "../../../assets/images/google.svg";
import {OverlayProps} from "../interfaces/CommonProps.ts";
import AuthOverlay from "./AuthOverlay.tsx";


function AuthRegisterForm({overlay, setOverlay}: OverlayProps) {
    return (
        <div className="relative h-full w-full min-w-max max-w-sm rounded-lg bg-white p-6 shadow-lg">
            {!overlay && (
                <AuthOverlay onSetValue={setOverlay} text={"Do you have an account?"} value={"Login"}/>
            )}
            <h1 className="mb-8 text-center text-4xl font-semibold text-black">Sign up</h1>
            <Formik
                initialValues={{
                    fullName: '',
                    phoneNumberOrEmail: '',
                    password: '',
                    dateOfBirth: '',
                    gender: '',
                    agreement: false
                }}
                validationSchema={registerValidationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({handleChange, values, errors, touched}) => (
                    <Form className="space-y-4">
                        {/* Full Name */}
                        <div>
                            <FormInput
                                text={"Full name"}
                                type={"text"}
                                name="fullName"
                                onChange={handleChange}
                                value={values.fullName}
                                className={
                                    errors.fullName && touched.fullName
                                        ? "text-black bg-[#E9ECEF] w-full h-[52px] px-6 py-2 border border-red-500 rounded-2xl focus:outline-none focus:border-blue-500"
                                        : "text-black bg-[#E9ECEF] w-full h-[52px] px-6 py-2 border rounded-2xl focus:outline-none focus:border-blue-500"
                                }
                            />
                            <ErrorMessage name="fullName" component="div"
                                          className="mb-2 text-red-500 text-[12px]"/>
                        </div>

                        {/* Phone number or email */}
                        <div>
                            <FormInput
                                text={"Phone number or email"}
                                type={"text"}
                                name="phoneNumberOrEmail"
                                onChange={handleChange}
                                value={values.phoneNumberOrEmail}
                                className={
                                    errors.phoneNumberOrEmail && touched.phoneNumberOrEmail
                                        ? "text-black bg-[#E9ECEF] w-full h-[52px] px-6 py-2 border border-red-500 rounded-2xl focus:outline-none focus:border-blue-500"
                                        : "text-black bg-[#E9ECEF] w-full h-[52px] px-6 py-2 border rounded-2xl focus:outline-none focus:border-blue-500"
                                }
                            />
                            <ErrorMessage name="phoneNumberOrEmail" component="div"
                                          className="mb-2 text-red-500 text-[12px]"/>
                        </div>

                        <div>
                            {/* Password */}
                            <div>
                                <FormInput
                                    text={"Password"}
                                    type={"password"}
                                    name="password"
                                    onChange={handleChange}
                                    value={values.password}
                                    className={
                                        errors.password && touched.password
                                            ? "text-black bg-[#E9ECEF] w-full h-[52px] px-6 py-2 border border-red-500 rounded-2xl focus:outline-none focus:border-blue-500"
                                            : "text-black bg-[#E9ECEF] w-full h-[52px] px-6 py-2 border rounded-2xl focus:outline-none focus:border-blue-500"
                                    }
                                />
                                <ErrorMessage name="password" component="div"
                                              className="mb-2 text-red-500 text-[12px]"/>
                            </div>
                            {/* Date of Birth */}
                            <div>
                                <span className="ml-2 block text-black text-[12px]">Date of Birth</span>
                                <FormInput
                                    text={"Date of Birth"}
                                    type={"date"}
                                    name="dateOfBirth"
                                    onChange={handleChange}
                                    value={values.dateOfBirth}
                                    className={
                                        errors.dateOfBirth && touched.dateOfBirth
                                            ? "text-black bg-[#E9ECEF] w-full h-[52px] px-6 py-2 border border-red-500 rounded-2xl focus:outline-none focus:border-blue-500"
                                            : "text-black bg-[#E9ECEF] w-full h-[52px] px-6 py-2 border rounded-2xl focus:outline-none focus:border-blue-500"
                                    }

                                />
                                <ErrorMessage name="dateOfBirth" component="div"
                                              className="mb-2 text-red-500 text-[12px]"/>
                            </div>

                            {/* Gender */}
                            <div>
                                <span className="ml-2 block text-black text-[12px]">Select Gender</span>
                                <select name="gender"
                                        onChange={handleChange}
                                        value={values.gender}
                                        className={`text-black bg-[#E9ECEF] w-full p-2 border rounded-lg ${errors.gender && touched.gender
                                            ? "text-black bg-[#E9ECEF] w-full h-[52px] px-6 py-2 border border-red-500 rounded-2xl focus:outline-none focus:border-blue-500"
                                            : "text-black bg-[#E9ECEF] w-full h-[52px] px-6 py-2 border rounded-2xl focus:outline-none focus:border-blue-500"
                                        }}`}>
                                    <option value="">Select gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                <ErrorMessage name="gender" component="div"
                                              className="mb-2 text-red-500 text-[12px]"/>
                            </div>

                            {/*Agreement*/}
                            <div>
                                <div className="flex w-full items-center space-x-2">
                                    <input type="checkbox" name="agreement"
                                           onChange={handleChange}
                                           checked={values.agreement}
                                           className="text-blue-600 form-checkbox"/>
                                    <span className="py-2 text-black text-[12px]">I agree to <a href="#">the Terms of Service</a>, <a
                                        href="#">Privacy Policy</a>, and <a href="#">Cookie Policy</a></span>
                                </div>
                                <ErrorMessage name="agreement" component="div"
                                              className="mb-2 text-red-500 text-[12px]"/>

                            </div>
                        </div>

                    </Form>
                )}
            </Formik>
            <FormButton text={"Sign Up"}/>

            {/*Other options*/}
            <div className="mt-4 mb-4 flex items-center">
                <span className="flex-grow border-t border-gray-300"></span>
                <p className="text-center text-black text-[12px]">Or Sign Up Using</p>
                <span className="flex-grow border-t border-gray-300"></span>
            </div>

            {/*Button submit to sign up with Google*/}
            <Button
                color="#D96E48"
                pill
                className="w-full p-0 border-none flex items-center bg-[#E9ECEF] justify-center hover:bg-[#f1f3f5]"
            >
                <img src={google_icon} alt="Google icon" className="mr-1 h-10 w-10"/>
                <span className="text-[#000000] flex items-center">Continue with Google</span>
            </Button>


        </div>
    );
}

export default AuthRegisterForm;