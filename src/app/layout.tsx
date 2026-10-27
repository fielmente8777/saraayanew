import StructuredData from "@/components/seo/StructuredData";
import { createPageMetadata, siteUrl } from "@/utils/metadata";
import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Inter } from "next/font/google";
import "./globals.css";
import "./style.scss";
import Footer from "@/components/footer/Footer";
import { contact } from "@/utils/constent";
import Script from "next/script";
import NavBar from "@/components/navbar/NavBar";
import { WebProvider } from "@/context-api/WebContext";
import Image from "next/image";
import PopUpButton from "@/components/pop-up/PopUpButton";
import PopUpInfo from "@/components/pop-up/PopUpInfo";
import localFont from "next/font/local";
import ConditionalContactButtons from "@/components/ContactButton/ConditionalContactButtons";
import PopUpForm from "@/components/pop-up/PopUpForm";
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  preload: false,
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  preload: false,
  subsets: ["latin"],
});

const minion = localFont({
  src: [
    {
      path: "./font/MinionPro-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/MinionPro-It.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "./font/MinionPro-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./font/MinionPro-BoldIt.woff",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-minion",
  preload: false,
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...createPageMetadata(
    "/",
    "Saraaya Glamps | A Private Glamping Experience in the Himalayas",
    "Discover Saraaya near Dharamshala: four private Safari suites, mountain views, heaters and thoughtful comforts. Plan your Himalayan stay with our hosts."
  ),
  icons: {
    icon: "/favicon.ico",
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} ${minion.variable} ${montserrat.variable} h-full antialiased`}
    >
      <head>
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "wit1af7fpf");`}
        </Script>
        {/* <!-- Meta Pixel Code --> */}
        <Script id="meta-pixel" strategy="lazyOnload">
          {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1297264175884694');
            fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <Image
            height="1"
            width="1"
            alt="fb-pixel"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1297264175884694&ev=PageView&noscript=1"
          />
        </noscript>
        {/* <!-- End Meta Pixel Code --> */}
        {/* <!-- Google tag (gtag.js) --> */}

        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          id="ga4-primary-loader"
          async
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-J2HMM3JFSZ"
        ></Script>
        <Script id="ga4-primary-config" strategy="lazyOnload">
          {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-J2HMM3JFSZ');`}
        </Script>
        <Script id="ga4-secondary-config" strategy="lazyOnload">
          {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-PVZG7NGGMG');`}
        </Script>
        {/* <!-- Google Tag Manager --> */}
        <Script
          id="gtm-container"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PKWH43HK')`,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body className="" suppressHydrationWarning={true}>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PKWH43HK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}

        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": siteUrl + "/#website",
                url: siteUrl + "/",
                name: "Saraaya Glamps",
                inLanguage: "en-IN",
              },
              {
                "@type": "LodgingBusiness",
                "@id": siteUrl + "/#lodging",
                name: "Saraaya Glamps",
                url: siteUrl + "/",
                telephone: "+918988334372",
                email: contact.email,
                image: siteUrl + "/rooms/Mountain-1.png",
                logo: siteUrl + "/logo-1.png",
                description:
                  "A distinctive boutique stay with four private safari suites in Nauhali near Dharamshala.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Village Nauhali",
                  addressLocality: "Dharamshala",
                  addressRegion: "Himachal Pradesh",
                  postalCode: "176217",
                  addressCountry: "IN",
                },
                hasMap: contact.addressLink,
                sameAs: [
                  contact.socialMedia.instagram,
                  contact.socialMedia.facebook,
                ],
                amenityFeature: [
                  {
                    "@type": "LocationFeatureSpecification",
                    name: "Heaters in safari suites",
                    value: true,
                  },
                  {
                    "@type": "LocationFeatureSpecification",
                    name: "Private attached bathrooms",
                    value: true,
                  },
                ],
              },
            ],
          }}
        />
        <WebProvider>
          {/* <Popup /> */}
          <NavBar />
          {children}
          <Footer />
          <ConditionalContactButtons />
          <PopUpForm />
          <PopUpButton />
          <PopUpInfo />
        </WebProvider>

        {/* <!-- Eazbot Script (Next.js) --> */}
        {/* <Script id="chatbot-config" strategy="lazyOnload">
          {`
            window.eazbotConfig = {
              ndid: "48efe4a5-80fe-4f2a-9615-9e4f98dc57a3",
              hid: "61357866",
            };
          `}
        </Script>
        <Script
          src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js"
          strategy="lazyOnload"
        /> */}
      </body>
    </html>
  );
}
