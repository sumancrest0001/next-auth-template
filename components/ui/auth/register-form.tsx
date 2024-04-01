'use client';

import { registerAction } from "@/actions/register";
import { CardWrapper } from "@/components/common/card-wrapper";
import { FormError } from "@/components/common/form-error";
import { FormSuccess } from "@/components/common/form-success";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RegisterSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from "../button";

export default function RegisterForm() {
    const [successMessage, setSuccessMessage] = useState<string | undefined>();
    const [errorMessage, setErrorMessage] = useState<string | undefined>();
    const [loading, startTransition] = useTransition();
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmitForm = (values: z.infer<typeof RegisterSchema>) => {
        setErrorMessage('');
        setSuccessMessage('');
        startTransition(() => {
            registerAction(values)
                .then(data => {
                    setErrorMessage(data.error);
                    setSuccessMessage(data.success)
                });
        });
    }
    return (<CardWrapper
        headerLabel="Create an account"
        backButtonLabel="Already have an account?"
        backButtonHref="/auth/login"
        showSocial
    >
        <Form {...form}>
            <form
                className="y-6"
                onSubmit={form.handleSubmit(onSubmitForm)}>
                <div className=" flex flex-col gap-y-6 mb-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        disabled={loading}
                                        {...field}
                                        placeholder="john doe"
                                        type={'text'}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        disabled={loading}
                                        {...field}
                                        placeholder="john.doe@example.com"
                                        type={'email'}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        disabled={loading}
                                        {...field}
                                        placeholder="*********"
                                        type={'password'}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input
                                        disabled={loading}
                                        {...field}
                                        placeholder="*********"
                                        type={'password'}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                {errorMessage && <FormError message={errorMessage} />}
                {successMessage && <FormSuccess message={successMessage} />}
                <Button
                    disabled={loading}
                    type="submit"
                    className="w-full">
                    Register
                </Button>
            </form>
        </Form>
    </CardWrapper>)
}