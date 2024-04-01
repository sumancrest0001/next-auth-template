import { BsCheckCircleFill } from "react-icons/bs";

interface FormSuccessProps {
    message?: string
}

export const FormSuccess = ({ message }: FormSuccessProps) => {

    if (!message) return null;
    return (<div className="bg-emerald-500/15 my-4 p-3 rounded-md flex gap-x-2 text-emerald-500 text-sm items-center">
        <BsCheckCircleFill />
        <p>
            {message}
        </p>
    </div>)
}