import mailIcon from '../../../assets/images/e-mail.svg'
import AuthButton from "../components/AuthButton.tsx";

export default function VerificationPage() {

    const email = 'ducnguyen7925@gmail.com'

    return (
        <div className="flex items-center justify-center h-full">
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-center font-semibold text-black text-4xl m-8">Sign Up</h1>
                <span className='text-black text-center'> Please verify your email </span>
                    <img src={mailIcon} alt="Mail"/>
                <span className={'text-black p-2'}>
                    We've sent an email to {email}  with instructions.
                </span>
                <a href='https://mail.google.com/'>
                    <AuthButton text={"Verify Email"}></AuthButton>
                </a>

            </div>
        </div>
    );
}