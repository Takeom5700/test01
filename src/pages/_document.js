import Document, {Html, Head, Main, NextScript} from 'next/document';
import React from "react";
import Script from "next/script"

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <Script
                  id="gtm-script-head"
                  strategy="afterInteractive"
                  dangerouslySetInnerHTML={{
                    __html: `
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer', 'GTM-P9QV8WD');
                  `,
                  }}
                />
                </Head>
                
                <body className="font-poppins bg-bodyBG text-dobyText">
                <Script
                  id="gtm-script-head"
                  strategy="afterInteractive"
                  dangerouslySetInnerHTML={{
                    __html: `
                    (<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P9QV8WD"
                    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>);
                  `,
                  }}
                />

                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
};
