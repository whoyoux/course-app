import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { ThemeProvider } from 'next-themes';
import { AuthProvider } from '../context/AuthContext';

import Layout from '../layout/layout';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <ThemeProvider attribute="class">
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default MyApp;
