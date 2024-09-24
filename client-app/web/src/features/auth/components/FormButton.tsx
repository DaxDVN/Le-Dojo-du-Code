import {Button} from "flowbite-react";
import {CommonProps} from "../interfaces/CommonProps.ts";
import React from "react";

function FormButton({text}: CommonProps) {
    return (
        <Button type="submit" pill className="items-center w-full h-[54px] border-none bg-[#D96E48] hover:bg-[#f29849] active:bg-[#f29849] m-2">
            {text}
        </Button>
    );
}

export default FormButton;