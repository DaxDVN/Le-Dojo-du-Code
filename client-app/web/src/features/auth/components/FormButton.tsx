import {Button} from "flowbite-react";
import CommonProps from "../interfaces/CommonProps.ts";

function FormButton({text}: CommonProps) {
    return (
        <Button type="submit" pill className="w-full border-none bg-[#D96E48] hover:bg-[#f29849] active:bg-[#f29849] m-2">
            {text}
        </Button>
    );
}

export default FormButton;