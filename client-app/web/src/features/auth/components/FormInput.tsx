import React, {ChangeEvent} from "react";

interface Props {
    text?:string,
    type?:string ,
    name?:string,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
    value?:string,
    errorCase?:string
}

function FormInput({text, type,name, errorCase, ...props } : Props) {
    return (
        <input
            type={type}
            name={name}
            className={`text-black bg-[#E9ECEF] w-full h-[52px] px-6 py-2 border rounded-2xl focus:outline-none focus:border-blue-500 ${errorCase}`}
            placeholder={text}
            {...props}
        />

    );
}

export default FormInput;