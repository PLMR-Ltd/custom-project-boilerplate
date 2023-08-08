import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link href="/favicon.webp" rel="icon" type="image/webp" />
                <link href="https://fonts.googleapis.com" rel="preconnect" />
                <link
                    href="https://fonts.gstatic.com"
                    rel="preconnect"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
