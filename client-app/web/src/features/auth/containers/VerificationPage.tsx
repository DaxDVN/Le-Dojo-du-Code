import React from "react";
import FormInput from "../components/FormInput.tsx";
import {Link, useLocation, useNavigate} from "react-router-dom";
import FormButton from "../components/FormButton.tsx";
import {enterCode} from "../utils/authValidationSchema.ts";
import {ErrorMessage, Form, Formik} from "formik";

export default function VerificationPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = location.state;
    console.log(user)
    const email = "";
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-sm p-12 space-y-4 bg-white rounded-lg shadow-md flex flex-col items-center">
                <h1 className="text-center font-semibold text-black text-4xl mb-10">Sign Up</h1>
                <p className='text-black font-bold text-center'>Please verify your email</p>
                {/*<img src={mailIcon} alt="Mail" className="mb-4"/>*/}
                <div className="p-4 bg-[#b2f2bb] w-full mb-4 text-center">
                    <p className='text-black text-sm'>
                        We've sent an email to {email} with instructions.
                    </p>
                </div>
                <Formik
                    initialValues={{
                        emailCode: '',
                    }}
                    validationSchema={enterCode}
                    onSubmit={( values) => {
                        console.log(values);
                        navigate("/verify/complete", {state: {emailCode: values}})
                    }}
                >
                    {({handleChange, values, errors, touched}) => (
                    <Form className={'space-y-4'}>
                            <div>
                                <FormInput text={"Enter code"}
                                           type={"text"}
                                           name="emailCode"
                                           onChange={handleChange}
                                           value={values.emailCode}
                                           errorCase={
                                               errors.emailCode && touched.emailCode
                                                   ? "text-black bg-[#E9ECEF] w-full h-[52px] px-6 py-2 border border-red-500 rounded-2xl focus:outline-none focus:border-blue-500"
                                                   : "text-black bg-[#E9ECEF] w-full h-[52px] px-6 py-2 border rounded-2xl focus:outline-none focus:border-blue-500"
                                           }/>
                                <ErrorMessage name="emailCode" component="div"
                                              className="text-red-500 text-[12px] mb-2"/>
                            </div>
                        <FormButton text={'Continue'}/>
                    </Form>
                )}
                </Formik>

                <span className='text-[12px] text-black'>
                    Didn't receive an email? <Link to='#' className='text-[#D96E48]'>Resend email</Link>
                </span>
                <Link to={'/'} className='text-[#D96E48] hover:text-[#f29849] active:text-[#f29849] text-[12px]'>Return to Login</Link>
            </div>
        </div>
    );
}