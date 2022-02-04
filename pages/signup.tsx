import type { NextPage } from 'next';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Head from 'next/head';
import Link from 'next/link';

import { BiShow, BiHide } from 'react-icons/bi';

type Inputs = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

const PASSWORD_ERROR: string =
    'Minimum eight, at least one uppercase letter, one lowercase letter, one number and one special character';
const PASSWORD_REGEX: RegExp =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i;

const SignUp: NextPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    const [passwordShown, setPasswordShown] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    return (
        <>
            <Head>
                <title>Sign up - Course App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="mx-auto px-5 md:p-0 md:w-10/12 lg:w-9/12 xl:w-3/4">
                <form
                    className="w-90 mx-auto flex flex-col mt-4 md:mt-10 sm:w-3/4 xl:w-3/5 2xl:w-1/2"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h1 className="text-2xl">Create account</h1>

                    {/* FIRST AND LAST NAME INPUT */}

                    <div className="mt-4 flex flex-col sm:flex-row justify-between gap-2">
                        <div className="mb-2 sm:mb-0 w-full">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Your first name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                placeholder="John"
                                className="input"
                                {...register('firstName', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'Minimum 4 character length'
                                    }
                                })}
                            />
                            <InputError
                                error={errors.firstName}
                                defaultText="First name is required"
                            />
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Your last name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Kowalsky"
                                className="input"
                                {...register('lastName', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'Minimum 4 character length'
                                    }
                                })}
                            />
                            <InputError
                                error={errors.lastName}
                                defaultText="Last name is required"
                            />
                        </div>
                    </div>

                    {/* EMAIL INPUT */}

                    <div className="mt-4 mb-2">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="john@example.com"
                            className="input"
                            {...register('email', { required: true })}
                        />
                        <InputError
                            error={errors.email}
                            defaultText="Email is required"
                        />
                    </div>

                    {/* PASSWORD INPUT */}

                    <div className="my-2">
                        <label
                            htmlFor="pass"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your password
                        </label>

                        <div className="relative select-none">
                            <input
                                type={passwordShown ? 'text' : 'password'}
                                id="pass"
                                placeholder="Password"
                                className="input relative"
                                {...register('password', {
                                    required: true,
                                    pattern: {
                                        value: PASSWORD_REGEX,
                                        message: PASSWORD_ERROR
                                    }
                                })}
                            />
                            <div className="absolute right-0 top-0 w-10 h-10 grid place-items-center cursor-pointer touch-none">
                                {passwordShown ? (
                                    <BiHide
                                        size={25}
                                        onClick={togglePasswordVisibility}
                                    />
                                ) : (
                                    <BiShow
                                        size={25}
                                        onClick={togglePasswordVisibility}
                                    />
                                )}
                            </div>
                        </div>

                        <InputError
                            error={errors.password}
                            defaultText="Password is required"
                        />
                    </div>

                    {/* PHOTOURL INPUT */}

                    <div className="my-2">
                        <label
                            htmlFor="photoURL"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your photo url
                        </label>
                        <input
                            type="text"
                            id="photoURL"
                            placeholder="URL to image or leave blank"
                            className="input"
                        />
                    </div>

                    <span className="text-gray-300 text-xs mt-2">
                        By signing up you agree to the{' '}
                        <Link href="/" passHref>
                            <span className="hover:underline cursor-pointer">
                                Terms of Service
                            </span>
                        </Link>{' '}
                        and{' '}
                        <Link href="/" passHref>
                            <span className="hover:underline cursor-pointer">
                                Privacy Policy
                            </span>
                        </Link>
                        .
                    </span>

                    <input
                        type="submit"
                        className="button mt-2"
                        value="Create account"
                    />
                </form>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </main>
        </>
    );
};

const InputError = ({
    error,
    defaultText
}: {
    error: any;
    defaultText: string;
}) => {
    if (error)
        return (
            <span className="text-red-400 text-sm">
                {error.message ? error.message : `${defaultText}`}
            </span>
        );
    return <></>;
};

export default SignUp;
