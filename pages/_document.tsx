import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html>
            <Head>
                {/* <link href='/static/img/favicon.png' rel='icon'></link>
                <link
                    href='/static/img/apple-touch-icon.png'
                    rel='apple-touch-icon'></link>

                <link
                    rel='preconnect'
                    href='https://fonts.googleapis.com'></link>
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossOrigin={"true"}></link>
                <link
                    href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Roboto:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap'
                    rel='stylesheet'></link> */}

                {/* <link
                    href='/static/vendor/bootstrap/css/bootstrap.min.css'
                    rel='stylesheet'></link>
                <link
                    href='/static/vendor/bootstrap-icons/bootstrap-icons.css'
                    rel='stylesheet'></link> */}
                {/* <link
                    href='/static/vendor/fontawesome-free/css/all.min.css'
                    rel='stylesheet'></link>
                <link href='/static/vendor/aos/aos.css' rel='stylesheet'></link>
                <link
                    href='/static/vendor/glightbox/css/glightbox.min.css'
                    rel='stylesheet'></link>
                <link
                    href='/static/vendor/swiper/swiper-bundle.min.css'
                    rel='stylesheet'></link>

                <link href='/static/css/main.css' rel='stylesheet'></link> */}
            </Head>
            <body>
                <Main />
                <NextScript />

                <a
                    href='#'
                    className='scroll-top d-flex align-items-center justify-content-center'>
                    <i className='bi bi-arrow-up-short'></i>
                </a>

                <div id='preloader'></div>

                <Script
                    strategy='beforeInteractive'
                    src='/static/vendor/bootstrap/js/bootstrap.bundle.min.js'></Script>
                <Script
                    strategy='beforeInteractive'
                    src='/static/vendor/aos/aos.js'></Script>
                <Script
                    strategy='beforeInteractive'
                    src='/static/vendor/glightbox/js/glightbox.min.js'></Script>
                <Script
                    strategy='beforeInteractive'
                    src='/static/vendor/isotope-layout/isotope.pkgd.min.js'></Script>
                <Script
                    strategy='beforeInteractive'
                    src='/static/vendor/swiper/swiper-bundle.min.js'></Script>
                <Script
                    strategy='beforeInteractive'
                    src='/static/vendor/purecounter/purecounter_vanilla.js'></Script>
                <Script
                    strategy='beforeInteractive'
                    src='/static/vendor/php-email-form/validate.js'></Script>

                <Script
                    strategy='beforeInteractive'
                    src='/static/js/main.js'></Script>
            </body>
        </Html>
    );
}
