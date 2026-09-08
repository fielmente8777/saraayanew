import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Inter } from "next/font/google";
import "./globals.css";
import "./style.scss";
import Footer from "@/components/footer/Footer";
import Call from "@/components/ContactButton/Call";
import { contact } from "@/utils/constent";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import Script from "next/script";
import NavBar from "@/components/navbar/NavBar";
import { WebProvider } from "@/context-api/WebContext";
import Image from "next/image";
import PopUpButton from "@/components/pop-up/PopUpButton";
import PopUpInfo from "@/components/pop-up/PopUpInfo";
import localFont from "next/font/local";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const minion = localFont({
  src: [
    {
      path: "./font/MinionPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/MinionPro-It.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./font/MinionPro-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./font/MinionPro-BoldIt.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-minion",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saraaya Glamping Retreat | Luxury Stay in Dharamshala Himalayas",
  description:
    "Saraaya is a luxury glamping retreat in Dharamshala, Himachal Pradesh. Stay beside a pristine glacier stream with Himalayan views, forest surroundings, and exclusive tent experiences. Only four tents available per night.",
  keywords:
    "Saraaya, glamping Dharamshala, luxury tents Himachal Pradesh, Himalayan retreat, glamping India, Kareri Lake stay, Lam Dal trek stay, luxury camping Himalayas, boutique retreat Dharamshala",
  openGraph: {
    title: "Saraaya Glamping Retreat | Luxury Stay in Dharamshala Himalayas",
    description:
      "Saraaya is a luxury glamping retreat in Dharamshala, Himachal Pradesh. Stay beside a pristine glacier stream with Himalayan views, forest surroundings, and exclusive tent experiences. Only four tents available per night.",
    images: [
      {
        url: "/logo-1.png",
        width: 800,
        height: 600,
        alt: "Saraaya Glamping Retreat",
      },
    ],
    siteName: "Saraaya Glamping Retreat",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <script type="text/javascript" id="clarity">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "wit1af7fpf");`}
        </script>
        {/* <!-- Meta Pixel Code --> */}
        <script>
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
        </script>
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
          id="google-tag-manager"
          async
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-J2HMM3JFSZ"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-J2HMM3JFSZ');`}
        </Script>
        <Script
          async
          id="google-tag-manager"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-PVZG7NGGMG"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-PVZG7NGGMG');`}
        </Script>
        {/* <!-- Google Tag Manager --> */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
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
      <body className="" suppressHydrationWarning={true} >
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

        <WebProvider>
          <NavBar />
          {children}
          <Footer />
          <Whatsapp whatsAppNumber={contact.phone[1]} />
          <Call callNumber={contact.phone[1]} />
          <PopUpButton />
          <PopUpInfo />
        </WebProvider>

        {/* <!-- Eazbot Script (Next.js) --> */}
        <Script id="chatbot-config" strategy="afterInteractive">
          {`
            window.eazbotConfig = {
              ndid: "48efe4a5-80fe-4f2a-9615-9e4f98dc57a3",
              hid: "61357866",
            };
          `}
        </Script>
        <Script
          src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
