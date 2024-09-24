import React from 'react';
import complete from '../../../assets/images/complete.svg'
import FormButton from './FormButton.tsx';
import {Link, useLocation} from "react-router-dom";

export default function AuthPopup() {
    const location = useLocation();
    const { emailCode } = location.state;
    console.log(emailCode)
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-sm p-12 space-y-4 bg-white rounded-lg shadow-md flex flex-col items-center">
                <h1 className="text-center font-semibold text-black text-4xl mb-10">Complete!</h1>
                <img src={complete} alt="Complete" className="mb-4 bg-green-600 rounded-full w-36"/>
                <div className="p-4 bg-[#b2f2bb] w-full mb-4 text-center">
                    <p className='text-black text-sm'>
                        Success! Your email has been verified.
                    </p>
                </div>
                <Link to={'/'} className={'w-full'}>
                    <FormButton text='Continue'/>
                </Link>
            </div>
        </div>
    );
}
