import FormInput from "../components/FormInput.tsx";

export default function VerificationPage() {

    const email = 'ducnguyen7925@gmail.com'

    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-sm p-12 space-y-4 bg-white rounded-lg shadow-md flex flex-col items-center">
                <h1 className="text-center font-semibold text-black text-4xl mb-10">Sign Up</h1>
                <p className='text-black text-center'>Please verify your email</p>
                {/*<img src={mailIcon} alt="Mail" className="mb-4"/>*/}
                <div className="p-4 bg-[#b2f2bb] w-full mb-4 text-center">
                    <p className='text-black text-sm'>
                        We've sent an email to {email} with instructions.
                    </p>
                </div>
                <FormInput text='Enter code'/>
                <span className='text-black'>
                    Didn't receive an email? <a href='#' className='text-[#D96E48]'>Resend email</a>
                </span>
                <a href={'#'} className='text-[#D96E48]'>Return to Login</a>
            </div>
        </div>
    );
}