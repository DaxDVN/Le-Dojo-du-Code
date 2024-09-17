import {Button} from "flowbite-react";
import CommonProps from "../interfaces/CommonProps.ts";

function AuthButton({text}: CommonProps) {
    return (
        <Button type="submit" pill className="w-full border-none bg-[#D96E48] hover:bg-[#f29849] active:bg-[#f29849]">
            {text}
        </Button>
    );
}

export default AuthButton;