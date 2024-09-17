import {useState} from "react";
import {Button} from "flowbite-react";
import google_icon from "../../../assets/images/google.svg";
import AuthFields from "../components/AuthFields.tsx";
import AuthButton from "../components/AuthButton.tsx";
import AuthOverlayComponent from "../components/AuthOverlay.tsx";
import {registerValidationSchema} from "../utils/authValidationSchema.ts";

import {ErrorMessage, Form, Formik} from 'formik';

export default function RegisterPage() {

    // Overlay
    const [isOverlay, setIsOverlay] = useState(true);
    const setOverlay = () => {
        setIsOverlay(!isOverlay);
    };

    const [isSignUpClicked, setIsSignUpClicked] = useState(false);

    return (
        <div className="absolute mt-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 h-full p-4">
            {/* Sign Up */}
            <div className="flex items-center justify-center relative">

                {/*Overlay execution*/}
                {!isOverlay && (
                    <AuthOverlayComponent onSetValue={setOverlay} text={"Don't have an account?"} value={"Sign up"}/>
                )}
                <div className="w-full p-6 max-w-sm bg-white rounded-lg shadow-md rounded-r-none">
                    <h1 className="text-center font-semibold text-black text-4xl m-8">Sign up</h1>
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
                                    <AuthFields
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
                                                  className="text-red-500 text-sm mb-2"/>
                                </div>

                                {/* Phone number or email */}
                                <div>
                                    <AuthFields
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
                                                  className="text-red-500 text-sm mb-2"/>
                                </div>

                                {/* Password */}
                                <div>
                                    <AuthFields
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
                                                  className="text-red-500 text-sm mb-2"/>
                                </div>

                                {/* Date of Birth */}
                                <div>
                                    <span className="text-black text-[12px] block ml-2 mb-1">Date of Birth</span>
                                    <AuthFields
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
                                                  className="text-red-500 text-sm mb-2"/>
                                </div>

                                {/* Gender */}
                                <div>
                                    <span className="text-black text-[12px] block ml-2 mb-1">Select Gender</span>
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
                                    <ErrorMessage name="gender" component="div" className="text-red-500 text-sm mb-2"/>
                                </div>

                                {/*Agreement*/}
                                <div>
                                    <div className="flex w-full items-center space-x-2">
                                        <input type="checkbox" name="agreement"
                                               onChange={handleChange}
                                               checked={values.agreement}
                                               className="form-checkbox text-blue-600"/>
                                        <span className="text-black text-[12px] py-2">I agree to <a href="#">the Terms of Service</a>, <a
                                            href="#">Privacy Policy</a>, and <a href="#">Cookie Policy</a></span>
                                    </div>
                                    <ErrorMessage name="agreement" component="div"
                                                  className="text-red-500 text-sm mb-2"/>

                                </div>
                                <AuthButton text={"Sign Up"}/>
                                {/*Other options*/}
                                <div className="flex items-center">
                                    <span className="flex-grow border-t border-gray-300"></span>
                                    <p className="text-center text-black text-[12px] ">Or Sign Up Using</p>
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
                            </Form>
                        )}
                    </Formik>


                </div>
            </div>

            {/* Login */}
            <div className="flex items-center justify-center relative">

                {/*Overlay execution*/}
                {isOverlay && (
                    <AuthOverlayComponent onSetValue={setOverlay} text={"Have an account?"} value={"Log in"}/>
                )}

                <div className="w-full max-w-sm p-6 bg-white rounded-lg rounded-l-none h-full shadow-md items-center">
                    <h1 className="text-center font-semibold text-black text-4xl m-8">Log In</h1>
                    <Formik initialValues={{phoneNumberOrEmail: '', password: ''}}
                            validationSchema={loginValidationSchema}
                            onSubmit={(values) => {
                                console.log(values);
                            }}
                    >
                        {({handleChange, values,errors, touched}) => (
                            <Form className="space-y-4">

                                {/* Phone number or email */}
                                <div>
                                    <AuthFields
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
                                                  className="text-red-500 text-sm mb-2"/>
                                </div>

                                {/* Password */}
                                <div>
                                    <AuthFields
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
                                                  className="text-red-500 text-sm mb-2"/>
                                </div>

                                {/*Remember me*/}
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-2 "/>
                                    <span className="text-[#495057] text-sm">Remember me</span>
                                </div>

                                {/*Button submit to login*/}
                                <AuthButton text={"Log In"}/>

                                {/*Other options*/}
                                <div className="flex items-center">
                                    <span className="flex-grow border-t border-gray-300"></span>
                                    <p className="text-center text-black text-sm mx-4">Or Log In Using</p>
                                    <span className="flex-grow border-t border-gray-300"></span>
                                </div>

                                {/*Button submit to login with Google*/}
                                <Button
                                    color="#D96E48"
                                    pill
                                    className="w-full p-0 border-none flex items-center bg-[#E9ECEF] justify-center hover:bg-[#f1f3f5]"
                                >
                                    <img src={google_icon} alt="Google icon" className="mr-1 h-10 w-10"/>
                                    <span className="text-[#000000] flex items-center">Continue with Google</span>
                                </Button>
                            </Form>
                        )}

                    </Formik>

                    {/*Forgot password*/}
                    <p className="text-center mt-6">
                        <a href="#" className=" text-[#D96E48] hover:text-[#f29849] hover:no-underline">
                            Forgot password?
                        </a>
                    </p>

                </div>
            </div>
        </div>
    );
}
