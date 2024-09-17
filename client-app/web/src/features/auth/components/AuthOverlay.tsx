import {Button} from "flowbite-react";
import {CommonProps} from "../interfaces/CommonProps.ts";

function AuthOverlay({onSetValue, text, value}: CommonProps) {


    return (
        <div className={"absolute w-full bg-amber-600 h-full z-10 rounded-lg"}>

                <div className="absolute inset-0 flex flex-col space-y-4 items-center justify-center font-bold bg-[#D96E48]  rounded-lg">
                    <span>{text}</span>
                    <Button onClick={() => {
                        if (onSetValue) {
                            onSetValue();
                        }
                    }}
                            className="text-[#D96E48] bg-white px-4 py-2 rounded-lg shadow-md hover:bg-[#e9ecef]">{value}</Button>
                </div>

        </div>
    );
}

export default AuthOverlay;