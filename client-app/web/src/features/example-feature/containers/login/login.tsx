import {Button} from "flowbite-react";
import google_icon from "../../../../assets/images/google.svg";
import InputComponent from "../../components/InputComponent.tsx";
import AuthButtonComponent from "../../components/AuthButtonComponent.tsx";

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Create schema
const validationSchema = Yup.object().shape({

    // Phone number or email
    phoneNumberOrEmail: Yup.string()
        .test(
            'phone-or-email',
            'Invalid phone number or email address.',
            (value) => {
                if (value?.includes('@')) {
                    return Yup.string().email('Invalid email address.').isValidSync(value);
                } else {
                    return Yup.string().min(10,'Invalid phone number.').matches(/^\+?[0-9]\d{1,14}$/, 'Số điện thoại không hợp lệ').isValidSync(value);
                }
            }
        )
        .required('Phone number or email is required.'),

    // Password
    password: Yup.string()
        .min(6,)    //'Your password must be at least 6 characters long.'
        .matches(/[A-Z]/, )     //'Password requires at least one uppercase character.'
        .matches(/\d/, )    //'Password requires at least one number.'
        .matches(/[!@#$%^&*(),.?":{}|<>]/, ) //'Password requires at least one special character.'
        .required('Password is required.'),
});
export default function LoginPage() {

    return (
        <div className="flex items-center justify-center h-full">
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-center font-semibold text-black text-4xl m-8">Log In</h1>
                <Formik
                        initialValues={{phoneNumberOrEmail: '', password: ''}}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                >
                    {({ handleChange, values,errors, touched }) => (
                        <Form className="space-y-4">

                            {/*Phone number or email*/}
                            <div>
                                <InputComponent
                                    name="phoneNumberOrEmail"
                                    onChange={handleChange}
                                    value={values.phoneNumberOrEmail}
                                    type={"text"}
                                    text={"Phone number or email"}
                                    className={
                                        errors.password && touched.password
                                            ? "text-black bg-[#E9ECEF] w-full h-[52px] px-6 py-2 border border-red-500 rounded-2xl focus:outline-none focus:border-blue-500"
                                            : "text-black bg-[#E9ECEF] w-full h-[52px] px-6 py-2 border rounded-2xl focus:outline-none focus:border-blue-500"
                                    }/>
                                <ErrorMessage name="phoneNumberOrEmail" component="div"
                                              className="text-red-500 text-sm mb-2"/>
                            </div>

                            {/*Password*/}
                            <div>
                                <InputComponent
                                    name="password"
                                    onChange={handleChange}
                                    value={values.password} type={"password"} text={"Password"}
                                    className={
                                        errors.password && touched.password
                                            ? "text-black bg-[#E9ECEF] w-full h-[52px] px-6 py-2 border border-red-500 rounded-2xl focus:outline-none focus:border-blue-500"
                                            : "text-black bg-[#E9ECEF] w-full h-[52px] px-6 py-2 border rounded-2xl focus:outline-none focus:border-blue-500"
                                    }/>
                                <ErrorMessage name="password" component="div"
                                              className="text-red-500 text-sm mb-2"/>
                            </div>

                            {/*Remember me*/}
                            <div className="flex items-center">
                                <input type="checkbox" className="mr-2 "/>
                                <span className="text-[#495057] text-sm">Remember me</span>
                            </div>

                            {/*Button submit to login*/}
                            <AuthButtonComponent text={"Log In"}/>

                            {/*Other options*/}
                            <div className="flex items-center">
                                <span className="flex-grow border-t border-gray-300"></span>
                                <p className="text-center text-black text-sm mx-4">Or Log In Using</p>
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
                <p className="text-center mt-6">
                    <a href="#" className=" text-[#D96E48] hover:text-[#f29849] hover:no-underline">
                        Forgot password?
                    </a>
                </p>

                {/* -> Sign Up*/}
                <p className="text-center mt-6 mb-4">
                    <span className="text-black">Don't have an account?</span>
                    <a href="#" className="text-[#D96E48] hover:text-[#f29849] hover:no-underline">Sign up</a>
                </p>

            </div>
        </div>
    );
}
