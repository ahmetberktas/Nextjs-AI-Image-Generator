import "../styles/reset.css";
import "../styles/variable.css";
import "../styles/global.css";

import { inter } from "@/lib/font";

import Head from "./head";
import Footer from "../components/footer/index";

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.className}>
      <Head></Head>
      <body className="layout">
        {children}
        <div className="overlay"></div>
        <Footer />
      </body>
    </html>
  );
}
