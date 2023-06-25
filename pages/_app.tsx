import "@/styles/globals.css";
// import { Session } from "next/auth";
import { SessionProvider } from "next-auth/react";
// import { AppProps } from "next/app";

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
