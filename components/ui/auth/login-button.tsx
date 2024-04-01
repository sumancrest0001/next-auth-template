"use client";
import { useRouter } from 'next/navigation';

interface LoginButtonProps {
    children: React.ReactNode,
    mode?: 'modal' | 'redirect',
    asChild?: boolean
}

export default function LoginButton({
    children,
    mode = 'redirect',
    asChild
}: LoginButtonProps) {

    const router = useRouter();

    const onClickHandler = () => {
        router.push('/auth/login');
    }
    return (
        <span className="cursor-pointer" onClick={onClickHandler}>
            {children}
        </span>
    )
}