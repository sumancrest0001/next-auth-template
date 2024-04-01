import { AiFillWarning } from "react-icons/ai";

interface FormErrorProps {
    message?: string
}

export const FormError = ({ message }: FormErrorProps) => {

    if (!message) return null;
    return (<div className="bg-destructive/15 my-4 p-3 rounded-md flex gap-x-2 text-destructive text-sm items-center">
        <AiFillWarning />
        <p>
            {message}
        </p>
    </div>)
}