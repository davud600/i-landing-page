import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta charSet='utf-8'></meta>
                <meta
                    content='width=device-width, initial-scale=1.0'
                    name='viewport'></meta>

                <title>Ilir Belegu</title>
                <meta content='' name='description'></meta>
                <meta content='' name='keywords'></meta>
            </Head>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
