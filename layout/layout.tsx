import Header from '../components/Header';

export default function Layout({ children }: any) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
}
