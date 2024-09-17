import {Button} from "flowbite-react";

function AuthButtonComponent({text}) {
    return (
        <Button type="submit" pill className="w-full border-none bg-[#D96E48] hover:bg-[#f29849] active:bg-[#f29849]">
            {text}
        </Button>
    );
}

export default AuthButtonComponent;