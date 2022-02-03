import type { NextPage } from 'next';
import Head from 'next/head';

const SignIn: NextPage = () => {
    return (
        <>
            <Head>
                <title>Sign in - Course App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="mx-auto px-5 md:p-0 md:w-10/12 lg:w-9/12 xl:w-3/4">
                <form className="w-90 flex flex-col mt-2 md:mt-10 mx-auto sm:w-3/4 md:w-3/5 xl:w-1/2">
                    <h1 className="text-2xl">Sign in</h1>
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
                            required
                        />
                    </div>

                    <div className="my-2">
                        <label
                            htmlFor="pass1"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your password
                        </label>
                        <input
                            type="password"
                            id="pass1"
                            placeholder="Password"
                            className="input"
                            required
                        />
                    </div>

                    <input
                        type="submit"
                        className="button my-2"
                        value="Sign in"
                    />
                </form>
            </main>
        </>
    );
};

export default SignIn;
