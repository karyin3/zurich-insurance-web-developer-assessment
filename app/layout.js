import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import NextAuthProvider from "./NextAuthProvider";
import ReduxProvider from "./ReduxProvider";
import AuthWrapper from "../app/components/AuthWrapper";
import { getSession } from "../lib/features/auth/authConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zurich Insurance Customer Portal",
  description: "Zurich Insurance Customer Portal"
};

export default async function RootLayout({ children }) {
  const session = await getSession();
  return (
    <html lang="en">
      <body className={inter.className + " flex flex-col min-h-screen"}>
        <NextAuthProvider>
          <ReduxProvider>
            <AuthWrapper session={session}>
              <Header />
              {children}
              <Footer />
            </AuthWrapper>
          </ReduxProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
