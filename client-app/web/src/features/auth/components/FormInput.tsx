import {useState} from "react";

function FormInput({text, type,name, ...props }) {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        const { value } = event.target;
        setValue(value);

        if (value.includes("@")) {
            console.log("Email entered:", value);
        } else {
            console.log("Phone number entered:", value);
        }
    };
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            className="text-black bg-[#E9ECEF] w-full h-[52px] px-6 py-2 border rounded-2xl focus:outline-none focus:border-blue-500"
            placeholder={text}
            {...props}
        />

    );
}

export default FormInput;